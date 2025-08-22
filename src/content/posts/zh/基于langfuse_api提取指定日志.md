---
title: 基于langfuse api提取指定trace
published: 2025-08-22
description: 基于langfuse api提取指定trace的日志
tags: [langfuse, api, trace, log]
category: 学习
draft: false
---

# 基于langfuse api提取指定trace的日志

## 背景
在开发过程中，我需要批量的获取指定的trace的日志，但是langfuse的ui没法做到批量的下载指定trace为json文件，这里简单介绍一下如果通过langfuse api来实现。

## sessionId获取
这里需要用到sessionId来获取当时那一批session对应的全部trace。
获取方法很简单，在langfuse的ui界面里，找到trace里的`sessionId`列，然后复制出来

## 获取langfuse key和BASE_URL
在`langfuse`ui的`setting`里，找到`API Keys`，创建apikey，这里会获得两个key，分别是PUBLIC_KEY和SECRECT_KEY，都需要记录下来

这里如果你的langfuse在公网，那么BASE_URL就是`https://api.langfuse.com/api/public/`，如果你的langfuse在本地，那么BASE_URL就是`http://YOUR_HOST/api/public/`

## 相关代码
最后把`sessionId`，`PUBLIC_KEY`，`SECRECT_KEY`,`BASE_URL`写入到`langfuse_api.py`中，然后运行`langfuse_api.py`，就可以获取到指定trace的日志。

```python
import requests
import json

# 配置
PUBLIC_KEY = ""
SECRET_KEY = ""
BASE_URL = "http://10.65.171.100:33000/api/public/"

# 要筛选的 message_id
TARGET_MESSAGE_ID = "17400353"
PAGE_SIZE=100

# 存储结果
results = 0
page = 1
has_more = True
target_date = "2025-08-06"
hour = 18


while has_more:
    print(f"📌 正在获取第 {page} 页（每页 {PAGE_SIZE} 条）...")
    
    url = f"{BASE_URL}/traces"
    response = requests.get(
        url,
        auth=(PUBLIC_KEY, SECRET_KEY),
        params={
            "page":page,
            "limit":PAGE_SIZE,
            "sessionId":"test_cases_fivedoctors_20250806185514"
        },
    )
    res = response.json()


    if response.status_code != 200:
        print(f"❌ 请求失败: {response.status_code} - {response.text}")
        break

    try:
        data = response.json()
    except json.JSONDecodeError:
        print("❌ 返回内容不是 JSON 格式，可能是网络问题或地址错误")
        print("响应内容:", response.text)
        break

    if isinstance(data, list):
        traces = data
        has_more = len(traces) == PAGE_SIZE  # 如果刚好满页，可能还有下一页
    else:
        traces = data.get("data", [])
        current_page_size = len(traces)
        has_more = current_page_size == PAGE_SIZE

    for trace in traces:
        metadata = trace.get("metadata") or {}
        id = metadata["message_id"]
        with open(f'./result/{id}.json',"w",encoding="utf-8") as f:
            json.dump(trace, f, indent=2, ensure_ascii=False)
            results+=1
        

    if len(traces) < PAGE_SIZE:
        has_more = False

    page += 1

```