/* ============================================================
   Portfolio interactions: i18n (TR/EN), theme, reveal, copy.
   No dependencies, no build step.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- i18n dictionary ---------- */
  var I18N = {
    tr: {
      _title: "Doğancan Hırdavatçıoğlu — Full-stack Mühendis",
      metaDesc: "Türkiye'nin fintech sektöründe veritabanı altyapısından ürün tasarımına kadar uçtan uca çözümler üreten full-stack mühendis. Guardi, MasaMasa ve Eccehome projeleri.",
      navWork: "Projeler", navSkills: "Yetenekler", navAbout: "Hakkımda", navContact: "İletişim",
      themeLabel: "Temayı değiştir", themeTitle: "Tema", menuLabel: "Menü",
      idxA: "SEÇME İŞLER",
      heroEyebrow: "Full-stack Mühendis · Türkiye",
      heroTitle: "Veritabanından arayüze,<br>fikirden <em>App&nbsp;Store</em>'a —<br>uçtan uca ürünler.",
      heroLede: "Türkiye'nin fintech sektöründe, veritabanı altyapısından ürün tasarımına kadar uçtan uca çözümler üreten full-stack mühendisim.",
      ctaWork: "Projeleri Gör", ctaContact: "İletişime Geç", status: "Yeni projelere açık",
      workTitle: "Öne Çıkan Projeler",
      roleLabel: "ROL",
      guardiTag: "iOS · App Store'da canlı",
      guardiDesc: "iPhone için spam çağrı engelleyici ve yapay zekâ destekli SMS filtresi. Cihaz üstünde çalışan CoreML sınıflandırıcı; aramaları ve mesajları gizliliği koruyarak süzer — hiçbir veri cihazdan çıkmaz.",
      guardiRole: "Tasarım, iOS geliştirme, backend & App Store yayını — uçtan uca.",
      linkAppStore: "App Store", linkSite: "Tanıtım sitesi",
      masaTag: "iOS · Yakında App Store'da",
      masaDesc: "Düğün ve davetler için akıllı masa yerleşim planlayıcı. Özel yerleştirme algoritması konukları gruplara ve kurallara göre otomatik oturtur; cihaz-içi yapay zekâ “Sihirli Liste” konuk listesini otomatik içe aktarır. Kendi tasarım sistemi üzerine kuruludur.",
      masaRole: "Ürün, tasarım sistemi & iOS geliştirme.",
      chipOnDeviceAI: "Cihaz-içi AI",
      masaSoon: "Detaylı demo talep üzerine",
      ecceTag: "E-ticaret Platformu · Canlı",
      ecceDesc: "Uçtan uca e-ticaret platformu: Next.js vitrin ve yönetim paneli, Prisma + PostgreSQL backend. Google Shopping entegrasyonu, teknik SEO, Meta CAPI ve otomatik stok yönetimiyle üretimde çalışan tam bir mağaza.",
      ecceRole: "Full-stack geliştirme, altyapı & DevOps.",
      skillsTitle: "Yetenekler & Hizmetler",
      skillsStack: "TEKNOLOJİ YIĞINI",
      stackMobile: "iOS / Mobil",
      stackMobileVal: "Swift · SwiftUI · SwiftData · CoreML · Cihaz-içi AI",
      stackData: "Veritabanı & Kurumsal",
      stackDataVal: "Oracle PL/SQL · Veri-kalite motorları · Fintech",
      stackOps: "DevOps & Araçlar",
      skillsServices: "HİZMETLER",
      svc1: "Uçtan uca ürün geliştirme (web + mobil)",
      svc2: "iOS uygulama geliştirme & App Store yayını",
      svc3: "E-ticaret & backend sistemleri",
      svc4: "Veritabanı & fintech entegrasyonları",
      svc5: "Tasarım sistemleri & UI mühendisliği",
      aboutTitle: "Hakkımda",
      aboutLead: "Ben Doğancan. Fikri veritabanı şemasından, son kullanıcının elindeki cilalı arayüze taşımayı seviyorum.",
      aboutBody: "Türkiye'nin fintech sektöründe, Oracle PL/SQL üzerinde çalışan veri-kalite motorlarından App Store'da yayınlanan iOS uygulamalarına kadar geniş bir yelpazede ürün geliştiriyorum. İşin hem altyapı hem de tasarım tarafında rahatım. Guardi, MasaMasa ve Eccehome — bu uçtan uca yaklaşımın üç farklı örneği.",
      contactTitle: "Birlikte çalışalım.",
      contactLede: "Bir fikriniz mi var ya da ekibinize uçtan uca bir mühendis mi arıyorsunuz? Konuşalım.",
      copyHint: "kopyala", copyDone: "kopyalandı ✓",
      emailLink: "E-posta ↗",
      footerNote: "Türkiye'den tasarlandı & kodlandı"
    },
    en: {
      _title: "Doğancan Hırdavatçıoğlu — Full-stack Engineer",
      metaDesc: "Full-stack engineer building end-to-end products for Turkey's fintech sector — from database infrastructure to product design. Projects: Guardi, MasaMasa, and Eccehome.",
      navWork: "Work", navSkills: "Skills", navAbout: "About", navContact: "Contact",
      themeLabel: "Toggle theme", themeTitle: "Theme", menuLabel: "Menu",
      idxA: "SELECTED WORK",
      heroEyebrow: "Full-stack Engineer · Türkiye",
      heroTitle: "From the database to the interface,<br>from an idea to the <em>App&nbsp;Store</em> —<br>end-to-end products.",
      heroLede: "I'm a full-stack engineer building end-to-end solutions for Turkey's fintech sector — from database infrastructure to product design.",
      ctaWork: "View Projects", ctaContact: "Get in Touch", status: "Open to new projects",
      workTitle: "Selected Work",
      roleLabel: "ROLE",
      guardiTag: "iOS · Live on the App Store",
      guardiDesc: "A spam-call blocker and AI-powered SMS filter for iPhone. An on-device CoreML classifier screens calls and messages while preserving privacy — no data ever leaves the device.",
      guardiRole: "Design, iOS development, backend & App Store release — end to end.",
      linkAppStore: "App Store", linkSite: "Landing site",
      masaTag: "iOS · Coming soon to the App Store",
      masaDesc: "A smart seating-plan builder for weddings and events. A custom placement algorithm seats guests automatically by groups and rules; the on-device AI “Magic List” imports the guest list automatically. Built on its own design system.",
      masaRole: "Product, design system & iOS development.",
      chipOnDeviceAI: "On-device AI",
      masaSoon: "Detailed demo on request",
      ecceTag: "E-commerce Platform · Live",
      ecceDesc: "An end-to-end e-commerce platform: a Next.js storefront and admin panel on a Prisma + PostgreSQL backend. A full production store with Google Shopping integration, technical SEO, Meta CAPI, and automated inventory management.",
      ecceRole: "Full-stack development, infrastructure & DevOps.",
      skillsTitle: "Skills & Services",
      skillsStack: "TECH STACK",
      stackMobile: "iOS / Mobile",
      stackMobileVal: "Swift · SwiftUI · SwiftData · CoreML · On-device AI",
      stackData: "Database & Enterprise",
      stackDataVal: "Oracle PL/SQL · Data-quality engines · Fintech",
      stackOps: "DevOps & Tools",
      skillsServices: "SERVICES",
      svc1: "End-to-end product development (web + mobile)",
      svc2: "iOS app development & App Store release",
      svc3: "E-commerce & backend systems",
      svc4: "Database & fintech integrations",
      svc5: "Design systems & UI engineering",
      aboutTitle: "About",
      aboutLead: "I'm Doğancan. I love carrying an idea from the database schema all the way to a polished interface in the user's hands.",
      aboutBody: "In Turkey's fintech sector, I build products across a wide range — from data-quality engines running on Oracle PL/SQL to iOS apps published on the App Store. I'm at home on both the infrastructure and the design side. Guardi, MasaMasa, and Eccehome are three different examples of this end-to-end approach.",
      contactTitle: "Let's work together.",
      contactLede: "Have an idea, or looking for an end-to-end engineer for your team? Let's talk.",
      copyHint: "copy", copyDone: "copied ✓",
      emailLink: "Email ↗",
      footerNote: "Designed & coded in Türkiye"
    }
  };

  var STORAGE_LANG = "dh-lang";
  var STORAGE_THEME = "dh-theme";

  function applyLang(lang) {
    var dict = I18N[lang] || I18N.tr;
    document.documentElement.setAttribute("lang", lang);
    document.title = dict._title;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (dict[k] != null) el.textContent = dict[k];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-html");
      if (dict[k] != null) el.innerHTML = dict[k];
    });
    document.querySelectorAll("[data-i18n-meta]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-meta");
      if (dict[k] != null) el.setAttribute("content", dict[k]);
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-aria-label");
      if (dict[k] != null) el.setAttribute("aria-label", dict[k]);
    });
    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-title");
      if (dict[k] != null) el.setAttribute("title", dict[k]);
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
    });
    try { localStorage.setItem(STORAGE_LANG, lang); } catch (e) {}
  }

  function initLang() {
    var saved;
    try { saved = localStorage.getItem(STORAGE_LANG); } catch (e) {}
    var lang = saved || (navigator.language && navigator.language.slice(0, 2) === "en" ? "en" : "tr");
    applyLang(lang);
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () { applyLang(btn.getAttribute("data-lang")); });
    });
  }

  /* ---------- Theme ---------- */
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#16130e" : "#faf8f3");
    try { localStorage.setItem(STORAGE_THEME, theme); } catch (e) {}
  }

  function initTheme() {
    var saved;
    try { saved = localStorage.getItem(STORAGE_THEME); } catch (e) {}
    var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(saved || (prefersDark ? "dark" : "light"));

    var toggle = document.getElementById("themeToggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        applyTheme(next);
      });
    }
  }

  /* ---------- Reveal on scroll ---------- */
  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Header state + scroll progress ---------- */
  function initScroll() {
    var header = document.getElementById("siteHeader");
    var bar = document.getElementById("progressBar");
    var ticking = false;
    function update() {
      var y = window.scrollY || window.pageYOffset;
      if (header) header.classList.toggle("is-scrolled", y > 8);
      if (bar) {
        var h = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
      }
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  /* ---------- Mobile nav ---------- */
  function initNav() {
    var header = document.getElementById("siteHeader");
    var toggle = document.getElementById("navToggle");
    var nav = document.getElementById("primaryNav");
    if (!header || !toggle || !nav) return;
    function close() { header.classList.remove("nav-open"); toggle.setAttribute("aria-expanded", "false"); }
    function open() { header.classList.add("nav-open"); toggle.setAttribute("aria-expanded", "true"); }
    toggle.addEventListener("click", function () {
      if (header.classList.contains("nav-open")) close(); else open();
    });
    nav.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", close); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
    window.addEventListener("resize", function () { if (window.innerWidth > 860) close(); });
  }

  /* ---------- Copy email ---------- */
  function initCopy() {
    var btn = document.getElementById("emailCopy");
    if (!btn) return;
    var timer;
    function done() {
      btn.classList.add("copied");
      clearTimeout(timer);
      timer = setTimeout(function () { btn.classList.remove("copied"); }, 1800);
    }
    function fallback(text) {
      var ok = false;
      var ta = document.createElement("textarea");
      ta.value = text; ta.setAttribute("readonly", "");
      ta.style.position = "absolute"; ta.style.left = "-9999px";
      document.body.appendChild(ta); ta.select();
      try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
      document.body.removeChild(ta);
      return ok;
    }
    btn.addEventListener("click", function () {
      var email = btn.getAttribute("data-email");
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(done, function () { if (fallback(email)) done(); });
      } else if (fallback(email)) {
        done();
      }
    });
  }

  /* ---------- Boot ---------- */
  function boot() {
    initLang();
    initTheme();
    initReveal();
    initScroll();
    initNav();
    initCopy();
    var y = document.getElementById("year");
    if (y) y.textContent = String(new Date().getFullYear());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
