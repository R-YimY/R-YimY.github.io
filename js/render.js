/* ============================================================
 * 渲染器 · Renderer
 * ------------------------------------------------------------
 * 读取 data/ 目录下的配置,渲染为页面各板块。
 * 一般情况下无需修改本文件;要改内容请编辑 data/*.js。
 * ============================================================ */
(function () {
  "use strict";

  var S = window.SITE || {};

  /* -------------------- 工具函数 -------------------- */

  // 双语 → 两个 <span lang> 文本(CSS 根据当前语言显示其中一个)
  function bi(v) {
    if (v == null) return "";
    if (typeof v === "string") return v;
    var zh = v.zh || "";
    var en = v.en || "";
    if (en === "") return '<span lang="zh">' + zh + "</span>";
    if (zh === "") return '<span lang="en">' + en + "</span>";
    return '<span lang="zh">' + zh + '</span><span lang="en">' + en + "</span>";
  }

  // 双语 → 纯文本(用于 title / alt 等属性场景)
  function plain(v) {
    if (v == null) return "";
    if (typeof v === "string") return v;
    var zh = v.zh || "";
    var en = v.en || "";
    return zh && en ? zh + " / " + en : (zh || en);
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // 外部链接自动新窗口打开
  function isExternal(href) {
    return typeof href === "string" && /^https?:/i.test(href);
  }

  function linkAttrs(href) {
    return isExternal(href) ? ' target="_blank" rel="noopener"' : "";
  }

  function isGif(image) {
    if (!image) return false;
    if (image.animated === true) return true;
    if (String(image.format || "").toUpperCase() === "GIF") return true;
    return /\.gif(\?|#|$)/i.test(String(image.src || ""));
  }

  function root(id) {
    return document.getElementById(id);
  }

  function render(id, html) {
    var el = root(id);
    if (el) el.innerHTML = html;
    return el;
  }

  // 统一的区块标题
  function head(cfg) {
    return (
      '<header class="section-head reveal">' +
        (cfg.kicker ? '<p class="section-kicker">' + esc(cfg.kicker) + "</p>" : "") +
        '<h2 class="section-title">' + bi(cfg.title) + "</h2>" +
        (cfg.subtitle ? '<p class="section-sub">' + bi(cfg.subtitle) + "</p>" : "") +
      "</header>"
    );
  }

  /* -------------------- 站点级(brand / 标题 / 页脚) -------------------- */
  function renderSite() {
    var s = S.site || {};

    if (s.pageTitle) document.title = plain(s.pageTitle);

    var brand = root("brand-name");
    if (brand) {
      brand.innerHTML =
        esc(s.brand || "") +
        (s.brandEn ? '<span class="brand-en"> · ' + esc(s.brandEn).replace(/ /g, "&nbsp;") + "</span>" : "");
    }

    var f = s.footer || {};
    var year = String(new Date().getFullYear());

    var cp = root("footer-copyright");
    if (cp) cp.textContent = String(f.copyright || "").replace(/\{year\}/g, year);

    var note = root("footer-note");
    if (note && f.note) note.innerHTML = bi(f.note);
  }

  /* -------------------- Hero -------------------- */
  function renderHero() {
    var h = S.hero;
    if (!h) return;

    var actions = (h.actions || []).map(function (a) {
      return (
        '<a class="btn btn-' + esc(a.variant || "primary") + '" href="' + esc(a.href) + '"' +
          (a.download ? " download" : "") + linkAttrs(a.href) + ">" +
          bi(a.label) +
        "</a>"
      );
    }).join("");

    var socials = (h.socials || []).map(function (s) {
      return (
        "<li><a href=\"" + esc(s.href) + "\"" + linkAttrs(s.href) +
          ' aria-label="' + esc(s.label) + '">' + esc(s.label) + "</a></li>"
      );
    }).join("");

    var html =
      '<div class="hero-text reveal">' +
        '<p class="hero-eyebrow">' + bi(h.eyebrow) + "</p>" +
        '<h1 class="hero-name">' + esc(h.name) +
          (h.nameEn ? ' <span class="hero-name-en">' + esc(h.nameEn) + "</span>" : "") + "</h1>" +
        '<p class="hero-title">' + bi(h.title) + "</p>" +
        '<p class="hero-desc">' + bi(h.desc) + "</p>" +
        (actions ? '<div class="hero-links">' + actions + "</div>" : "") +
        (socials ? '<ul class="social" aria-label="Social links">' + socials + "</ul>" : "") +
      "</div>" +
      '<div class="hero-visual reveal">' +
        '<img class="avatar" src="' + esc(h.avatar) + '" width="260" height="260" alt="' + esc(plain(h.avatarAlt)) + '" />' +
        (h.badge
          ? '<div class="hero-badge"><span class="pulse" aria-hidden="true"></span>' + bi(h.badge) + "</div>"
          : "") +
      "</div>";

    render("hero-root", html);
  }

  /* -------------------- 关于我 -------------------- */
  function renderAbout() {
    var a = S.about;
    if (!a) return;

    var paragraphs = (a.paragraphs || []).map(function (p) {
      return "<p>" + bi(p) + "</p>";
    }).join("");

    var facts = (a.facts || []).map(function (f) {
      return '<div class="fact"><dt>' + bi(f.label) + "</dt><dd>" + bi(f.value) + "</dd></div>";
    }).join("");

    var groups = ((a.skills && a.skills.groups) || []).map(function (g) {
      var chips = (g.items || []).map(function (i) {
        return '<li class="chip">' + esc(i) + "</li>";
      }).join("");
      return (
        '<div class="skill-group">' +
          '<p class="skill-label">' + bi(g.label) + "</p>" +
          '<ul class="chips">' + chips + "</ul>" +
        "</div>"
      );
    }).join("");

    var html =
      head(a) +
      '<div class="about-grid">' +
        '<div class="about-bio reveal">' +
          paragraphs +
          (facts ? '<dl class="facts">' + facts + "</dl>" : "") +
        "</div>" +
        '<div class="about-skills reveal">' +
          (a.skills && a.skills.title ? "<h3>" + bi(a.skills.title) + "</h3>" : "") +
          groups +
        "</div>" +
      "</div>";

    render("about-root", html);
  }

  /* -------------------- 主要项目 -------------------- */
  function cardMedia(image, projectName) {
    if (!image || !image.src) return "";
    var gif = isGif(image);
    var alt = image.alt || {};
    var zhAlt = typeof alt === "string" ? alt : (alt.zh || "");
    var enAlt = typeof alt === "string" ? alt : (alt.en || "");

    return (
      '<figure class="card-media" data-project="' + esc(projectName || "") + '">' +
        '<img src="' + esc(image.src) + '"' +
          ' alt="' + esc(plain(image.alt)) + '"' +
          ' data-alt-zh="' + esc(zhAlt) + '"' +
          ' data-alt-en="' + esc(enAlt) + '"' +
          ' loading="lazy" decoding="async"' +
          (image.width ? ' width="' + esc(image.width) + '"' : "") +
          (image.height ? ' height="' + esc(image.height) + '"' : "") +
        " />" +
        '<span class="media-badge' + (gif ? " media-badge-gif" : "") + '">' +
          (gif ? '<span class="live-dot" aria-hidden="true"></span>' : "") +
          esc(image.format || "") +
        "</span>" +
        '<span class="media-zoom" aria-hidden="true">\u2922</span>' +
      "</figure>"
    );
  }

  function renderProjects() {
    var p = S.projects;
    if (!p) return;

    var cards = (p.items || []).map(function (it) {
      var tags = (it.tags || []).length
        ? '<ul class="card-tags">' + it.tags.map(function (t) {
            return "<li>" + esc(t) + "</li>";
          }).join("") + "</ul>"
        : "";

      var links = (it.links || []).map(function (l) {
        return '<a href="' + esc(l.href) + '"' + linkAttrs(l.href) + ">" + esc(l.label) + "</a>";
      }).join("");

      return (
        '<article class="card reveal">' +
          cardMedia(it.image, it.name) +
          '<div class="card-body">' +
            '<div class="card-top">' +
              (it.emoji ? '<span class="card-emoji" aria-hidden="true">' + esc(it.emoji) + "</span>" : "") +
              '<h3 class="card-title">' + esc(it.name) + "</h3>" +
            "</div>" +
            '<p class="card-desc">' + bi(it.desc) + "</p>" +
            tags +
            (links ? '<div class="card-links">' + links + "</div>" : "") +
          "</div>" +
        "</article>"
      );
    }).join("");

    render("projects-root", head(p) + '<div class="cards">' + cards + "</div>");
  }

  /* -------------------- 开源贡献 -------------------- */
  function renderContributions() {
    var c = S.contributions;
    if (!c) return;

    var stats = (c.stats || []).map(function (s) {
      var v = esc(s.value);
      return (
        '<div class="stat">' +
          '<span class="stat-num" data-count="' + v + '">' + v + "</span>" +
          '<span class="stat-label">' + bi(s.label) + "</span>" +
        "</div>"
      );
    }).join("");

    var timeline = (c.timeline || []).map(function (t) {
      return (
        '<article class="timeline-item">' +
          '<p class="timeline-meta">' + esc(t.year) + "</p>" +
          "<h3>" + bi(t.title) + "</h3>" +
          "<p>" + bi(t.desc) + "</p>" +
        "</article>"
      );
    }).join("");

    render(
      "contributions-root",
      head(c) +
        (stats ? '<div class="stat-row reveal">' + stats + "</div>" : "") +
        (timeline ? '<div class="timeline reveal">' + timeline + "</div>" : "")
    );
  }

  /* -------------------- 知识成果 -------------------- */
  function renderAchievements() {
    var a = S.achievements;
    if (!a) return;

    var groups = (a.groups || []).map(function (g) {
      var items = (g.items || []).map(function (i) {
        return "<li>" + bi(i) + "</li>";
      }).join("");
      return (
        '<article class="achieve-card reveal">' +
          "<h3>" +
            (g.icon ? '<span class="achieve-icon" aria-hidden="true">' + esc(g.icon) + "</span> " : "") +
            bi(g.title) +
          "</h3>" +
          "<ul>" + items + "</ul>" +
        "</article>"
      );
    }).join("");

    render("achievements-root", head(a) + '<div class="achieve-grid">' + groups + "</div>");
  }

  /* -------------------- 联系方式 -------------------- */
  function renderContact() {
    var c = S.contact;
    if (!c) return;

    var items = (c.items || []).map(function (i) {
      return (
        '<a class="contact-item" href="' + esc(i.href) + '"' + linkAttrs(i.href) + ">" +
          '<span class="contact-icon" aria-hidden="true">' + esc(i.icon) + "</span>" +
          '<span class="contact-label">' + bi(i.label) + "</span>" +
          '<span class="contact-value">' + esc(i.value) + "</span>" +
        "</a>"
      );
    }).join("");

    render("contact-root", head(c) + '<div class="contact-grid reveal">' + items + "</div>");
  }

  /* -------------------- 执行渲染 -------------------- */
  function renderAll() {
    renderSite();
    renderHero();
    renderAbout();
    renderProjects();
    renderContributions();
    renderAchievements();
    renderContact();
  }

  renderAll();

  // 供其它模块(如语言切换)复用
  window.SITE_RENDER = { renderAll: renderAll, bi: bi, plain: plain };
})();
