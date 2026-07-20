/* ============================================================
   Pixel-art portfolio — interactions (no dependencies, no build)
   ============================================================ */
(function () {
  "use strict";

  var I18N = {
    tr: {
      _title: "Doğancan Hırdavatçıoğlu — Full-stack Mühendis",
      metaDesc: "Full-stack mühendis Doğancan Hırdavatçıoğlu'nun pixel-art portfolyosu. Guardi, MasaMasa ve Eccehome projeleri.",
      navAbout: "HAKKIMDA", navWork: "PROJELER", navSkills: "YETENEKLER", navContact: "İLETİŞİM",
      menuLabel: "Menü",
      heroKicker: "> FULL-STACK ENGINEER",
      heroLede: "Veritabanı altyapısından ürün tasarımına, fikirden App Store'a — uçtan uca ürünler kuruyorum.",
      ctaTalk: "İLETİŞİME GEÇ", ctaWork: "PROJELER ▸",
      aboutTitle: "HAKKIMDA",
      aboutBody1: "Türkiye'nin fintech sektöründe, Oracle PL/SQL üzerinde çalışan veri-kalite motorlarından App Store'da yayınlanan iOS uygulamalarına kadar geniş bir yelpazede ürün geliştiriyorum.",
      aboutBody2: "İşin hem altyapı hem de tasarım tarafında rahatım; bir fikri veritabanı şemasından son kullanıcının elindeki cilalı arayüze taşımayı seviyorum. Guardi, MasaMasa ve Eccehome bu uçtan uca yaklaşımın üç örneği.",
      workTitle: "PROJELER",
      roleLabel: "ROL:",
      guardiMeta: "iOS · APP STORE", guardiRole: "Tasarım, iOS, backend & App Store yayını — uçtan uca.",
      guardiDesc: "iPhone için spam çağrı engelleyici ve yapay zekâ destekli SMS filtresi. Cihaz üstünde çalışan CoreML sınıflandırıcı; aramaları ve mesajları gizliliği koruyarak süzer.",
      linkSite: "TANITIM ↗",
      masaMeta: "iOS · SWIFTUI", masaRole: "Ürün, tasarım sistemi & iOS geliştirme.",
      masaDesc: "Düğün ve davetler için akıllı masa yerleşim planlayıcı. Özel yerleştirme algoritması konukları gruplara ve kurallara göre otomatik oturtur; cihaz-içi yapay zekâ konuk listesini otomatik içe aktarır. Kendi tasarım sistemi üzerine kuruludur.",
      chipAI: "Cihaz-içi AI",
      masaSoon: "DETAYLI DEMO TALEP ÜZERİNE",
      ecceMeta: "E-TİCARET · WEB", ecceRole: "Full-stack geliştirme, altyapı & DevOps.",
      ecceDesc: "Uçtan uca e-ticaret platformu: Next.js vitrin ve yönetim paneli, Prisma + PostgreSQL backend. Google Shopping entegrasyonu, teknik SEO, Meta CAPI ve otomatik stok yönetimi.",
      tagLive: "CANLI", tagSoon: "YAKINDA",
      skillsTitle: "YETENEKLER", servicesTitle: "// HİZMETLER",
      svc1: "Uçtan uca ürün geliştirme (web + mobil)",
      svc2: "iOS uygulama geliştirme & App Store yayını",
      svc3: "E-ticaret & backend sistemleri",
      svc4: "Veritabanı & fintech entegrasyonları",
      contactTitle: "İLETİŞİM",
      contactLede: "Bir fikriniz mi var ya da ekibinize uçtan uca bir mühendis mi arıyorsunuz? Yazın, en kısa sürede dönüş yaparım.",
      copyHint: "[KOPYALA]", copyDone: "[KOPYALANDI ✓]",
      fName: "AD", fEmail: "E-POSTA", fMsg: "MESAJ", fSend: "GÖNDER ▸",
      fNote: "E-posta uygulamanız hazır mesajla açılır.",
      fErr: "Lütfen tüm alanları doldurun.",
      fOpening: "E-posta uygulamanız açılıyor…",
      footerNote: "TÜRKİYE'DE ♥ İLE YAPILDI"
    },
    en: {
      _title: "Doğancan Hırdavatçıoğlu — Full-stack Engineer",
      metaDesc: "Pixel-art portfolio of full-stack engineer Doğancan Hırdavatçıoğlu. Projects: Guardi, MasaMasa, and Eccehome.",
      navAbout: "ABOUT", navWork: "PROJECTS", navSkills: "SKILLS", navContact: "CONTACT",
      menuLabel: "Menu",
      heroKicker: "> FULL-STACK ENGINEER",
      heroLede: "From database infrastructure to product design, from idea to App Store — I build end-to-end products.",
      ctaTalk: "LET'S TALK", ctaWork: "PROJECTS ▸",
      aboutTitle: "ABOUT ME",
      aboutBody1: "In Turkey's fintech sector, I build products across a wide range — from data-quality engines running on Oracle PL/SQL to iOS apps published on the App Store.",
      aboutBody2: "I'm at home on both the infrastructure and the design side; I love carrying an idea from the database schema all the way to a polished interface in the user's hands. Guardi, MasaMasa, and Eccehome are three examples of that end-to-end approach.",
      workTitle: "PROJECTS",
      roleLabel: "ROLE:",
      guardiMeta: "iOS · APP STORE", guardiRole: "Design, iOS, backend & App Store release — end to end.",
      guardiDesc: "A spam-call blocker and AI-powered SMS filter for iPhone. An on-device CoreML classifier screens calls and messages while preserving privacy.",
      linkSite: "LANDING ↗",
      masaMeta: "iOS · SWIFTUI", masaRole: "Product, design system & iOS development.",
      masaDesc: "A smart seating-plan builder for weddings and events. A custom placement algorithm seats guests automatically by groups and rules; the on-device AI imports the guest list automatically. Built on its own design system.",
      chipAI: "On-device AI",
      masaSoon: "DETAILED DEMO ON REQUEST",
      ecceMeta: "E-COMMERCE · WEB", ecceRole: "Full-stack development, infrastructure & DevOps.",
      ecceDesc: "An end-to-end e-commerce platform: a Next.js storefront and admin panel on a Prisma + PostgreSQL backend. Google Shopping, technical SEO, Meta CAPI, and automated inventory management.",
      tagLive: "LIVE", tagSoon: "SOON",
      skillsTitle: "SKILLS", servicesTitle: "// SERVICES",
      svc1: "End-to-end product development (web + mobile)",
      svc2: "iOS app development & App Store release",
      svc3: "E-commerce & backend systems",
      svc4: "Database & fintech integrations",
      contactTitle: "CONTACT",
      contactLede: "Have an idea, or looking for an end-to-end engineer for your team? Drop a line and I'll get back to you soon.",
      copyHint: "[COPY]", copyDone: "[COPIED ✓]",
      fName: "NAME", fEmail: "EMAIL", fMsg: "MESSAGE", fSend: "SEND ▸",
      fNote: "Opens your email app with a ready-to-send message.",
      fErr: "Please fill in all fields.",
      fOpening: "Opening your email app…",
      footerNote: "MADE WITH ♥ IN TÜRKİYE"
    }
  };

  var STORAGE_LANG = "dh-lang";
  var activeLang = "tr";

  function applyLang(lang) {
    var dict = I18N[lang] || I18N.tr;
    activeLang = I18N[lang] ? lang : "tr";
    document.documentElement.setAttribute("lang", activeLang);
    document.title = dict._title;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (dict[k] != null) el.textContent = dict[k];
    });
    document.querySelectorAll("[data-i18n-meta]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-meta");
      if (dict[k] != null) el.setAttribute("content", dict[k]);
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-aria-label");
      if (dict[k] != null) el.setAttribute("aria-label", dict[k]);
    });

    document.querySelectorAll(".lang__btn").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === activeLang ? "true" : "false");
    });
    try { localStorage.setItem(STORAGE_LANG, activeLang); } catch (e) {}
  }

  function initLang() {
    var saved;
    try { saved = localStorage.getItem(STORAGE_LANG); } catch (e) {}
    var lang = saved || (navigator.language && navigator.language.slice(0, 2) === "en" ? "en" : "tr");
    applyLang(lang);
    document.querySelectorAll(".lang__btn").forEach(function (btn) {
      btn.addEventListener("click", function () { applyLang(btn.getAttribute("data-lang")); });
    });
  }

  /* ---------- Mobile nav ---------- */
  function initNav() {
    var hdr = document.getElementById("hdr");
    var toggle = document.getElementById("navToggle");
    var nav = document.getElementById("primaryNav");
    if (!hdr || !toggle || !nav) return;
    function close() { hdr.classList.remove("nav-open"); toggle.setAttribute("aria-expanded", "false"); }
    toggle.addEventListener("click", function () {
      var open = hdr.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", close); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
    window.addEventListener("resize", function () { if (window.innerWidth > 860) close(); });
  }

  /* ---------- Projects accordion ---------- */
  function initProjects() {
    document.querySelectorAll(".prow__head").forEach(function (head) {
      head.addEventListener("click", function () {
        var row = head.closest(".prow");
        var open = row.classList.toggle("open");
        head.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
  }

  /* ---------- Reveal ---------- */
  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("in"); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Header border on scroll (subtle) ---------- */
  function initScroll() {
    var hdr = document.getElementById("hdr");
    if (!hdr) return;
    var ticking = false;
    function update() {
      hdr.style.borderBottomColor = (window.scrollY || 0) > 8 ? "var(--yellow-d)" : "var(--line)";
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
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
      } else if (fallback(email)) { done(); }
    });
  }

  /* ---------- Contact form -> mailto ---------- */
  function initForm() {
    var form = document.getElementById("contactForm");
    var note = document.getElementById("formNote");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var dict = I18N[activeLang] || I18N.tr;
      var name = form.elements["name"].value.trim();
      var email = form.elements["email"].value.trim();
      var msg = form.elements["message"].value.trim();
      if (!name || !email || !msg) {
        if (note) { note.textContent = dict.fErr; note.classList.add("err"); }
        return;
      }
      if (note) { note.textContent = dict.fOpening; note.classList.remove("err"); }
      var subject = "Portfolyo — " + name;
      var body = msg + "\n\n— " + name + " (" + email + ")";
      window.location.href = "mailto:dhirdavatcioglu@gmail.com?subject=" +
        encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    });
  }

  /* ---------- Pixel-art avatar ---------- */
  function drawAvatar() {
    var canvas = document.getElementById("avatar");
    if (!canvas || !canvas.getContext) return;
    var PAL = {
      T: "#2bb3c0", o: "#1f96a1", F: "#cbb892",
      H: "#33241a", S: "#e7b088", s: "#cf9066",
      C: "#14141d", Y: "#ffe70a", G: "#0e0e13", W: "#eef0f2"
    };
    var ART = [
      "                ",
      "  TTTTTTTTTTTT  ",
      "  TTTTHHHHTTTT  ",
      "  TTTHHHHHHTTT  ",
      "  TTHHHHHHHHTT  ",
      "  TTHSSSSSSHTT  ",
      "  TTHSSSSSSHTT  ",
      "  TTHGGGGGGHTT  ",
      "  TTHGWGGWGHTT  ",
      "  TTHSSSSSSHTT  ",
      "  TTHHSSSSHHTT  ",
      "  TTTHHSSHHTTT  ",
      "  TTTTHHHHTTTT  ",
      "  TTYCCCCCCYTT  ",
      "  TCCCCCCCCCCT  ",
      "  ToCCCYYCCCoT  ",
      "  FFFFFFFFFFFF  ",
      "  FFFFFFFFFFFF  "
    ];
    var ctx = canvas.getContext("2d");
    var cols = 16, rows = ART.length;
    var scale = Math.floor(canvas.width / cols); // 192/16 = 12
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var r = 0; r < rows; r++) {
      var line = ART[r];
      for (var c = 0; c < cols; c++) {
        var col = PAL[line.charAt(c)];
        if (col) { ctx.fillStyle = col; ctx.fillRect(c * scale, r * scale, scale, scale); }
      }
    }
  }

  /* ---------- Boot ---------- */
  function boot() {
    initLang();
    initNav();
    initProjects();
    initReveal();
    initScroll();
    initCopy();
    initForm();
    drawAvatar();
    var y = document.getElementById("year");
    if (y) y.textContent = String(new Date().getFullYear());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else { boot(); }
})();
