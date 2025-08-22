---
title: Cerebrovascular Rendering Based on Python VTK
published: 2025-08-11
description: Cerebrovascular Rendering Based on Python VTK
tags: [Python, VTK, Cerebrovascular Rendering, Scientific Research Plotting]
category: Tool
draft: false
---

## Preface

Due to the need for blood vessel rendering during the process of writing a thesis, a Python VTK version of the rendering was developed based on the original C++ code. The rendering effect is average, but it is sufficient for scientific research plotting. The source code is open-sourced on Github. If you find it useful, please give it a Star. 

::github{repo="QingYunA/Cerebrovascular-Segmentation-Rendering-by-Python-VTK"}

## How to Use

The usage instructions are available in both English and Chinese versions on Github. Most likely, you can get started directly by reading the readme.

It should be noted that I have only tested the rendering of the `.mhd` format. Other file formats may cause problems. Feel free to submit an issue.

## Rendering Effect Diagrams

1. Only render the prediction

![Image 1](https://pic2.zhimg.com/v2-2a8578619c6b2df8288ded4ba5db48c5_r.jpg)

2. Render ft, fp, tp, etc. after calculating the confusion matrix of the prediction and gt (label)

![Image 2](https://pic1.zhimg.com/v2-cfbd0bac52b33f468ecb75de490f56e8_r.jpg)

3. Add a colorbar on the basis of the rendering (currently it looks quite ugly)

![Image 3](https://pic3.zhimg.com/v2-fac9ec2fd7c11e2d8c05801bb04e9756_r.jpg)