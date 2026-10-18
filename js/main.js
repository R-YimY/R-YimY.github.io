/* =========================================================
   你的名字 · 个人主页 / Personal Homepage
   交互脚本:语言切换 / 主题切换 / 导航 / 滚动动画 / 数字滚动
   ========================================================= */
(function () {
  "use strict";

  var root = document.documentElement;
  var STORAGE_LANG = "homepage-lang";
  var STORAGE_THEME = "homepage-theme";

  /* ---------------------------------------------------------
     1. 语言切换 (中 / EN)
     --------------------------------------------------------- */
  var langToggle = document.getElementById("lang-toggle");
  var langLabel = document.getElementById("lang-toggle-label");

  function applyLang(lang) {
    lang = lang === "en" ? "en" : "zh";
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang);
    // 按钮显示的是"点击后要切换到的语言"
    if (langLabel) langLabel.textContent = lang === "zh" ? "EN" : "中";
    if (langToggle) {
      langToggle.setAttribute(
        "aria-label",
        lang === "zh" ? "Switch to English" : "切换到中文"
      );
    }
    try { localStorage.setItem(STORAGE_LANG, lang); } catch (e) {}
    if (typeof refreshMediaLabels === "function") refreshMediaLabels(lang);
  }

  function mediaAlt(img, lang) {
    if (!img) return "";
    var specific = lang === "en" ? img.getAttribute("data-alt-en") : img.getAttribute("data-alt-zh");
    return specific || img.getAttribute("alt") || "";
  }

  function refreshMediaLabels(lang) {
    var prefix = lang === "en" ? "Zoom image: " : "放大图片:";
    Array.prototype.forEach.call(document.querySelectorAll(".card-media"), function (figure) {
      if (figure.classList.contains("is-missing")) return;
      figure.setAttribute("aria-label", prefix + mediaAlt(figure.querySelector("img"), lang));
    });
    if (currentMedia && lightboxCaption && !lightboxCaption.hidden) {
      lightboxCaption.textContent = mediaAlt(currentMedia.querySelector("img"), lang);
    }
  }

  function initLang() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_LANG); } catch (e) {}
    if (!saved) {
      saved = (navigator.language || "zh").toLowerCase().indexOf("zh") === 0 ? "zh" : "en";
    }
    applyLang(saved);
  }

  if (langToggle) {
    langToggle.addEventListener("click", function () {
      applyLang(root.getAttribute("data-lang") === "zh" ? "en" : "zh");
    });
  }

  /* ---------------------------------------------------------
     2. 主题切换 (明 / 暗)
     --------------------------------------------------------- */
  var themeToggle = document.getElementById("theme-toggle");

  function applyTheme(theme) {
    theme = theme === "dark" ? "dark" : "light";
    root.setAttribute("data-theme", theme);
    try { localStorage.setItem(STORAGE_THEME, theme); } catch (e) {}
  }

  function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_THEME); } catch (e) {}
    if (!saved) {
      saved = window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    applyTheme(saved);
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      applyTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
  }

  /* ---------------------------------------------------------
     3. 移动端导航
     --------------------------------------------------------- */
  var navToggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("primary-nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        nav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------------------------------------------------------
     4. 头部滚动阴影 + 返回顶部
     --------------------------------------------------------- */
  var header = document.getElementById("site-header");
  var toTop = document.getElementById("to-top");

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle("scrolled", y > 8);
    if (toTop) toTop.classList.toggle("show", y > 480);
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------------------------------------------------------
     5. 导航高亮 (当前可见区块)
     --------------------------------------------------------- */
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll('.nav a[href^="#"]')
  );
  var sections = navLinks
    .map(function (a) { return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var id = "#" + entry.target.id;
          navLinks.forEach(function (a) {
            a.classList.toggle("active", a.getAttribute("href") === id);
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------------------------------------------------------
     6. 滚动揭示动画
     --------------------------------------------------------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var revealObs = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) { revealObs.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------------------------------------------------------
     7. 统计数字滚动
     --------------------------------------------------------- */
  var counters = document.querySelectorAll(".stat-num[data-count]");

  function runCounter(el) {
    var target = parseInt(el.getAttribute("data-count"), 10) || 0;
    var duration = 1400;
    var start = null;

    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      // easeOutCubic
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target;
    }
    requestAnimationFrame(step);
  }

  if (counters.length) {
    if ("IntersectionObserver" in window) {
      // HTML 内为真实数值(无 JS 时可见),进入视口前先归零再滚动计数
      Array.prototype.forEach.call(counters, function (el) {
        el.textContent = "0";
      });
      var cObs = new IntersectionObserver(
        function (entries, obs) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              runCounter(entry.target);
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.4 }
      );
      counters.forEach(function (el) { cObs.observe(el); });
    }
  }

  /* ---------------------------------------------------------
     8. 项目图片灯箱 (点击放大)
     --------------------------------------------------------- */
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightbox-img");
  var lightboxCaption = document.getElementById("lightbox-caption");
  var lightboxClose = document.getElementById("lightbox-close");
  var lastFocused = null;
  var currentMedia = null;

  function openLightbox(figure) {
    var img = figure.querySelector("img");
    if (!img || !lightbox) return;
    var lang = root.getAttribute("data-lang") || "zh";
    currentMedia = figure;
    lightboxImg.src = img.currentSrc || img.src;
    lightboxImg.alt = mediaAlt(img, lang);
    if (lightboxCaption) {
      lightboxCaption.textContent = mediaAlt(img, lang);
      lightboxCaption.hidden = !lightboxCaption.textContent;
    }
    lastFocused = document.activeElement;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(function () {
      lightbox.classList.add("open");
      if (lightboxClose) lightboxClose.focus();
    });
  }

  function closeLightbox() {
    if (!lightbox || lightbox.hidden) return;
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
    window.setTimeout(function () {
      lightbox.hidden = true;
      lightboxImg.src = "";
      currentMedia = null;
      if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
    }, 220);
  }

  var mediaFigures = document.querySelectorAll(".card-media");
  Array.prototype.forEach.call(mediaFigures, function (figure) {
    figure.setAttribute("tabindex", "0");
    figure.setAttribute("role", "button");
    figure.addEventListener("click", function () { openLightbox(figure); });
    figure.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
        e.preventDefault();
        openLightbox(figure);
      }
    });
  });
  refreshMediaLabels(root.getAttribute("data-lang") || "zh");

  /* ---------------------------------------------------------
     8b. 图片加载失败兜底
     ---------------------------------------------------------
     配置文件里的图片路径写错 / 文件缺失时,不再显示破图,
     而是替换为一块带「项目名 + 缺失路径」的提示,便于排查。
     --------------------------------------------------------- */
  function escapeHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function applyImageFallback(img) {
    if (!img) return;

    // Hero 头像
    if (img.classList.contains("avatar")) {
      if (img.dataset.fallbackDone === "1") return;
      img.dataset.fallbackDone = "1";
      var av = document.createElement("div");
      av.className = "avatar avatar-fallback";
      av.setAttribute("aria-hidden", "true");
      av.textContent = "\uD83D\uDC64";
      img.replaceWith(av);
      return;
    }

    // 项目配图
    var figure = img.closest ? img.closest(".card-media") : null;
    if (!figure || figure.classList.contains("is-missing")) return;

    var projectName = figure.getAttribute("data-project") || "";
    var src = img.getAttribute("src") || "";

    figure.classList.add("is-missing");
    figure.removeAttribute("tabindex");
    figure.removeAttribute("role");
    figure.removeAttribute("aria-label");

    var zoom = figure.querySelector(".media-zoom");
    if (zoom) zoom.remove();

    var box = document.createElement("div");
    box.className = "media-fallback";
    box.innerHTML =
      '<span class="media-fallback-icon" aria-hidden="true">\uD83D\uDDBC\uFE0F</span>' +
      (projectName ? '<span class="media-fallback-title">' + escapeHtml(projectName) + "</span>" : "") +
      '<span class="media-fallback-note">' +
        '<span lang="zh">图片未找到</span><span lang="en">Image not found</span>' +
      "</span>" +
      '<code class="media-fallback-path">' + escapeHtml(src) + "</code>";

    img.replaceWith(box);
  }

  // 捕获阶段监听:图片 error 事件不会冒泡,但可以被捕获
  window.addEventListener("error", function (e) {
    var t = e.target;
    if (t && t.tagName === "IMG") applyImageFallback(t);
  }, true);

  // 处理在监听器安装前就已失败的图片(如浏览器缓存中的失败结果)
  window.setTimeout(function () {
    Array.prototype.forEach.call(document.images, function (img) {
      if (img.complete && img.naturalWidth === 0) applyImageFallback(img);
    });
  }, 0);

  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox || e.target === lightboxClose ||
          (lightboxClose && lightboxClose.contains(e.target))) {
        closeLightbox();
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeLightbox();
    });
  }

  /* ---------------------------------------------------------
     初始化
     --------------------------------------------------------- */
  initLang();
  initTheme();
  onScroll();
})();
