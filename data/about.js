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
      zh: "我是一名拥有多年经验的计算机视觉/三维重建工程师,技术语言在 <strong>Python</strong> 与 <strong>C++</strong> 之间。重点关注前言视觉三维架构,并坚持用实际数据的测试和算法文档保障开发流程。",
      en: "I'm a computer vision/3D reconstruction engineer with several years of experience, working daily across <strong>Python</strong> and <strong>C++</strong>. I focus on cutting-edge 3D vision architectures and ensure development processes are supported by real-world data testing and algorithmic documentation."
    },
    {
      zh: "工作之余,对有趣的开源项目感兴趣,上传自己的代码,并在社区分享云原生与工程实践。我相信开源是一种协作方式,也是一种学习方法。",
      en: "Outside of work I'm interested in interesting open-source projects, upload my own code, and share cloud-native and engineering practices with the community. I believe open source is both a way to collaborate and a way to learn."
    }
  ],

  /* 关键信息小块 */
  facts: [
    { label: { zh: "所在地", en: "Location" }, value: { zh: "中国 · 重庆", en: "ChongQing, China" } },
    { label: { zh: "经验", en: "Experience" }, value: { zh: "3+ 年", en: "3+ years" } },
    { label: { zh: "关注领域", en: "Focus" }, value: { zh: "三维重建·视觉定位·图像处理·工程化优化", en: "3D Reconstruction · Visual Localization · Image Processing · Engineering Optimization" } }
  ],

  /* 技能栈:可自由增删分组与条目 */
  skills: {
    title: { zh: "技能栈", en: "Tech Stack" },
    groups: [
      {
        label: { zh: "语言", en: "Languages" },
        items: ["Python", "C++"]
      },
      {
        label: { zh: "领域", en: "Domains" },
        items: ["计算机视觉", "三维重建", "图像处理", "SLAM", "深度学习"]
      }
    ]
  }
};
