/* ============================================================
 * 关于我 · About section
 * ------------------------------------------------------------
 * 详细自我介绍、关键信息(所在地/经验等)与技能栈。
 * ============================================================ */

window.SITE = window.SITE || {};

SITE.about = {
  /* 区块序号(显示在标题上方)与标题 */
  kicker: "01",
  title: { zh: "关于我", en: "About Me" },

  /* 自我介绍段落,可写多段;支持简单 HTML(如 <strong>) */
  paragraphs: [
    {
      zh: "我是一名计算机视觉 / 三维重建工程师,拥有 3 年以上算法研发与工程化经验。我关注多视图几何、密集匹配点云处理、点云矢量化和纯视觉定位,并习惯用真实数据评测、可复现实验和算法文档来保证交付质量。",
      en: "I'm a computer vision and 3D reconstruction engineer with 3+ years of algorithm development and production experience. I focus on multi-view geometry, dense point cloud processing, point cloud vectorization, and visual localization, and I rely on real-world evaluation, reproducible experiments, and clear algorithm documentation to ensure delivery quality."
    }
  ],

  /* 关键信息小块 */
  facts: [
    { label: { zh: "所在地", en: "Location" }, value: { zh: "中国 · 重庆", en: "ChongQing, China" } },
    { label: { zh: "经验", en: "Experience" }, value: { zh: "3+ 年", en: "3+ years" } },
    { label: { zh: "关注领域", en: "Focus" }, value: { zh: "三维重建 · 视觉定位 · 点云处理", en: "3D Reconstruction · Visual Localization · Point Clouds" } }
  ],

  /* 技能栈:可自由增删分组与条目 */
  skills: {
    title: { zh: "技能栈", en: "Tech Stack" },
    groups: [
      {
        label: { zh: "语言", en: "Languages" },
        items: ["Python", "C++", "Bash", "JavaScript"]
      },
      {
        label: { zh: "视觉与三维", en: "Vision & 3D" },
        items: ["多视图几何", "MVS", "SLAM", "视觉定位", "点云处理", "平面重建", "OpenCV", "COLMAP"]
      },
      {
        label: { zh: "工程化", en: "Engineering" },
        items: ["Git", "Linux", "Docker", "CMake", "性能优化", "CI/CD", "技术文档"]
      },
      {
        label: { zh: "学习方向", en: "Learning" },
        items: ["深度学习", "三维重建前沿"]
      }
    ]
  }
};
