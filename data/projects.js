/* ============================================================
 * 主要代码项目 · Projects section
 * ------------------------------------------------------------
 * 每个项目卡片包含:配图 + 名称 + 角色/时间 + 描述 + 亮点
 * + 技术标签 + 链接。
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
  kicker: "03",
  title: { zh: "重点项目", en: "Featured Projects" },
  subtitle: {
    zh: "以下为我主导或深度参与的代表性项目,覆盖点云单体化、视觉定位与多轨迹三维重建。",
    en: "Selected projects I led or contributed to, spanning point cloud vectorization, visual localization, and multi-trajectory 3D reconstruction."
  },

  items: [
    {
      name: "MVS-Polyfit",
      emoji: "🧩",
      role: { zh: "核心开发", en: "Core Developer" },
      period: "2023",
      desc: {
        zh: "基于 MVS 密集匹配点云的建筑矢量单体化系统,将非结构化点云转换为可用于 GIS 与城市建模的矢量面片。",
        en: "An MVS-based building vectorization system that converts unstructured dense point clouds into vector polygons for GIS and urban modeling."
      },
      highlights: [
        {
          zh: "完成平面分割、边界提取、拓扑构建与后处理的全流程实现。",
          en: "Implemented the full pipeline: plane segmentation, boundary extraction, topology construction, and post-processing."
        },
        {
          zh: "针对建筑立面与屋顶的复杂结构设计鲁棒拟合策略。",
          en: "Designed robust fitting strategies for complex facade and roof structures."
        },
        {
          zh: "使用 C++ 实现,兼顾大场景处理效率与结果完整性。",
          en: "Implemented in C++ with a balance between large-scene efficiency and result completeness."
        }
      ],
      tags: ["C++", "MVS", "Point Cloud", "3D Reconstruction", "Plane Fitting"],
      links: [
        { label: "GitHub ↗", href: "https://github.com/R-YimY/MVS-POLYFIT" }
      ],
      image: {
        src: "assets/projects/MVS-Polyfit.jpg",
        format: "JPG",
        alt: { zh: "MVS-Polyfit 建筑点云单体化结果截图", en: "MVS-Polyfit building point cloud vectorization screenshot" },
        width: 1280,
        height: 720
      }
    },
    {
      name: "Visual-Localization",
      emoji: "🎯",
      role: { zh: "核心开发", en: "Core Developer" },
      period: "2024 — 至今",
      desc: {
        zh: "面向复杂环境的纯视觉定位系统,融合图像检索、特征匹配与几何验证,输出高精度位姿估计。",
        en: "A pure-visual localization system for complex environments, combining image retrieval, feature matching, and geometric verification for accurate pose estimation."
      },
      highlights: [
        {
          zh: "搭建检索 → 匹配 → 位姿求解 → 几何校验的完整定位链路。",
          en: "Built a complete localization pipeline: retrieval, matching, pose solving, and geometric verification."
        },
        {
          zh: "针对弱纹理、重复纹理和视角变化优化匹配鲁棒性。",
          en: "Improved matching robustness against weak textures, repetitive patterns, and viewpoint changes."
        },
        {
          zh: "Python / C++ 混合实现,支持离线评测与在线定位。",
          en: "Implemented with Python/C++ for both offline evaluation and online localization."
        }
      ],
      tags: ["Python", "C++", "SLAM", "Visual Localization", "Computer Vision"],
      links: [],
      image: {
        src: "assets/projects/Visual-Localization.png",
        format: "PNG",
        alt: { zh: "Visual-Localization 视觉定位演示动画", en: "Visual-Localization animated localization demo" },
        width: 1280,
        height: 720
      }
    },
    {
      name: "Multi-trajectory Visual Mapping",
      emoji: "🗺️",
      role: { zh: "算法开发", en: "Algorithm Developer" },
      period: "2025 — 至今",
      desc: {
        zh: "面向多轨迹众包采集数据的视觉地面要素三维重建系统,输出高精度、高完整性的三维成果。",
        en: "A visual ground-feature 3D reconstruction system for multi-trajectory crowdsourced data, producing high-precision and high-completeness results."
      },
      highlights: [
        {
          zh: "设计多轨迹数据配准与融合策略,提升复杂场景的覆盖完整性。",
          en: "Designed multi-trajectory registration and fusion strategies to improve coverage completeness in complex scenes."
        },
        {
          zh: "实现地面要素几何重建与质量评估流程。",
          en: "Implemented geometric reconstruction and quality assessment workflows for ground features."
        },
        {
          zh: "针对大规模数据优化内存占用与计算调度。",
          en: "Optimized memory usage and compute scheduling for large-scale data."
        }
      ],
      tags: ["Python", "C++", "3D Reconstruction", "Image Processing", "Data Fusion"],
      links: [],
      image: {
        src: "assets/projects/Multi_trajectory_Visual_Mapping.gif",
        format: "GIF",
        alt: { zh: "多轨迹视觉建图项目成果演示", en: "Multi-trajectory visual mapping result demo" },
        width: 1280,
        height: 720
      }
    }
  ],

  /* 更多开源项目:卡片式展示,统一尺寸并使用图片作为背景。
   * 暂无配图的项目统一使用 assets/projects/placeholder.svg 占位图。 */
  more: {
    title: { zh: "更多开源项目", en: "More Open Source" },
    items: [
      {
        name: "Yours_Colmap",
        desc: { zh: "使用自定义位姿、图像与 mask 的稠密重建", en: "Dense reconstruction with custom poses, images, and masks" },
        href: "https://github.com/R-YimY/Yours_Colmap",
        image: "assets/projects/placeholder.svg"
      },
      {
        name: "LineOptimize",
        desc: { zh: "多视角的直线优化", en: "Multi-view line optimization" },
        href: "https://github.com/R-YimY/LineOptimize",
        image: "assets/projects/placeholder.svg"
      },
      {
        name: "ParkLotsTopo",
        desc: { zh: "矢量地图的拓扑构建", en: "Topology construction for vector maps" },
        href: "https://github.com/R-YimY/ParkLotsTopo",
        image: "assets/projects/placeholder.svg"
      },
      {
        name: "PointCloudProcesses",
        desc: { zh: "点云处理的工程性方法集", en: "Engineering methods for point cloud processing" },
        href: "https://github.com/R-YimY/PointCloudProcesses",
        image: "assets/projects/placeholder.svg"
      },
      {
        name: "Efficient_Ransac_for_PlaneDetection",
        desc: { zh: "vg 数据格式下的平面提取", en: "Plane extraction for vg-format datasets" },
        href: "https://github.com/R-YimY/Efficient_Ransac_for_PlaneDtection_vgDataset",
        image: "assets/projects/placeholder.svg"
      },
      {
        name: "line_intersection",
        desc: { zh: "多段线求交与多边形拆分", en: "Polyline intersection and polygon splitting" },
        href: "https://github.com/R-YimY/line_intersection",
        image: "assets/projects/placeholder.svg"
      }
    ]
  }
};
