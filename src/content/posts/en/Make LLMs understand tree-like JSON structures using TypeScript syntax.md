---
title: Make Large Language Models (LLMs) Understand Tree-like JSON Structures using TypeScript Syntax
published: 2025-08-21
description: Make Large Language Models (LLMs) Understand Tree-like JSON Structures using TypeScript Syntax
tags: [Large Language Models, Tree-like JSON, Understanding, LLMs, TypeScript]
category: Tool
draft: false
---

## Motivation
Recently, in my work, I needed to extract tree-like JSON structures from a large amount of corpus.

The existing method of getting large language models to output JSON generally involves setting `response_format` to `json_object`. When the keys of the output example you specify are fixed, it can work very well. For example:
```json
{
    "name": "John",
    "age": 30,
    "city": "New York"
}
```
However, when the keys are dynamic, it is very difficult to accurately convey a tree structure with variable key names and values (which can extend infinitely) through natural language.
> It is very difficult to describe a node tree like the one in the following figure using natural language or JSON format.

![Image](https://s2.loli.net/2025/08/21/BnHjmyk87Q4RdDL.png)

## Describing the Node Tree with the TypeScript Language

After researching, I found that using the `interface` class in `TypeScript` to describe the tree you want can help large language models understand the nested structure of the tree, and it also has richer expressions.

### Reference Prompt
- Please return JSON data and strictly follow this `Tree` interface:
```typescript
type Tree = {
    [firstLevelNode: string]: {
        [secondLevelNode: string]: Level2Node;
    };
};

interface Level2Node {
    "nodeDescription": string;
    "nodeTasks": string[];
    // Branch based on XXX condition and enter a deeper recursive node
    [branchCondition: string]: DeepNode;
}

interface DeepNode {
    "nodeDescription": string;
    "nodeTasks": string[];
    "nodeContent"?: string[] | string;
    [branchCondition: string]: DeepNode;
}
```

- In the prompt, you can use `string` or `string[]` to tell the model whether you want the value under this key to be a pure string or an array of strings. You can also use `?` to indicate that this key is an optional key.
- You can use the `|` symbol to represent multiple optional types.

## Conclusion
In fact, there should also be a way to specify based on `json schema`. However, I found relatively little information at that time. The method based on TypeScript syntax that I figured out myself has shown very significant results, so I have been using this method. I hope it can be helpful to readers who need to specify that the LLM generates JSON.