# Life Path Number Calculator - Project Progression

## 项目概述

生命灵数计算器 — 一个基于毕达哥拉斯数字命理学的单页网站，用户输入出生日期，计算并解读生命灵数（1-9 及主数字 11/22/33）。

**技术栈:** 纯 HTML + CSS + JavaScript（无框架）  
**设计风格:** 深色宇宙主题，星空背景，渐变色彩  
**语言:** 中文（zh-CN）

---

## 进度记录

### [2026-06-09] Day 1 — 项目初始化

**已完成：**
- [x] 创建项目目录 `/life-path-number`
- [x] `index.html` — 完整页面结构
  - 标题区（渐变文字 + 副标题）
  - 输入区（年/月/日三栏 + 计算按钮）
  - 结果展示区（大数字 + 计算过程 + 含义解读 + 特质网格）
  - 11 张数字卡片概览（1-9 + 11/22/33 主数字）
  - "计算方法"说明区（含示例）
  - 页脚
- [x] `style.css` — 完整样式
  - CSS 变量系统（主色、强调色、金色、暗色背景）
  - 三层星空背景 + 呼吸动画
  - 毛玻璃卡片效果 + 辉光边框
  - 渐变文字、脉冲动画、淡入动画
  - 响应式布局（移动端适配）
  - 11 张数字卡片配色方案

**进行中：**
- [ ] `script.js` — 计算逻辑与交互（下一步）

**待办：**
- [ ] 核心计算引擎（reduceToSingle, calculateLifePath）
- [x] 11 个数字的完整含义数据
- [ ] 计算过程分步展示
- [ ] 数字卡片点击交互
- [ ] 输入校验
- [ ] 结果区滚动定位
- [ ] 分享功能（可选）

---

## 文件结构

```
life-path-number/
├── .git/
├── index.html      ← 页面结构
├── style.css       ← 样式（完成）
└── script.js       ← 逻辑（待创建）
```

---

## 计算规则

1. 将年、月、日分别拆为个位数相加
2. 各自化简为一位数（若为 11/22/33 主数字则保留）
3. 三个结果相加，再次化简为 1-9 或保留主数字

**示例：** 1990年1月15日
- 年: 1+9+9+0 = 19 → 1+9 = 10 → 1+0 = **1**
- 月: **1**
- 日: 1+5 = **6**
- 总和: 1+1+6 = **8** → 生命灵数 8

---

## 设计决策

| 决策 | 选择 | 原因 |
|------|------|------|
| 框架 | 无（原生） | 单页工具无需构建步骤 |
| 主题 | 深色宇宙 | 契合命理/神秘学氛围 |
| 主色 | #6c5ce7 紫色 | 灵性与智慧的象征 |
| 强调色 | #fd79a8 粉色 | 与紫色形成互补 |
| 布局 | 单列居中 | 聚焦核心功能 |

---

## 参考资源

- [TokenRock Life Path Calculator](https://www.tokenrock.com/numerology/life-path-number-calculator)
- [爱占星 生命灵数](https://www.aizhanxing.com/wiki/modern/numerology.html)
- [CHAKRASPA 计算方法](https://www.chakra-spa.com/cn/calculate-your-life-path-number)
- [Julian Tarot 完整解析](https://juliantarot.com/blog/life-path-number-guide)
- [Numerology.com 官方指南](https://www.numerology.com/articles/your-numerology-chart/life-path-number-meanings)
