/* ============================================================
 * 知识成果 · Achievements section
 * ------------------------------------------------------------
 * 按分类展示专利、论文、竞赛与研究方向。
 * 每个分类:icon(表情图标)+ title(分类名)+ items(条目列表)。
 * 暂无真实信息的条目使用"待补充"占位,后续可直接替换。
 * ============================================================ */

window.SITE = window.SITE || {};

SITE.achievements = {
  kicker: "05",
  title: { zh: "知识成果", en: "Knowledge & Achievements" },
  subtitle: {
    zh: "专利、论文、竞赛与研究方向。",
    en: "Patents, publications, competitions, and research focus."
  },

  groups: [
    {
      icon: "📜",
      title: { zh: "专利", en: "Patents" },
      items: [
        {
          zh: "一种基于多视图几何的三维重建方法 · 申请号待补充",
          en: "A multi-view geometry based 3D reconstruction method · Application number TBD"
        },
        {
          zh: "一种点云矢量化处理方法 · 状态:申请中",
          en: "A point cloud vectorization method · Status: under application"
        }
      ]
    },
    {
      icon: "📄",
      title: { zh: "论文", en: "Publications" },
      items: [
        {
          zh: "论文标题待补充 · 期刊 / 会议待补充 · 年份待补充",
          en: "Paper title TBD · Journal / Conference TBD · Year TBD"
        },
        {
          zh: "论文标题待补充 · 状态:撰写中",
          en: "Paper title TBD · Status: in preparation"
        }
      ]
    },
    {
      icon: "🏆",
      title: { zh: "竞赛", en: "Competitions" },
      items: [
        {
          zh: "亚太数学竞赛二等奖 · 2020",
          en: "Second Prize, Asia-Pacific Mathematics Competition · 2020"
        },
        {
          zh: "竞赛名称待补充 · 奖项待补充 · 年份待补充",
          en: "Competition name TBD · Award TBD · Year TBD"
        }
      ]
    },
    {
      icon: "🔬",
      title: { zh: "研究方向", en: "Research Focus" },
      items: [
        {
          zh: "多视图三维重建 / 点云矢量化",
          en: "Multi-view 3D reconstruction / point cloud vectorization"
        },
        {
          zh: "纯视觉定位 / 多轨迹视觉建图",
          en: "Pure-visual localization / multi-trajectory visual mapping"
        }
      ]
    }
  ]
};
