#!/bin/bash

# 从命令行参数中获取提交信息，如果没有则使用默认值
info=${1:-":pencil: update content"}

# 如果提交信息为空，输出错误信息并退出
if [[ -z $info ]]; then
  echo "Error: Please provide a commit message."
  exit 1
fi

# 提交本地代码更改
git add -A
git commit -m "$info"
git push origin main
