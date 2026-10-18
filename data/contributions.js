/* ============================================================
 * 开源与社区贡献 · Contributions section
 * ------------------------------------------------------------
 * stats    统计数字(进入视口时会从 0 滚动到该数值)
 * timeline 时间线,按时间倒序排列(年份为字符串)
 * ============================================================ */

window.SITE = window.SITE || {};

SITE.contributions = {
  kicker: "03",
  title: { zh: "开源与社区贡献", en: "Open Source & Community" },

  /* value 为数字,用于滚动动画;label 为下方说明 */
  stats: [
    { value: 1200, label: { zh: "GitHub 提交", en: "Commits" } },
    { value: 40, label: { zh: "合并的 PR", en: "Merged PRs" } },
    { value: 25, label: { zh: "维护仓库", en: "Repos maintained" } },
    { value: 9, label: { zh: "年参与开源", en: "Years contributing" } }
  ]
  // ,
  // timeline: [
  //   {
  //     year: "2026",
  //     title: { zh: "成为某知名开源项目 Maintainer", en: "Became a maintainer of a well-known OSS project" },
  //     desc: { zh: "负责代码评审、Issue 维护与版本发布,推动插件系统重构。", en: "Own code review, issue triage, and releases; drove a plugin-system refactor." }
  //   },
  //   {
  //     year: "2025",
  //     title: { zh: "提交首个被合并的核心 PR", en: "First merged core pull request" },
  //     desc: { zh: "修复了一个影响构建性能的长期问题,并获得社区致谢。", en: "Fixed a long-standing build-performance issue and received community thanks." }
  //   },
  //   {
  //     year: "2024",
  //     title: { zh: "发起个人开源组织", en: "Founded a personal open-source org" },
  //     desc: { zh: "聚合工具库与基础设施项目,累计获得上百颗 Star。", en: "Consolidated tooling and infra projects, collectively earning hundreds of stars." }
  //   }
  // ]
};
