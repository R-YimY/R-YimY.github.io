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
  pageTitle: {
    zh: "Ranyu (YIMY) · 计算机视觉 / 三维重建",
    en: "Ranyu (YIMY) · Computer Vision & 3D Reconstruction"
  },

  /* 顶部左上角品牌名(主页锚点) */
  brand: "Ranyu",
  brandEn: "YIMY",

  /* 搜索引擎 / 社交平台元信息(随语言切换更新) */
  seo: {
    description: {
      zh: "Ranyu (YIMY) 的个人主页 — 计算机视觉与三维重建工程师,专注多视图几何、密集匹配点云处理、纯视觉定位与 C++/Python 工程化落地。",
      en: "Ranyu (YIMY)'s personal homepage — a computer vision and 3D reconstruction engineer focused on multi-view geometry, dense point cloud processing, visual localization, and C++/Python engineering."
    },
    keywords: {
      zh: "Ranyu, YIMY, 计算机视觉, 三维重建, 视觉定位, SLAM, 点云处理, MVS, COLMAP, C++, Python, 个人主页",
      en: "Ranyu, YIMY, computer vision, 3D reconstruction, visual localization, SLAM, point cloud processing, MVS, COLMAP, C++, Python, portfolio"
    }
  },

  /* 页脚。{year} 会自动替换为当前年份 */
  footer: {
    copyright: "© {year} Ranyu (YIMY). All rights reserved.",
    note: {
      zh: "计算机视觉 / 三维重建 · 使用原生 HTML / CSS / JavaScript 构建",
      en: "Computer Vision & 3D Reconstruction · Built with vanilla HTML / CSS / JavaScript"
    }
  }
};
