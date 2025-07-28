---
layout: post
title: Jenkins 流水线模板
categories:
  - 思米米的小笔记
date: 2025-07-28 11:20:37
---

Jenkins 流水线模板，用于自动化构建、部署和验证应用。

<!-- more -->

## 一、Jenkins 流水线模板

### 1. 流水线模板 本机部署

```groovy
pipeline {
    agent any
    environment {
        // 🐳 Docker配置
        DOCKER_REGISTRY = "xxx/xxx-dev"
        // 📁 Git配置
        GIT_REPOSITORY = "http://xxx.git"
        GIT_CREDENTIALS_ID = "35b228e2-0a11-45ca-b33f-7f521b70b440"
        // 🚀 项目配置
        PROJECT_NAME = 'xxx-web'
        APP_PORT = '3090'
        MEMORY_LIMIT = '1g'
        CPU_LIMIT = '1.0'
        BUILD_COMMAND = 'build:dev'
        // 📊 构建元数据
        BUILD_TIMESTAMP = sh(script: "TZ='Asia/Shanghai' date '+%Y%m%d-%H%M%S'", returnStdout: true).trim()
        IMAGE_TAG = "${BUILD_NUMBER}-${BUILD_TIMESTAMP}"
    }
    options {
        buildDiscarder(logRotator(
            numToKeepStr: '10',
            artifactNumToKeepStr: '5',
            daysToKeepStr: '14'
        ))
        timeout(time: 20, unit: 'MINUTES')
        timestamps()
        skipStagesAfterUnstable()
        retry(1)
    }
    parameters {
        string(
            name: 'BRANCH',
            defaultValue: 'dev',
            description: '🌿 输入要部署的分支名 (例如: dev, staging, main)'
        )
        booleanParam(
            name: 'FORCE_REBUILD',
            defaultValue: false,
            description: '🔄 强制重新构建Docker镜像 (忽略缓存)'
        )
        booleanParam(
            name: 'SKIP_CLEANUP',
            defaultValue: false,
            description: '🧹 跳过旧镜像清理'
        )
    }
    stages {
        stage('🚀 构建准备') {
            steps {
                script {
                    def buildInfo = """
==================== 构建信息 ====================
项目名称: ${PROJECT_NAME}
分支: ${params.BRANCH}
构建号: ${BUILD_NUMBER}
镜像标签: ${IMAGE_TAG}
Docker镜像: ${DOCKER_REGISTRY}/${PROJECT_NAME}:${IMAGE_TAG}
构建时间: ${BUILD_TIMESTAMP}
构建者: ${env.BUILD_USER ?: 'System'}
=============================================="""
                    echo buildInfo
                    // 设置构建显示名称
                    currentBuild.displayName = "#${BUILD_NUMBER}-${params.BRANCH}"
                    currentBuild.description = "🌿 ${params.BRANCH} | 🏷️ ${IMAGE_TAG}"
                }
            }
        }
        stage('🔍 环境检查') {
            parallel {
                stage('🔍 Docker检查') {
                    steps {
                        script {
                            sh '''
                                echo "🐳 检查Docker环境..."
                                docker --version
                                docker buildx version
                                echo "📊 Docker磁盘使用情况:"
                                docker system df
                            '''
                        }
                    }
                }
                stage('🔍 资源检查') {
                    steps {
                        script {
                            sh '''
                                echo "💻 检查系统资源..."
                                echo "📊 内存使用:"
                                free -h
                                echo "💾 磁盘使用:"
                                df -h
                                echo "🔄 CPU信息:"
                                nproc
                            '''
                        }
                    }
                }
            }
        }
        stage('📥 代码检出') {
            steps {
                script {
                    echo "🔄 正在检出代码，分支: ${params.BRANCH}"
                    try {
                        checkout([
                            $class: 'GitSCM',
                            branches: [[name: "*/${params.BRANCH}"]],
                            doGenerateSubmoduleConfigurations: false,
                            extensions: [
                                [$class: 'CleanBeforeCheckout'],
[$class: 'PruneStaleBranch'],
                                // [$class: 'CloneOption', depth: 1, noTags: false, shallow: true],
[$class: 'SubmoduleOption', disableSubmodules: false, parentCredentials: true]
                            ],
                            submoduleCfg: [],
                            userRemoteConfigs: [[
                                credentialsId: GIT_CREDENTIALS_ID,
                                url: GIT_REPOSITORY
                            ]]
                        ])
                        // 获取详细的Git信息
                        env.COMMIT_HASH = sh(
                            script: "git rev-parse --short HEAD",
                            returnStdout: true
                        ).trim()
                        env.COMMIT_MESSAGE = sh(
                            script: "git log -1 --pretty=format:'%s' | head -c 100",
                            returnStdout: true
                        ).trim()
                        env.COMMIT_AUTHOR = sh(
                            script: "git log -1 --pretty=format:'%an'",
                            returnStdout: true
                        ).trim()
                        env.COMMIT_DATE = sh(
                            script: "TZ='Asia/Shanghai' git log -1 --pretty=format:'%ci'",
                            returnStdout: true
                        ).trim()
                        env.BRANCH_NAME = params.BRANCH
                        def checkoutSuccess = """✅ 代码检出成功!
提交哈希: ${env.COMMIT_HASH}
提交作者: ${env.COMMIT_AUTHOR}
提交时间: ${env.COMMIT_DATE}
提交信息: ${env.COMMIT_MESSAGE}"""
                        echo checkoutSuccess
                    } catch (Exception e) {
                        error("❌ 代码检出失败: ${e.getMessage()}")
                    }
                }
            }
        }
        stage('🔨 构建Docker镜像') {
            steps {
                script {
                    def dockerImageTag = "${DOCKER_REGISTRY}/${PROJECT_NAME}:${IMAGE_TAG}"
                    def dockerImageLatest = "${DOCKER_REGISTRY}/${PROJECT_NAME}:latest"
                    echo "🐳 开始构建Docker镜像: ${dockerImageTag}"
                    try {
                        // 根据构建类型设置不同的构建参数
                        def buildArgs = [
                            "--build-arg BUILD_CMD=${BUILD_COMMAND}",
                            "--build-arg PORT=${APP_PORT}",
                            "--build-arg COMMIT_HASH=${env.COMMIT_HASH}",
                            "--build-arg BUILD_NUMBER=${BUILD_NUMBER}",
                            "--build-arg BUILD_TIMESTAMP=${BUILD_TIMESTAMP}"
                        ]
                        if (params.FORCE_REBUILD) {
                            buildArgs.add("--no-cache")
                            echo "🔄 强制重新构建 (无缓存)"
                        }
                        // 使用buildx构建
                        sh """
                            docker buildx build \\
                                --progress=plain \\
                                --tag ${dockerImageTag} \\
                                --tag ${dockerImageLatest} \\
                                ${buildArgs.join(' ')} \\
                                --file Dockerfile \\
                                --label "io.jenkins.build-number=${BUILD_NUMBER}" \\
                                --label "io.jenkins.build-url=${BUILD_URL}" \\
                                --label "git.commit=${env.COMMIT_HASH}" \\
                                --label "git.branch=${params.BRANCH}" \\
                                --label "build.timestamp=${BUILD_TIMESTAMP}" \\
                                .
                        """
                        echo "✅ Docker镜像构建成功: ${dockerImageTag}"
                        // 显示镜像详细信息
                        sh """
                            echo "📊 镜像信息:"
                            docker inspect ${dockerImageTag} --format='{{.Size}}' | numfmt --to=iec
                            echo "🏷️  镜像标签:"
                            docker images ${DOCKER_REGISTRY}/${PROJECT_NAME} --format 'table {{.Tag}}\\t{{.Size}}\\t{{.CreatedSince}}' | head -10
                        """
                    } catch (Exception e) {
                        error("❌ Docker镜像构建失败: ${e.getMessage()}")
                    }
                }
            }
        }
        stage('🚀 部署应用') {
            steps {
                script {
                    def dockerImageTag = "${DOCKER_REGISTRY}/${PROJECT_NAME}:${IMAGE_TAG}"
                    echo "🚀 开始部署应用..."
                    try {
                        // 优雅停止现有容器
                        def existingContainer = sh(
                            script: "docker ps -q -f name=^/${PROJECT_NAME}\$",
                            returnStdout: true
                        ).trim()
                        if (existingContainer) {
                            echo "🔄 发现运行中的容器，执行优雅停止: ${existingContainer}"
                            sh """
                                # 发送SIGTERM信号，给应用30秒优雅关闭
                                docker stop --time=30 ${PROJECT_NAME} || true
                                # 清理容器
                                docker rm ${PROJECT_NAME} || true
                            """
                            echo "✅ 旧容器已优雅停止并清理"
                        }
                        // 启动新容器
                        echo "🚀 启动新容器: ${dockerImageTag}"
                        def containerCmd = """
                            docker run -d \\
                                --name ${PROJECT_NAME} \\
                                --restart=unless-stopped \\
                                --memory ${MEMORY_LIMIT} \\
                                --cpus="${CPU_LIMIT}" \\
                                --security-opt no-new-privileges:true \\
                                --user 1001:1001 \\
                                -p ${APP_PORT}:${APP_PORT} \\
                                --label "project=${PROJECT_NAME}" \\
                                --label "build=${BUILD_NUMBER}" \\
                                --label "commit=${env.COMMIT_HASH}" \\
                                --label "branch=${params.BRANCH}" \\
                                --label "deploy-time=\$(date -Iseconds)" \\
                                --env PORT=${APP_PORT} \\
                                ${dockerImageTag}
                        """
                        sh containerCmd
                        // 智能等待容器启动
                        echo "⏳ 等待容器启动"
                        def maxRetries = 30
                        def retryCount = 0
                        def containerStarted = false
                        while (retryCount < maxRetries && !containerStarted) {
                            sleep(time: 1, unit: 'SECONDS')
                            retryCount++
                            def containerStatus = sh(
                                script: "docker inspect ${PROJECT_NAME} --format='{{.State.Status}}'",
                                returnStdout: true
                            ).trim()
                            if (containerStatus == 'running') {
                                echo "✅ 容器已启动 (${retryCount}/${maxRetries} 尝试)"
                                containerStarted = true
                            } else {
                                echo "⏳ 等待容器启动... (${retryCount}/${maxRetries}) 状态: ${containerStatus}"
                            }
                        }
                        if (!containerStarted) {
                            error("❌ 容器启动超时")
                        }
                        // 验证部署
                        def containerId = sh(
                            script: "docker ps -q -f name=^/${PROJECT_NAME}\$",
                            returnStdout: true
                        ).trim()
                        if (containerId) {
                            def deploySuccess = """✅ 部署成功!
容器ID: ${containerId}
镜像标签: ${IMAGE_TAG}
访问端口: ${APP_PORT}"""
                            echo deploySuccess
                            // 显示容器详细信息
                            sh """
                                echo "📊 容器详细信息:"
                                docker ps -f name=${PROJECT_NAME} --format 'table {{.Names}}\\t{{.Status}}\\t{{.Ports}}'
                                echo "💾 资源使用:"
                                docker stats --no-stream ${PROJECT_NAME}
                            """
                        } else {
                            error("❌ 部署验证失败: 容器未能正常启动")
                        }
                    } catch (Exception e) {
                        error("❌ 部署失败: ${e.getMessage()}")
                    }
                }
            }
        }
        stage('📊 部署验证') {
            steps {
                script {
                    echo "📊 开始部署验证..."
                    try {
                        def verificationReport = """
==================== 部署验证报告 ===================="""
                        echo verificationReport
                        // 容器日志检查
                        echo "📋 最新容器日志 (最后30行):"
                        sh "docker logs --tail 30 --timestamps ${PROJECT_NAME}"
                        // 容器资源使用情况
                        echo "📊 容器资源使用:"
                        sh "docker stats --no-stream --format 'table {{.Name}}\\t{{.CPUPerc}}\\t{{.MemUsage}}\\t{{.NetIO}}' ${PROJECT_NAME}"
                        // 网络连接检查
                        echo "🌐 网络连接检查:"
                        sh """
                            echo "容器网络信息:"
                            docker port ${PROJECT_NAME}
                        """
                        // 容器进程检查
                        echo "🔍 容器进程:"
                        sh "docker exec ${PROJECT_NAME} ps aux || echo '无法获取进程信息'"
                        echo "✅ 部署验证完成"
                    } catch (Exception e) {
                        echo "⚠️ 部署验证过程中出现问题: ${e.getMessage()}"
                        unstable("部署验证出现警告")
                    }
                }
            }
        }
    }
    post {
        success {
            script {
                echo "🎉 构建和部署成功!"
                // 智能清理策略
                if (!params.SKIP_CLEANUP) {
                    try {
                        echo "🧹 执行智能清理..."
                        // 保留最近的构建
                        def buildsToKeep = 5
                        def oldBuildNumber = BUILD_NUMBER.toInteger() - buildsToKeep
                        if (oldBuildNumber > 0) {
                            def oldImage = "${DOCKER_REGISTRY}/${PROJECT_NAME}:${oldBuildNumber}*"
                            sh """
                                # 清理旧版本镜像
                                docker images ${DOCKER_REGISTRY}/${PROJECT_NAME} --format '{{.Tag}}' | \\
                                grep -E '^[0-9]+-' | \\
                                sort -V | \\
                                head -n -${buildsToKeep} | \\
                                xargs -r -I {} docker rmi ${DOCKER_REGISTRY}/${PROJECT_NAME}:{} || true
                            """
                        }
                        // 清理无用资源
                        sh """
                            # 清理悬空镜像
                            docker image prune -f || true
                            # 清理停止的容器
                            docker container prune -f || true
                            # 清理无用的网络
                            docker network prune -f || true
                        """
                        echo "✅ 清理完成"
                    } catch (Exception e) {
                        echo "⚠️ 清理过程中出现问题: ${e.getMessage()}"
                    }
                }
                // 构建成功总结
                def successSummary = """
==================== 部署成功总结 ====================
项目: ${PROJECT_NAME}
分支: ${params.BRANCH}
构建号: ${BUILD_NUMBER}
镜像标签: ${IMAGE_TAG}
提交: ${env.COMMIT_HASH ?: 'N/A'}
镜像: ${DOCKER_REGISTRY}/${PROJECT_NAME}:${IMAGE_TAG}
端口: ${APP_PORT}
部署时间: ${new Date()}
构建链接: ${BUILD_URL}
=============================================="""
                echo successSummary
                // 发送通知 (示例)
                // slackSend(
                //     color: 'good',
                //     message: "✅ ${PROJECT_NAME} 部署成功! 分支: ${params.BRANCH}, 构建: #${BUILD_NUMBER}"
                // )
            }
        }
        failure {
            script {
                echo "❌ 构建或部署失败!"
                def failureInfo = """
==================== 部署失败信息 ====================
项目: ${PROJECT_NAME}
分支: ${params.BRANCH}
构建号: ${BUILD_NUMBER}
提交: ${env.COMMIT_HASH ?: 'N/A'}
失败阶段: ${env.STAGE_NAME ?: 'Unknown'}
失败时间: ${new Date()}
构建链接: ${BUILD_URL}
控制台日志: ${BUILD_URL}console
=============================================="""
                echo failureInfo
                // 收集故障排除信息
                try {
                    echo "🔍 收集故障排除信息..."
                    sh """
                        echo "=== Docker容器状态 ==="
                        docker ps -a | grep ${PROJECT_NAME} || echo "未找到相关容器"

                        echo "=== Docker镜像 ==="
                        docker images | grep ${PROJECT_NAME} || echo "未找到相关镜像"

                        echo "=== 系统资源 ==="
                        free -h
                        df -h

                        echo "=== 最近的容器日志 ==="
                        docker logs --tail 50 ${PROJECT_NAME} 2>/dev/null || echo "无法获取容器日志"
                    """
                } catch (Exception e) {
                    echo "⚠️ 收集故障信息失败: ${e.getMessage()}"
                }
                // 发送失败通知
                // slackSend(
                //     color: 'danger',
                //     message: "❌ ${PROJECT_NAME} 部署失败! 分支: ${params.BRANCH}, 构建: #${BUILD_NUMBER}\n详情: ${BUILD_URL}"
                // )
            }
        }
        always {
            script {
                echo "🧹 执行构建后清理..."
                try {
                    // 清理临时资源
                    sh """
                        # 清理临时容器
                        docker container prune -f --filter 'until=1h' || true

                        # 清理构建缓存 (可选，谨慎使用)
                        # docker builder prune -f --keep-storage 10GB || true
                    """
                    echo "✅ 构建后清理完成"
                    // 记录构建统计
                    def buildDuration = currentBuild.duration ?: 0
                    def buildResult = currentBuild.result ?: 'SUCCESS'
                    def buildStats = """
📊 构建统计:
持续时间: ${buildDuration}ms
结果: ${buildResult}
构建号: ${BUILD_NUMBER}"""
                    echo buildStats
                } catch (Exception e) {
                    echo "⚠️ 清理过程中出现问题: ${e.getMessage()}"
                }
            }
        }
        unstable {
            script {
                echo "⚠️ 构建完成但存在警告"
                // emailext(
                //     subject: "⚠️ ${PROJECT_NAME} 构建不稳定 - #${BUILD_NUMBER}",
                //     body: "构建完成但存在警告，请检查日志。",
                //     to: "${env.CHANGE_AUTHOR_EMAIL}"
                // )
            }
        }
        aborted {
            script {
                echo "🚫 构建被中止"
            }
        }
    }
}
```

