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
          zh: "地图数据融合方法、装置、电子设备、存储介质及车辆 · 第一发明人 · 状态:实审",
          en: "Map data fusion method, device, electronic device, storage medium, and vehicle · First Inventor · Status: under substantive examination"
        },
        {
          zh: "点云数据处理方法、装置、电子设备及存储介质 · 第一发明人 · 状态:实审",
          en: "A point cloud vectorization method · First Inventor · Status: under substantive examination"
        },
        {
          zh: "路面模型的构建方法、装置、系统、设备及存储介质 · 第一发明人 · 状态:实审",
          en: "A road surface model construction method, device, system, device, and storage medium · First Inventor · Status: under substantive examination"
        },
        {
          zh: "共视匹配方法、装置、设备、存储介质及程序产品 · 第一发明人 · 状态:实审",
          en: "A co-view matching method, device, equipment, storage medium, and program product · First Inventor · Status: under substantive examination"
        },
        {
          zh: "多相机位姿的确定方法、装置、设备、车辆及存储介质 · 第一发明人 · 状态:实审",
          en: "A method for determining the pose of multiple cameras, device, equipment, vehicle, and storage medium · First Inventor · Status: under substantive examination"
        },
        {
          zh: "增量式三维重建的方法、装置、设备及存储介质 · 第一发明人 · 状态:实审",
          en: "An incremental 3D reconstruction method, device, equipment, and storage medium · First Inventor· Status: under substantive examination"
        },
        {
          zh: "基于单目相机的三维场景重建方法及装置 · 第一发明人 · 状态:实审",
          en: "A 3D scene reconstruction method and device based on a monocular camera · First Inventor · Status: under substantive examination"
        }
      ]
    },
    {
      icon: "📄",
      title: { zh: "论文", en: "Publications" },
      items: [
        {
          zh: "AnchorReF: A novel anchor-based visual re-localization framework aided by multi-sensor data fusion ·co-author · ISPRS · 2026",
          en: "AnchorReF: A novel anchor-based visual re-localization framework aided by multi-sensor data fusion · co-author · ISPRS · 2026"
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
