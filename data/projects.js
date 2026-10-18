/* ============================================================
 * 主要代码项目 · Projects section
 * ------------------------------------------------------------
 * 每个项目卡片包含:配图 + 名称 + 描述 + 技术标签 + 链接。
 *
 * 【配图 image】
 *   src    图片路径(放在 assets/projects/ 下)
 *   format 左上角徽章文字:JPG / PNG / GIF / SVG / WEBP ...
 *          值为 GIF 时自动显示绿色动图徽章
 *   alt    无障碍文字 + 灯箱说明(会跟随语言切换)
 *   width / height  图片原始像素尺寸(避免加载时布局抖动)
 *   建议图片为 16:9(如 1280×720),否则会被自动裁切
 *
 * 【链接 links】http(s) 链接自动新窗口打开
 * ============================================================ */

window.SITE = window.SITE || {};

SITE.projects = {
  kicker: "02",
  title: { zh: "重点项目", en: "Featured Projects" },
  subtitle: {
    zh: "以下为我主导或深度参与的代表性项目(占位示例),支持 JPG / PNG / GIF 动图 / SVG 等多种图片格式,均可点击放大预览。",
    en: "A selection of projects I've led or contributed to (placeholder examples). Images support JPG / PNG / animated GIF / SVG — click any image to zoom in."
  },

  items: [
    {
      name: "MVS-Polyfit",
      emoji: "🧩",
      desc: {
        zh: "一个基于密集匹配点云的建筑矢量单体化项目，用于三维重建和城市建模。",
        en: "A building vectorization project based on dense point clouds, used for 3D reconstruction and urban modeling."
      },
      tags: ["C++", "MVS", "3D-Reconstruction", "Point-Cloud Processing"],
      links: [
        { label: "GitHub ↗", href: "https://github.com/your-github/awesome-toolkit" },
      ],
      image: {
        src: "assets/projects/MVS-Polyfit.jpg",
        format: "JPG",
        alt: { zh: "MVS-Polyfit 项目截图", en: "MVS-Polyfit project screenshot" },
        width: 1280,
        height: 720
      }
    },
    {
      name: "Visual-Localization",
      emoji: "☁️",
      desc: {
        zh: "一个基于纯视觉方案的定位系统，能够在复杂环境中实现高精度的视觉定位。",
        en: "A visual localization system based on a pure visual approach, capable of achieving high-precision localization in complex environments."
      },
      tags: ["Python", "C++", "Visual-Localization", "SLAM", "Computer-Vision"],
      links: [
        { label: "GitHub ↗", href: "https://github.com/your-github/cloud-deploy-cli" }
      ],
      image: {
        src: "assets/projects/Visual-Localization.gif",
        format: "GIF",
        alt: { zh: "Visual-Localization 视觉定位演示动画", en: "Visual-Localization animated visual localization demo" },
        width: 640,
        height: 360
      }
    },
    {
      name: "Multi-trajectory Visual Mapping",
      emoji: "📊",
      desc: {
        zh: "一个用于多轨迹众包采集数据的视觉地面要素三维重建系统，能够实现高精度高完整性的三维建模。",
        en: "A visual ground feature 3D reconstruction system for multi-trajectory crowdsourced data collection, capable of achieving high-precision and high-completeness 3D modeling."
      },
      tags: ["Python", "C++", "3D-Reconstruction", "Image Processing"],
      links: [
        { label: "GitHub ↗", href: "#" },
        { label: "Demo ↗", href: "#" }
      ],
      image: {
        src: "assets/projects/insight-dashboard.png",
        format: "PNG",
        alt: { zh: "insight-dashboard 数据可视化面板截图", en: "insight-dashboard data visualization screenshot" },
        width: 1280,
        height: 720
      }
    }
  ]
};
