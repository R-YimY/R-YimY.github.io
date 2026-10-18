/* ============================================================
 * 知识成果 · Achievements section
 * ------------------------------------------------------------
 * 按分类展示论文/专利、写作、演讲、荣誉等。
 * 每个分类:icon(表情图标)+ title(分类名)+ items(条目列表)。
 * ============================================================ */

window.SITE = window.SITE || {};

SITE.achievements = {
  kicker: "04",
  title: { zh: "知识成果", en: "Knowledge & Achievements" },
  subtitle: {
    zh: "论文、专利、技术演讲、写作与荣誉(占位示例)。",
    en: "Papers, patents, talks, writing, and honors (placeholder examples)."
  },

  groups: [
    {
      icon: "📄",
      title: { zh: "论文", en: "Papers" },
      items: [
        { zh: "《面向大规模前端的构建优化方法》,发表于某会议,2025", en: "\"Build Optimization for Large-Scale Frontends\", Conference Paper, 2025" },
      ]
    },
    {
      icon: "✍️",
      title: { zh: "专利", en: "Patents" },
      items: [
        { zh: "发明专利:一种分布式任务调度方法,编号 XXXXXXXXX,2024", en: "Patent: A distributed task-scheduling method, No. XXXXXXXXX, 2024" }
      ]
    },
    {
      icon: "🏆",
      title: { zh: "荣誉与证书", en: "Honors & Certificates" },
      items: [
        { zh: "亚太数学竞赛二等奖,2020", en: "Second Prize, Asia-Pacific Mathematics Competition, 2020" }
      ]
    }
  ]
};