### 2. 流水线模板 远程部署

```groovy
pipeline {
    agent any
    environment {
        // 📊 构建元数据
        BUILD_TIMESTAMP = sh(script: "TZ='Asia/Shanghai' date '+%Y%m%d-%H%M%S'", returnStdout: true).trim()
        IMAGE_TAG = "${BUILD_NUMBER}-${BUILD_TIMESTAMP}"
        // 🚀 项目配置
        PROJECT_NAME = 'xxx-web'
        APP_PORT = '3090'
        MEMORY_LIMIT = '1g'
        CPU_LIMIT = '1.0'
        BUILD_COMMAND = 'build:dev'
        // 🐳 Docker配置
        DOCKER_REGISTRY = "xxx/xxx-dev"
        DOCKER_LOGIN_CREDENTIALS_ID = "47ea54fa-a957-4f67-97c6-c3bcebd863f6"
        DOCKER_IMAGE = "${DOCKER_REGISTRY}/${PROJECT_NAME}:${IMAGE_TAG}"
        // 🚀 部署配置
        DEPLOY_PROJECT_SSH_HOST = "170.187.173.192"
        DEPLOY_PROJECT_SSH_CREDENTIALS_ID = "84406c49-7110-44cf-8e8d-80927586ec56"
        // 📁 Git配置
        GIT_REPOSITORY = "http://xxx.git"
        GIT_CREDENTIALS_ID = "35b228e2-0a11-45ca-b33f-7f521b70b440"
    }
    options {
        buildDiscarder(logRotator(
            numToKeepStr: '10',
            artifactNumToKeepStr: '5',
            daysToKeepStr: '14'
        ))
        timeout(time: 8, unit: 'MINUTES')
        timestamps()
        skipStagesAfterUnstable()
        retry(1)
    }
    parameters {
        string(
            name: 'BRANCH',
            defaultValue: 'dev',
            description: '🌿 输入要部署的分支名 (例如: dev, staging, main)'
        )
        booleanParam(
            name: 'FORCE_REBUILD',
            defaultValue: false,
            description: '🔄 强制重新构建Docker镜像 (忽略缓存)'
        )
        booleanParam(
            name: 'SKIP_CLEANUP',
            defaultValue: false,
            description: '🧹 跳过旧镜像清理'
        )
    }
    stages {
        stage('🚀 构建准备') {
            steps {
                script {
                    def buildInfo = """
==================== 构建信息 ====================
项目名称: ${PROJECT_NAME}
分支: ${params.BRANCH}
构建号: ${BUILD_NUMBER}
镜像标签: ${IMAGE_TAG}
Docker镜像: ${DOCKER_IMAGE}
构建时间: ${BUILD_TIMESTAMP}
构建者: ${env.BUILD_USER ?: 'System'}
=============================================="""
                    echo buildInfo
                    // 设置构建显示名称
                    currentBuild.displayName = "#${BUILD_NUMBER}-${params.BRANCH}"
                    currentBuild.description = "🌿 ${params.BRANCH} | 🏷️ ${IMAGE_TAG}"
                }
            }
        }
        stage('🔍 环境检查') {
            parallel {
                stage('🔍 Docker检查') {
                    steps {
                        script {
                            sh '''
echo "🐳 检查Docker环境..."
docker --version
docker buildx version
echo "📊 Docker磁盘使用情况:"
docker system df
'''
                        }
                    }
                }
                stage('🔍 资源检查') {
                    steps {
                        script {
                            sh '''
echo "💻 检查系统资源..."
echo "📊 内存使用:"
free -h
echo "💾 磁盘使用:"
df -h
echo "🔄 CPU信息:"
nproc
'''
                        }
                    }
                }
            }
        }
        stage('📥 代码检出') {
            steps {
                script {
                    echo "🔄 正在检出代码，分支: ${params.BRANCH}"
                    try {
                        checkout([
                            $class: 'GitSCM',
                            branches: [[name: "*/${params.BRANCH}"]],
                            doGenerateSubmoduleConfigurations: false,
                            extensions: [
                                [$class: 'CleanBeforeCheckout'],
[$class: 'PruneStaleBranch'],
                                // [$class: 'CloneOption', depth: 1, noTags: false, shallow: true],
[$class: 'SubmoduleOption', disableSubmodules: false, parentCredentials: true]
                            ],
                            submoduleCfg: [],
                            userRemoteConfigs: [[
                                credentialsId: GIT_CREDENTIALS_ID,
                                url: GIT_REPOSITORY
                            ]]
                        ])
                        // 获取详细的Git信息
                        env.COMMIT_HASH = sh(
                            script: "git rev-parse --short HEAD",
                            returnStdout: true
                        ).trim()
                        env.COMMIT_MESSAGE = sh(
                            script: "git log -1 --pretty=format:'%s' | head -c 100",
                            returnStdout: true
                        ).trim()
                        env.COMMIT_AUTHOR = sh(
                            script: "git log -1 --pretty=format:'%an'",
                            returnStdout: true
                        ).trim()
                        env.COMMIT_DATE = sh(
                            script: "TZ='Asia/Shanghai' git log -1 --pretty=format:'%ci'",
                            returnStdout: true
                        ).trim()
                        env.BRANCH_NAME = params.BRANCH
                        def checkoutSuccess = """✅ 代码检出成功!
提交哈希: ${env.COMMIT_HASH}
提交作者: ${env.COMMIT_AUTHOR}
提交时间: ${env.COMMIT_DATE}
提交信息: ${env.COMMIT_MESSAGE}"""
                        echo checkoutSuccess
                    } catch (Exception e) {
                        error("❌ 代码检出失败: ${e.getMessage()}")
                    }
                }
            }
        }
        stage('🔨 构建Docker镜像') {
            steps {
                script {
                    def dockerImageTag = "${DOCKER_IMAGE}"
                    def dockerImageLatest = "${DOCKER_REGISTRY}/${PROJECT_NAME}:latest"
                    echo "🐳 开始构建Docker镜像: ${dockerImageTag}"
                    try {
                        // 根据构建类型设置不同的构建参数
                        def buildArgs = [
                            "--build-arg BUILD_CMD=${BUILD_COMMAND}",
                            "--build-arg PORT=${APP_PORT}",
                            "--build-arg COMMIT_HASH=${env.COMMIT_HASH}",
                            "--build-arg BUILD_NUMBER=${BUILD_NUMBER}",
                            "--build-arg BUILD_TIMESTAMP=${BUILD_TIMESTAMP}"
                        ]
                        if (params.FORCE_REBUILD) {
                            buildArgs.add("--no-cache")
                            echo "🔄 强制重新构建 (无缓存)"
                        }
                        // 使用buildx构建
                        sh """
                            docker buildx build \\
                                --progress=plain \\
                                --tag ${dockerImageTag} \\
                                --tag ${dockerImageLatest} \\
                                ${buildArgs.join(' ')} \\
                                --file Dockerfile \\
                                --label "io.jenkins.build-number=${BUILD_NUMBER}" \\
                                --label "io.jenkins.build-url=${BUILD_URL}" \\
                                --label "git.commit=${env.COMMIT_HASH}" \\
                                --label "git.branch=${params.BRANCH}" \\
                                --label "build.timestamp=${BUILD_TIMESTAMP}" \\
                                .
                        """
                        echo "✅ Docker镜像构建成功: ${dockerImageTag}"
                        // 显示镜像详细信息
                        sh """
                            echo "📊 镜像信息:"
                            docker inspect ${dockerImageTag} --format='{{.Size}}' | numfmt --to=iec
                            echo "🏷️ 镜像标签:"
                            docker images ${DOCKER_REGISTRY}/${PROJECT_NAME} --format 'table {{.Tag}}\\t{{.Size}}\\t{{.CreatedSince}}' | head -10
                        """
                    } catch (Exception e) {
                        error("❌ Docker镜像构建失败: ${e.getMessage()}")
                    }
                }
            }
        }
        stage('📤 推送镜像') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: DOCKER_LOGIN_CREDENTIALS_ID, usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        def dockerLoginCmd = "docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD} ${DOCKER_REGISTRY}"
                        sh dockerLoginCmd
                        sh "docker push ${DOCKER_IMAGE}"
                    }
                }
            }
        }
        stage('🚀 部署应用') {
            steps {
                script {
                    withCredentials([
                        usernamePassword(credentialsId: DOCKER_LOGIN_CREDENTIALS_ID, usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD'),
                        sshUserPrivateKey(credentialsId: DEPLOY_PROJECT_SSH_CREDENTIALS_ID, keyFileVariable: 'SSH_KEY', usernameVariable: 'SSH_USER')
                    ]) {
                        def dockerImageTag = "${DOCKER_IMAGE}"
                        def dockerLoginCmd = "docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD} ${DOCKER_REGISTRY}"
                        echo "🚀 开始远程部署应用..."
                        try {
                            // 创建远程部署脚本（带错误处理）
                            def remoteDeployScript = """
                set -e  # 遇到错误立即退出

                echo "=== 开始部署调试信息 ==="
                echo "项目名称: ${PROJECT_NAME}"
                echo "镜像标签: ${dockerImageTag}"
                echo "应用端口: ${APP_PORT}"
                echo "============================"

                # Docker 登录
                echo "🔐 Docker 登录..."
                if ! ${dockerLoginCmd}; then
                    echo "❌ Docker 登录失败"
                    exit 1
                fi

                # 拉取镜像
                echo "📥 拉取镜像: ${dockerImageTag}"
                if ! docker pull ${dockerImageTag}; then
                    echo "❌ 镜像拉取失败"
                    exit 1
                fi

                # 优雅停止现有容器
                echo "🔍 检查现有容器..."
                EXISTING_CONTAINER=\$(docker ps -q -f name=${PROJECT_NAME} 2>/dev/null || true)
                if [ ! -z "\$EXISTING_CONTAINER" ]; then
                    echo "🔄 发现运行中的容器，执行优雅停止: \$EXISTING_CONTAINER"
                    docker stop --time=30 ${PROJECT_NAME} || true
                    docker rm ${PROJECT_NAME} || true
                    echo "✅ 旧容器已优雅停止并清理"
                else
                    echo "ℹ️  没有发现运行中的容器"
                fi

                # 清理可能存在的同名停止容器
                echo "🧹 清理停止的容器..."
                docker rm ${PROJECT_NAME} 2>/dev/null || true

                # 启动新容器
                echo "🚀 启动新容器: ${dockerImageTag}"
                CONTAINER_ID=\$(docker run -d \\
                    --name ${PROJECT_NAME} \\
                    --restart=unless-stopped \\
                    --memory ${MEMORY_LIMIT} \\
                    --cpus="${CPU_LIMIT}" \\
                    --security-opt no-new-privileges:true \\
                    --user 1001:1001 \\
                    -p ${APP_PORT}:${APP_PORT} \\
                    --label "project=${PROJECT_NAME}" \\
                    --label "build=${BUILD_NUMBER}" \\
                    --label "commit=${env.COMMIT_HASH}" \\
                    --label "branch=${params.BRANCH}" \\
                    --label "deploy-time=\$(date -Iseconds)" \\
                    --env PORT=${APP_PORT} \\
                    ${dockerImageTag})

                if [ -z "\$CONTAINER_ID" ]; then
                    echo "❌ 容器启动失败"
                    echo "📋 获取可能的错误信息..."
                    docker logs ${PROJECT_NAME} 2>&1 || echo "无法获取容器日志"
                    exit 1
                fi

                echo "✅ 容器已创建，ID: \$CONTAINER_ID"

                # 智能等待容器启动
                echo "⏳ 等待容器启动"
                MAX_RETRIES=30
                RETRY_COUNT=0
                CONTAINER_STARTED=false

                while [ \$RETRY_COUNT -lt \$MAX_RETRIES ] && [ "\$CONTAINER_STARTED" = "false" ]; do
                    sleep 1
                    RETRY_COUNT=\$((RETRY_COUNT + 1))

                    CONTAINER_STATUS=\$(docker inspect ${PROJECT_NAME} --format='{{.State.Status}}' 2>/dev/null || echo "unknown")

                    if [ "\$CONTAINER_STATUS" = "running" ]; then
                        echo "✅ 容器已启动 (\$RETRY_COUNT/\$MAX_RETRIES 尝试)"
                        CONTAINER_STARTED=true
                    else
                        echo "⏳ 等待容器启动... (\$RETRY_COUNT/\$MAX_RETRIES) 状态: \$CONTAINER_STATUS"
                        # 如果容器已经退出，获取日志
                        if [ "\$CONTAINER_STATUS" = "exited" ]; then
                            echo "📋 容器已退出，查看日志:"
                            docker logs ${PROJECT_NAME} --tail 10 2>&1 || echo "无法获取容器日志"
                        fi
                    fi
                done

                if [ "\$CONTAINER_STARTED" = "false" ]; then
                    echo "❌ 容器启动超时"
                    echo "📋 完整容器日志:"
                    docker logs ${PROJECT_NAME} 2>&1 || echo "无法获取容器日志"
                    echo "📋 容器详细状态:"
                    docker inspect ${PROJECT_NAME} --format='{{json .State}}' 2>/dev/null || echo "无法获取容器状态"
                    exit 1
                fi

                # 验证部署
                RUNNING_CONTAINER_ID=\$(docker ps -q -f name=${PROJECT_NAME} 2>/dev/null || true)
                if [ ! -z "\$RUNNING_CONTAINER_ID" ]; then
                    echo "✅ 部署成功!"
                    echo "容器ID: \$RUNNING_CONTAINER_ID"
                    echo "镜像标签: ${dockerImageTag}"
                    echo "访问端口: ${APP_PORT}"

                    echo "📊 容器详细信息:"
                    docker ps -f name=${PROJECT_NAME} --format 'table {{.Names}}\\t{{.Status}}\\t{{.Ports}}' 2>/dev/null || echo "无法获取容器信息"
                    echo "💾 资源使用:"
                    docker stats --no-stream ${PROJECT_NAME} 2>/dev/null || echo "无法获取资源使用信息"

                    echo "✅ 远程部署成功完成"
                    exit 0
                else
                    echo "❌ 部署验证失败: 容器未能正常启动"
                    exit 1
                fi
            """
                            // 将脚本写入临时文件
                            writeFile file: 'deploy_script.sh', text: remoteDeployScript
                            // 执行远程部署
                            def sshResult = sh(
                                script: """
                        chmod +x deploy_script.sh
                        scp -i "\${SSH_KEY}" -o StrictHostKeyChecking=no deploy_script.sh "\${SSH_USER}@\${DEPLOY_PROJECT_SSH_HOST}:/tmp/deploy_script.sh"
                        ssh -i "\${SSH_KEY}" -o StrictHostKeyChecking=no "\${SSH_USER}@\${DEPLOY_PROJECT_SSH_HOST}" 'bash /tmp/deploy_script.sh && rm /tmp/deploy_script.sh'
                        """,
                                returnStatus: true
                            )
                            // 如果失败，获取详细错误信息
                            if (sshResult != 0) {
                                echo "❌ 远程部署失败，尝试获取详细错误信息..."
                                try {
                                    sh """
                            ssh -i "\${SSH_KEY}" -o StrictHostKeyChecking=no "\${SSH_USER}@\${DEPLOY_PROJECT_SSH_HOST}" '
                                echo "=== 系统信息 ==="
                                docker --version
                                echo "=== 当前运行的容器 ==="
                                docker ps -a
                                echo "=== 磁盘空间 ==="
                                df -h
                                echo "=== 内存使用 ==="
                                free -h
                                echo "=== 最近的容器日志 ==="
                                docker logs ${PROJECT_NAME} --tail 20 2>&1 || echo "无容器日志"
                            '
                            """
                                } catch (Exception debugE) {
                                    echo "获取调试信息失败: ${debugE.getMessage()}"
                                }
                                // 清理临时文件
                                sh 'rm -f deploy_script.sh'
                            }
                            // 根据远程执行结果判断
                            if (sshResult == 0) {
                                echo "✅ 远程部署完成!"
                            } else {
                                echo "❌ 远程部署失败，退出码: ${sshResult}"
                                error("远程部署失败")
                            }
                        } catch (Exception e) {
                            echo "❌ SSH连接失败: ${e.getMessage()}"
                            error("远程部署连接失败")
                        }
                    }
                }
            }
        }
        stage('📊 部署验证') {
            steps {
                script {
                    withCredentials([
                        sshUserPrivateKey(credentialsId: DEPLOY_PROJECT_SSH_CREDENTIALS_ID, keyFileVariable: 'SSH_KEY', usernameVariable: 'SSH_USER')
                    ]) {
                        echo "📊 开始远程部署验证..."
                        try {
                            // 执行远程验证（分步骤执行，避免复杂脚本）
                            echo "🔍 检查容器状态..."
                            def containerCheckResult = sh(
                                script: """
                        ssh -i "\${SSH_KEY}" -o StrictHostKeyChecking=no "\${SSH_USER}@\${DEPLOY_PROJECT_SSH_HOST}" '
                            echo "==================== 部署验证报告 ===================="
                            echo "项目名称: ${PROJECT_NAME}"
                            echo "构建编号: ${BUILD_NUMBER}"
                            echo "验证时间: \$(date)"
                            echo "======================================================"

                            echo "🔍 检查容器状态..."
                            if docker ps -q -f name=${PROJECT_NAME} >/dev/null 2>&1; then
                                echo "✅ 容器正在运行"
                                docker ps -f name=${PROJECT_NAME} --format "table {{.Names}}\\t{{.Status}}\\t{{.Ports}}\\t{{.Image}}"
                            else
                                echo "❌ 容器未运行"
                                exit 1
                            fi
                        '
                        """,
                                returnStatus: true
                            )
                            if (containerCheckResult != 0) {
                                echo "❌ 容器状态检查失败"
                                error("容器未正常运行")
                            }
                            echo "📊 获取容器资源使用情况..."
                            try {
                                sh """
                        ssh -i "\${SSH_KEY}" -o StrictHostKeyChecking=no "\${SSH_USER}@\${DEPLOY_PROJECT_SSH_HOST}" '
                            echo "📊 容器资源使用:"
                            docker stats --no-stream --format "table {{.Name}}\\t{{.CPUPerc}}\\t{{.MemUsage}}\\t{{.NetIO}}" ${PROJECT_NAME} 2>/dev/null || echo "⚠️ 无法获取资源使用情况"

                            echo "🌐 网络连接检查:"
                            docker port ${PROJECT_NAME} 2>/dev/null || echo "⚠️ 无法获取端口信息"

                            echo "📋 容器日志 (最后20行):"
                            docker logs --tail 20 --timestamps ${PROJECT_NAME} 2>&1 || echo "⚠️ 无法获取容器日志"
                        '
                        """
                            } catch (Exception e) {
                                echo "⚠️ 获取容器详细信息时出现警告: ${e.getMessage()}"
                                unstable("部署验证过程中出现警告")
                            }
                            echo "✅ 远程部署验证完成"
                        } catch (Exception e) {
                            echo "❌ SSH连接失败: ${e.getMessage()}"
                            error("远程部署验证连接失败")
                        }
                    }
                }
            }
        }
    }
    post {
        success {
            script {
                echo "🎉 构建和部署成功!"
                // 智能清理策略
                if (!params.SKIP_CLEANUP) {
                    try {
                        echo "🧹 执行智能清理..."
                        // 保留最近的构建
                        def buildsToKeep = 5
                        def oldBuildNumber = BUILD_NUMBER.toInteger() - buildsToKeep
                        if (oldBuildNumber > 0) {
                            def oldImage = "${DOCKER_REGISTRY}/${PROJECT_NAME}:${oldBuildNumber}*"
                            sh """
                                # 清理旧版本镜像
                                docker images ${DOCKER_REGISTRY}/${PROJECT_NAME} --format '{{.Tag}}' | \\
                                grep -E '^[0-9]+-' | \\
                                sort -V | \\
                                head -n -${buildsToKeep} | \\
                                xargs -r -I {} docker rmi ${DOCKER_REGISTRY}/${PROJECT_NAME}:{} || true
                            """
                        }
                        // 清理无用资源
                        sh """
                            # 清理悬空镜像
                            docker image prune -f || true
                            # 清理停止的容器
                            docker container prune -f || true
                            # 清理无用的网络
                            docker network prune -f || true
                        """
                        echo "✅ 清理完成"
                    } catch (Exception e) {
                        echo "⚠️ 清理过程中出现问题: ${e.getMessage()}"
                    }
                }
                // 构建成功总结
                def successSummary = """
==================== 部署成功总结 ====================
项目: ${PROJECT_NAME}
分支: ${params.BRANCH}
构建号: ${BUILD_NUMBER}
镜像标签: ${IMAGE_TAG}
提交: ${env.COMMIT_HASH ?: 'N/A'}
镜像: ${DOCKER_IMAGE}
端口: ${APP_PORT}
部署时间: ${new Date()}
构建链接: ${BUILD_URL}
=============================================="""
                echo successSummary
                // 发送通知 (示例)
                // slackSend(
                //     color: 'good',
                //     message: "✅ ${PROJECT_NAME} 部署成功! 分支: ${params.BRANCH}, 构建: #${BUILD_NUMBER}"
                // )
            }
        }
        failure {
            script {
                echo "❌ 构建或部署失败!"
                def failureInfo = """
==================== 部署失败信息 ====================
项目: ${PROJECT_NAME}
分支: ${params.BRANCH}
构建号: ${BUILD_NUMBER}
提交: ${env.COMMIT_HASH ?: 'N/A'}
失败阶段: ${env.STAGE_NAME ?: 'Unknown'}
失败时间: ${new Date()}
构建链接: ${BUILD_URL}
控制台日志: ${BUILD_URL}console
=============================================="""
                echo failureInfo
                // 收集故障排除信息
                // try {
                //     echo "🔍 收集故障排除信息..."
                //     sh """
                //         echo "=== Docker容器状态 ==="
                //         docker ps -a | grep ${PROJECT_NAME} || echo "未找到相关容器"
                //         echo "=== Docker镜像 ==="
                //         docker images | grep ${PROJECT_NAME} || echo "未找到相关镜像"
                //         echo "=== 系统资源 ==="
                //         free -h
                //         df -h
                //         echo "=== 最近的容器日志 ==="
                //         docker logs --tail 50 ${PROJECT_NAME} 2>/dev/null || echo "无法获取容器日志"
                //     """
                // } catch (Exception e) {
                //     echo "⚠️ 收集故障信息失败: ${e.getMessage()}"
                // }
                // 发送失败通知
                // slackSend(
                //     color: 'danger',
                //     message: "❌ ${PROJECT_NAME} 部署失败! 分支: ${params.BRANCH}, 构建: #${BUILD_NUMBER}\n详情: ${BUILD_URL}"
                // )
            }
        }
        always {
            script {
                echo "🧹 执行构建后清理..."
                try {
                    // 清理临时资源
                    sh """
                        # 清理临时容器
                        docker container prune -f --filter 'until=1h' || true

                        # 清理构建缓存 (可选，谨慎使用)
                        # docker builder prune -f --keep-storage 10GB || true
                    """
                    echo "✅ 构建后清理完成"
                    // 记录构建统计
                    def buildDuration = currentBuild.duration ?: 0
                    def buildResult = currentBuild.result ?: 'SUCCESS'
                    def buildStats = """
📊 构建统计:
持续时间: ${buildDuration}ms
结果: ${buildResult}
构建号: ${BUILD_NUMBER}"""
                    echo buildStats
                } catch (Exception e) {
                    echo "⚠️ 清理过程中出现问题: ${e.getMessage()}"
                }
            }
        }
        unstable {
            script {
                echo "⚠️ 构建完成但存在警告"
                // emailext(
                //     subject: "⚠️ ${PROJECT_NAME} 构建不稳定 - #${BUILD_NUMBER}",
                //     body: "构建完成但存在警告，请检查日志。",
                //     to: "${env.CHANGE_AUTHOR_EMAIL}"
                // )
            }
        }
        aborted {
            script {
                echo "🚫 构建被中止"
            }
        }
    }
}

```
