/* ============================================================
 * Hero 个人简介 · Hero section
 * ------------------------------------------------------------
 * 首屏区域:头像、姓名、定位、摘要、核心数据、按钮与社交链接。
 * ============================================================ */

window.SITE = window.SITE || {};

SITE.hero = {
  /* 头像图片路径 */
  avatar: "assets/avatar.svg",
  /* 头像替代文字(读屏用) */
  avatarAlt: { zh: "Ranyu (YIMY) 的头像", en: "Ranyu (YIMY) avatar" },

  /* 姓名上方的小字 */
  eyebrow: { zh: "你好,我是", en: "Hello, I'm" },

  /* 姓名(中文主标题 + 英文副标题) */
  name: "Ranyu",
  nameEn: "YIMY",

  /* 头衔 / 一句话定位 */
  title: {
    zh: "计算机视觉工程师 · 三维重建 / 视觉定位",
    en: "Computer Vision Engineer · 3D Reconstruction & Visual Localization"
  },

  /* 职业摘要:突出经验、技术栈与可交付成果 */
  desc: {
    zh: "3 年以上计算机视觉与三维重建经验,专注多视图几何、密集匹配点云处理与纯视觉定位。主导 MVS 点云单体化、多轨迹三维重建等项目,擅长用 Python / C++ 将算法落地为可复现、可维护的工程,并持续输出开源工具与技术文档。",
    en: "3+ years in computer vision and 3D reconstruction, focused on multi-view geometry, dense point cloud processing, and visual localization. Led projects spanning MVS-based building vectorization and multi-trajectory 3D reconstruction, with a track record of turning algorithms into reproducible, maintainable Python/C++ systems and sharing open-source tools and technical docs."
  },

  /* 首屏核心数据:用可验证的数字快速建立专业印象 */
  highlights: [
    { value: "3+", label: { zh: "年视觉 / 三维经验", en: "Years in Vision & 3D" } },
    { value: "22", label: { zh: "公开开源仓库", en: "Public repositories" } },
    { value: "140", label: { zh: "GitHub Stars", en: "GitHub Stars" } },
    { value: "3", label: { zh: "核心项目", en: "Core projects" } }
  ],

  /* 首屏不再放置操作按钮;打印简历入口已移至顶部导航栏。 */

  /* 社交链接胶囊。http(s) 链接会自动新窗口打开 */
  socials: [
    { label: "GitHub", href: "https://github.com/R-YimY" },
    { label: "Email", href: "mailto:1547823315@qq.com" }
  ],

  /* 头像下方状态徽章 */
  badge: { zh: "开放工作与合作机会", en: "Open to opportunities" }
};
