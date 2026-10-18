/* ============================================================
 * 站点级配置 · Site config
 * ------------------------------------------------------------
 * 修改本文件可更新:浏览器标签标题、顶部品牌名、页脚文字。
 *
 * 双语写法:凡是 { zh: "中文", en: "English" } 的对象,
 * 会同时渲染出中英两段文本,由页面右上角按钮切换。
 * 字段值支持简单 HTML,例如 <strong>加粗</strong>。
 * ============================================================ */

window.SITE = window.SITE || {};

SITE.site = {
  /* 浏览器标签页标题 / Browser tab title */
  pageTitle: { zh: "Ranyu · 个人主页", en: "Ranyu · Portfolio" },

  /* 顶部左上角品牌名(主页锚点) */
  brand: "Ranyu",
  brandEn: "YIMY",

  /* 页脚。{year} 会自动替换为当前年份 */
  footer: {
    copyright: "© {year} Ranyu · Ranyu",
    note: {
      zh: "用 HTML / CSS / JS 手写 · 托管于 GitHub Pages",
      en: "Hand-crafted with HTML / CSS / JS · Hosted on GitHub Pages"
    }
  }
};
