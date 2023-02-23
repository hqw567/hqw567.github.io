---
title: 在VScode中使用Babel ES6转ES5
tags:
  - 前端
  - Babel
categories: 思米米的小笔记
date: 2023-01-21
updated: 2023-02-21
titleTemplate: '%s - 思米米(SIMIMI)'
---

要在当前项目下保存文件自动运行 Babel，请按照以下步骤进行操作：

## 1.安装 Babel

- 首先，您需要在项目中安装 Babel 依赖项。打开终端并运行以下命令：
`npm install --save-dev @babel/core @babel/cli @babel/preset-env`
<!-- more -->

- 或者

`pnpm add --save-dev @babel/core @babel/cli @babel/preset-env`

## 2.配置 Babel

- 在您的项目根目录下创建一个名为`.babelrc`的文件，并在其中添加以下内容：

```json
{
  "presets": ["@babel/preset-env"]
}
```

- 这会告诉 Babel 使用@babel/preset-env 预设来转换您的代码。

## 3.使用命令运行 Babel

- 打开 VSCode 终端并运行以下命令：

```
npx babel src --out-dir dist
```

- 这将使用 Babel 从 src 目录中的文件生成转换后的代码，并将其放在 dist 目录中。

## 4.配置 VSCode 任务

- 打开 VSCode 并创建一个名为`.vscode`的目录。在其中创建一个名为`tasks.json`的文件，并在其中添加以下内容：

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Babel",
      "type": "shell",
      "command": "npx babel ${file} --out-file ${fileDirname}/../dist/${fileBasenameNoExtension}.js",
      "group": {
        "kind": "build",
        "isDefault": true
      },
      "options": {
        "cwd": "${workspaceFolder}"
      },
      "presentation": {
        "reveal": "silent"
      },
      "problemMatcher": []
    }
  ]
}
```

- 该任务使用 npx 运行 Babel，将源文件编译为目标文件，并将目标文件输出到`dist`目录中。

## 5.手动运行 Task 任务

- 现在，每当您需要执行 Babel 任务时，只需按下`Ctrl + Shift + B（Windows和Linux）`或`Command + Shift + B（macOS）`，然后选择 Babel 任务即可。

- 您还可以通过在命令面板中输入`Tasks: Run Task`，然后选择 Babel 任务来运行它。

- 这将执行 Babel 任务并将编译后的文件输出到`dist`目录中。
