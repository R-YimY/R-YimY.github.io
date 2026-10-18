# 你的名字 · GitHub Pages 个人主页 / Personal Homepage

一个用 **原生 HTML / CSS / JavaScript** 手写的个人主页,支持 **中英双语切换**、**明暗主题**、**响应式布局**,零第三方依赖,直接托管在 **GitHub Pages**。

**内容与代码完全分离**:每个板块的可编辑内容都放在 `data/` 目录下独立的配置文件中,
改文案只需编辑对应文件,不必碰 HTML。

页面包含:个人简介、关于我、主要代码项目、开源与社区贡献、知识成果、联系方式。

---

## 目录结构

```
.
├── index.html              # 页面骨架(只有容器,不含文案,一般无需修改)
├── data/                   # ★ 内容配置:要改文案就改这里 ★
│   ├── site.js             #   站点级:标签标题、品牌名、页脚
│   ├── hero.js             #   首屏:头像、姓名、头衔、简介、按钮、社交链接
│   ├── about.js            #   关于我:自我介绍、关键信息、技能栈
│   ├── projects.js         #   主要项目:每个项目的配图 / 描述 / 标签 / 链接
│   ├── contributions.js    #   开源贡献:统计数字、时间线
│   ├── achievements.js     #   知识成果:论文/写作/演讲/荣誉等分类
│   └── contact.js          #   联系方式卡片
├── js/
│   ├── render.js           # 渲染器:读取 data/*.js 生成页面(一般无需修改)
│   └── main.js             # 交互:语言、主题、导航、滚动动画、图片灯箱
├── css/style.css           # 样式:主题变量、布局、响应式、双语切换、灯箱
├── assets/
│   ├── avatar.svg          # 头像占位图
│   ├── favicon.svg         # 站点图标
│   ├── resume-placeholder.txt
│   └── projects/           # 项目展示图(支持多种格式)
│       ├── awesome-toolkit.jpg      # 静态 JPG
│       ├── cloud-deploy-cli.gif     # 动画 GIF(10 帧)
│       ├── insight-dashboard.png    # 静态 PNG
│       └── auth-service.svg         # 矢量 SVG
├── .nojekyll               # 关闭 Jekyll 处理(纯静态资源直接发布)
└── README.md
```

## 本地预览

直接双击打开 `index.html` 即可(配置文件用 `<script>` 加载,不依赖网络请求);
也可启动本地服务器:

```powershell
python -m http.server 8080   # 然后访问 http://localhost:8080
```

## 内容编辑指南

所有文案都在 `data/` 目录下,**双语字段**统一写成 `{ zh: "中文", en: "English" }`:

```js
title: { zh: "主要代码项目", en: "Featured Projects" }
```

渲染器会同时输出中英两段,由页面右上角按钮切换;字段值支持简单 HTML(如 `<strong>加粗</strong>`)。

| 想改什么 | 打开哪个文件 |
| --- | --- |
| 浏览器标签标题、顶部品牌名、页脚文字 | `data/site.js` |
| 头像、姓名、头衔、首屏简介、按钮、社交链接 | `data/hero.js` |
| 自我介绍、所在地/经验等关键信息、技能栈 | `data/about.js` |
| 项目列表(名称、描述、标签、链接、配图) | `data/projects.js` |
| 开源统计数字、时间线 | `data/contributions.js` |
| 论文/专利、技术写作、演讲、荣誉 | `data/achievements.js` |
| 联系方式卡片 | `data/contact.js` |

> 各配置文件顶部都写有字段说明和示例,**直接照着现有条目增删即可**。
> 新增一个项目卡片 = 在 `data/projects.js` 的 `items` 数组里多加一个对象,灯箱、双语、徽章都会自动生效。

### 替换占位信息

各文件中的占位符: `你的名字` / `Your Name`、`your-github`、`you@example.com`、
`your-blog.example.com`、`你的城市`、项目名与链接、论文/荣誉条目等,替换成你的真实信息。

简历:把 `assets/resume.pdf` 放进 `assets/`,再修改 `data/hero.js` 中"下载简历"按钮的
`href` 为 `assets/resume.pdf`。

## 项目配图(多种图片格式)

每个项目卡片顶部是 `16:9` 图片区,内置 **JPG / PNG / 动画 GIF / SVG** 四种格式示例;
点击任意图片(或聚焦后按 `Enter` / `空格`)打开灯箱放大预览,`Esc` 或点击遮罩关闭。
配图信息写在 `data/projects.js` 的 `image` 字段里:

```js
image: {
  src: "assets/projects/你的图.gif",   // 图片路径
  format: "GIF",                       // 左上角徽章;GIF 会自动显示绿色动图徽章
  alt: { zh: "演示动图", en: "Demo animation" },  // 无障碍文字 + 灯箱说明
  width: 640, height: 360              // 原始尺寸,避免加载时布局抖动
}
```

| 格式 | 适用场景 | 说明 |
| --- | --- | --- |
| `.jpg` / `.jpeg` | 产品截图、照片 | 体积小,适合静态大图 |
| `.png` | UI 截图、需要透明 | 无损,细节清晰 |
| `.gif` | 操作演示、动效录制 | 自动播放,徽章变绿 |
| `.svg` | 架构图、流程图 | 矢量,不失真,体积最小 |
| `.webp` / `.avif` | 同上 | 浏览器支持即可,改 `src` 与 `format` 即可 |

> 建议配图为 **16:9**(如 1280×720),否则会被 `object-fit: cover` 自动裁切。

## 功能说明(实现层,一般无需改动)

- **内容/代码分离**:`js/render.js` 读取 `window.SITE.*` 渲染各板块,`index.html` 只保留骨架。
- **中英双语**:渲染出的文本带 `<span lang="zh">` / `<span lang="en">`,由 `<html data-lang>` + CSS 切换;选择记忆在 `localStorage`,首次访问按浏览器语言自动选择。
- **明暗主题**:CSS 变量定义两套配色,`data-theme` 切换并持久化,默认跟随系统 `prefers-color-scheme`。
- **响应式**:移动优先,窄屏下导航折叠为汉堡菜单,网格自动堆叠。
- **滚动动画**:基于 `IntersectionObserver` 的区块揭示与统计数字滚动,尊重 `prefers-reduced-motion`;动画由 `html.js` 门控,脚本未执行时内容仍可见。
- **图片灯箱**:点击项目图放大预览,支持键盘操作与焦点管理,说明文字跟随语言切换。

## 部署到 GitHub Pages

1. 在 GitHub 新建仓库,命名为 **`你的用户名.github.io`**(例如 `your-github.github.io`)。
2. 将本目录内容推送到 `main` 分支:

   ```bash
   git init
   git add .
   git commit -m "feat: personal homepage"
   git branch -M main
   git remote add origin https://github.com/your-github/your-github.github.io.git
   git push -u origin main
   ```

3. 稍等片刻,访问 `https://你的用户名.github.io` 即可。

> 若使用普通仓库(非 `用户名.github.io`),请在仓库 **Settings → Pages** 中
> 选择 `main` 分支与 `/ (root)` 目录作为发布源。

## 许可

MIT License · 可自由修改使用。
