/* ============================================================
 * Hero 个人简介 · Hero section
 * ------------------------------------------------------------
 * 首屏区域:头像、姓名、头衔、一句话简介、按钮与社交链接。
 * ============================================================ */

window.SITE = window.SITE || {};

SITE.hero = {
  /* 头像图片路径 */
  avatar: "assets/avatar.svg",
  /* 头像替代文字(读屏用) */
  avatarAlt: { zh: "你的头像", en: "Your avatar" },

  /* 姓名上方的小字 */
  eyebrow: { zh: "你好,我是", en: "Hello, I'm" },

  /* 姓名(中文主标题 + 英文副标题) */
  name: "Ranyu",
  nameEn: "YIMY",

  /* 头衔 / 一句话定位 */
  title: {
    zh: "视觉三维工程师 · 开源爱好者 · 终身学习者",
    en: "Visual 3D Engineer · Open-Source Enthusiast · Lifelong Learner"
  },

  /* 简介段落 */
  desc: {
    zh: "专注于三维重建与视觉开发、计算机视觉以及工程化优化。喜欢复杂问题模块化拆解，并乐于将经验沉淀为文档与开源项目。",
    en: "I focus on 3D reconstruction and visual development, computer vision, and engineering optimization. I enjoy modularly breaking down complex problems and am happy to document and open-source my experiences."
  },

  /* 按钮:variant 可选 primary(实心) / outline(描边);download:true 表示下载文件 */
  actions: [
    { label: { zh: "查看项目", en: "View Projects" }, href: "#projects", variant: "primary" },
  ],

  /* 社交链接胶囊。http(s) 链接会自动新窗口打开 */
  socials: [
    { label: "GitHub", href: "https://github.com/your-github" },
    // { label: "Twitter", href: "https://twitter.com/your-twitter" },
    // { label: "知乎", href: "https://www.zhihu.com/people/your-zhihu" },
    // { label: "博客", href: "https://your-blog.example.com" },
    { label: "Email", href: "mailto:you@example.com" }
  ],

  /* 头像下方状态徽章 */
  badge: { zh: "目前开放合作机会", en: "Open to opportunities" }
};
