---
title: Nvim中配置Ruff Formatter（Python）
published: 2025-08-11
description: Nvim中配置Ruff Formatter（Python）
tags: [Nvim, Ruff, Formatter, Python]
category: 学习
draft: false
---

# Nvim中配置Ruff Formatter（Python）

## 前言

笔者使用的是`Lazyvim` ，其使用`Mason`来管理Formatter。笔者遇到的问题主要是在Python文件中，不希望对代码宽度小于125的代码进行分行的格式化（也就是一行代码拆成多行，避免过长）。

如果在每个项目里都新建一个`pyproject.toml`又有点太蠢了，想要弄一个全局配置。

## 全局配置Ruff Formatter

在`~/.config/`文件夹下新建文件夹`ruff`，然后在`ruff`文件夹在新建文件`pyproject.toml`，在文件中输入：

```toml
[tool.ruff]
line-length = 125
# 其他配置也可以放在这里
```

保存后，你的ruff已经正常工作了。
