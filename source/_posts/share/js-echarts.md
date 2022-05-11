---
title: 【分享】可视化图表库echarts
type: link
url: https://echarts.apache.org/zh/index.html
tags:
  - 分享
categories:
  - 思米米的小安利
date: 2022-04-23 17:50:23
updated: 2022-04-23 17:50:23
---

ECharts，一个使用 JavaScript 实现的开源可视化库，可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE9/10/11，Chrome，Firefox，Safari 等），底层依赖矢量图形库 [ZRender](https://github.com/ecomfe/zrender)，提供直观，交互丰富，可高度个性化定制的数据可视化图表。

## 丰富的可视化类型

ECharts 提供了常规的[折线图](https://echarts.apache.org/zh/option.html#series-line)、[柱状图](https://echarts.apache.org/zh/option.html#series-bar)、[散点图](https://echarts.apache.org/zh/option.html#series-scatter)、[饼图](https://echarts.apache.org/zh/option.html#series-pie)、[K 线图](https://echarts.apache.org/zh/option.html#series-candlestick)，用于统计的[盒形图](https://echarts.apache.org/zh/option.html#series-boxplot)，用于地理数据可视化的[地图](https://echarts.apache.org/zh/option.html#series-map)、[热力图](https://echarts.apache.org/zh/option.html#series-heatmap)、[线图](https://echarts.apache.org/zh/option.html#series-lines)，用于关系数据可视化的[关系图](https://echarts.apache.org/zh/option.html#series-graph)、[treemap](https://echarts.apache.org/zh/option.html#series-treemap)、[旭日图](https://echarts.apache.org/zh/option.html#series-sunburst)，多维数据可视化的[平行坐标](https://echarts.apache.org/zh/option.html#series-parallel)，还有用于 BI 的[漏斗图](https://echarts.apache.org/zh/option.html#series-funnel)，[仪表盘](https://echarts.apache.org/zh/option.html#series-gauge)，并且支持图与图之间的混搭。

除了已经内置的包含了丰富功能的图表，ECharts 还提供了[自定义系列](https://echarts.apache.org/zh/option.html#series-custom)，只需要传入一个*renderItem*函数，就可以从数据映射到任何你想要的图形，更棒的是这些都还能和已有的交互组件结合使用而不需要操心其它事情。

你可以在下载界面下载包含所有图表的构建文件，如果只是需要其中一两个图表，又嫌包含所有图表的构建文件太大，也可以在在线构建中选择需要的图表类型后自定义构建。

<!-- more -->
