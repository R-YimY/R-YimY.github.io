/* ============================================================
 * 联系方式 · Contact section
 * ------------------------------------------------------------
 * 每个卡片:icon(表情图标)+ label(类型名)+ value(显示值)+ href(点击跳转)。
 * href 支持 mailto: / https: / 相对路径。
 * ============================================================ */

window.SITE = window.SITE || {};

SITE.contact = {
  kicker: "05",
  title: { zh: "联系方式", en: "Get in Touch" },
  subtitle: {
    zh: "欢迎交流合作、开源协作或技术探讨。",
    en: "Open to collaboration, open-source work, or just talking tech."
  },

  items: [
    { icon: "✉️", label: { zh: "邮箱", en: "Email" }, value: "1547823315@qq.com", href: "mailto:1547823315@qq.com" },
    { icon: "🐙", label: { zh: "GitHub", en: "GitHub" }, value: "@R-YimY", href: "https://github.com/R-YimY" }
  ]
};
