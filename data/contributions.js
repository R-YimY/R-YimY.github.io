/* ============================================================
 * 开源与社区贡献 · Contributions section
 * ------------------------------------------------------------
 * timeline 横向时间线,按时间倒序排列(年份为字符串)
 * ============================================================ */

window.SITE = window.SITE || {};

SITE.contributions = {
  kicker: "04",
  title: { zh: "开源与社区贡献", en: "Open Source & Community" },

  timeline: [
    {
      year: "2026",
      title: { zh: "个人主页与作品集上线", en: "Portfolio and resume site launched" },
      desc: {
        zh: "重构个人主页,系统整理三维重建、点云处理与视觉定位项目,并支持一键打印简历。",
        en: "Rebuilt the personal site to organize 3D reconstruction, point cloud, and visual localization work, with one-click resume printing."
      }
    },
    {
      year: "2025",
      title: { zh: "多视角几何工具链", en: "Multi-view geometry toolchain" },
      desc: {
        zh: "发布 LineOptimize 与 ParkLotsTopo,覆盖多视角直线优化和矢量地图拓扑构建。",
        en: "Released LineOptimize and ParkLotsTopo for multi-view line optimization and vector map topology construction."
      }
    },
    {
      year: "2024",
      title: { zh: "Yours_Colmap 稠密重建", en: "Yours_Colmap dense reconstruction" },
      desc: {
        zh: "支持自定义位姿、图像与 mask 的稠密重建流程,提升重建区域的可控性。",
        en: "Enabled dense reconstruction with custom poses, images, and masks, making the reconstruction region more controllable."
      }
    },
    {
      year: "2023",
      title: { zh: "MVS-POLYFIT 点云单体化", en: "MVS-POLYFIT point cloud vectorization" },
      desc: {
        zh: "发布基于密集匹配点云的建筑矢量单体化项目,覆盖平面分割、边界提取与拓扑构建。",
        en: "Released an MVS-based building vectorization project covering plane segmentation, boundary extraction, and topology construction."
      }
    },
    {
      year: "2022",
      title: { zh: "开始持续输出开源项目", en: "Started consistent open-source work" },
      desc: {
        zh: "在 GitHub 建立持续贡献习惯,项目覆盖点云处理、平面提取与视觉算法。",
        en: "Began contributing consistently on GitHub, spanning point cloud processing, plane extraction, and vision algorithms."
      }
    }
  ]
};
