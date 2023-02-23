#!/bin/bash

# 设置全局 Git 用户名和邮箱
git config --global user.name "Herway"
git config --global user.email "hqw6@qq.com"

# 获取当前 Git 用户名和提交时间
author=$(git config user.name)
commit_time=$(date "+%Y-%m-%d %H:%M:%S")

# 设置默认的提交信息，包含时间戳和作者信息
default_info="Update: $commit_time - author: $author"

# 如果命令行参数提供了自定义的提交信息，则使用自定义信息，否则使用默认信息
info=${1:-"$default_info"}

# 如果提交信息为空，则输出错误消息并退出
if [[ -z $info ]]; then
  echo "Error: Please provide a commit message."
  exit 1
fi

# 添加所有更改并提交
git add -A
git commit -m "$info"

# 推送到远程仓库的主分支
git push origin main
