/* ============================================================
 * 工作与研究经历 · Experience section
 * ------------------------------------------------------------
 * 按时间倒序排列。type 可选 "work" / "education",
 * 用于显示不同的经历标签。highlights 建议写可验证的贡献与结果。
 * ============================================================ */

window.SITE = window.SITE || {};

SITE.experience = {
  kicker: "02",
  title: { zh: "工作与研究经历", en: "Experience" },
  subtitle: {
    zh: "算法研发、工程化落地与开源实践。",
    en: "Algorithm R&D, production engineering, and open-source practice."
  },

  items: [
    {
      type: "work",
      period: "2023 — 至今",
      role: { zh: "三维视觉工程师 · 远程", en: "3D Vision Engineer · Remote" },
      org: { zh: "计算机视觉 / 三维重建", en: "Computer Vision / 3D Reconstruction" },
      location: { zh: "远程", en: "Remote" },
      summary: {
        zh: "负责三维重建与视觉定位方向的算法研发和工程化落地,覆盖需求拆解、方案设计、C++ / Python 实现、数据评测与知识沉淀。",
        en: "Own algorithm R&D and production delivery for 3D reconstruction and visual localization, from requirement scoping and solution design to C++/Python implementation, evaluation, and documentation."
      },
      highlights: [
        {
          zh: "主导 MVS 密集匹配点云的建筑矢量单体化,完成平面分割、边界提取与拓扑构建的完整 pipeline。",
          en: "Led MVS-based building vectorization from dense point clouds, delivering a full pipeline for plane segmentation, boundary extraction, and topology construction."
        },
        {
          zh: "设计多轨迹众包数据的视觉三维重建方案,提升复杂场景下的重建完整性与几何精度。",
          en: "Designed a visual 3D reconstruction solution for multi-trajectory crowdsourced data, improving completeness and geometric accuracy in complex scenes."
        },
        {
          zh: "搭建纯视觉定位链路,融合图像检索、特征匹配与几何验证,输出稳定的位姿估计。",
          en: "Built a pure-visual localization pipeline combining image retrieval, feature matching, and geometric verification for stable pose estimation."
        },
        {
          zh: "推动 C++ 模块的性能优化与工程化交付,补充算法文档和可复现的评测流程。",
          en: "Drove C++ module performance optimization and production delivery, backed by algorithm documentation and reproducible evaluation workflows."
        }
      ],
      tags: ["C++", "Python", "MVS", "SLAM", "Point Cloud", "3D Reconstruction"]
    },
    {
      type: "education",
      period: "武汉大学",
      role: { zh: "计算机视觉方向 · 学生研究者", en: "Computer Vision · Student Researcher" },
      org: { zh: "武汉大学", en: "Wuhan University" },
      location: { zh: "中国 · 武汉", en: "Wuhan, China" },
      summary: {
        zh: "围绕多视图三维重建、点云矢量化和视觉定位开展学习与研究,持续维护开源 C++ / Python 工程。",
        en: "Studying and researching multi-view 3D reconstruction, point cloud vectorization, and visual localization while maintaining open-source C++/Python projects."
      },
      highlights: [
        {
          zh: "维护 MVS-POLYFIT 等开源项目,覆盖点云单体化与稠密重建。",
          en: "Maintained open-source projects like MVS-POLYFIT for point cloud vectorization and dense reconstruction."
        }
      ],
      tags: ["Computer Vision", "3D Reconstruction", "C++", "Python"]
    }
  ]
};
