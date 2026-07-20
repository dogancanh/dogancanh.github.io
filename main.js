/*
   Pixel-art portfolio: interactions (no dependencies, no build)
*/
(function () {
  "use strict";

  var I18N = {
    tr: {
      _title: "Doğancan Hırdavatçıoğlu | Full-stack Mühendis",
      metaDesc: "Full-stack mühendis Doğancan Hırdavatçıoğlu'nun pixel-art portfolyosu. Guardi, MasaMasa ve EcceHome projeleri.",
      navAbout: "HAKKIMDA", navWork: "PROJELER", navSkills: "YETENEKLER", navContact: "İLETİŞİM",
      menuLabel: "Menü",
      heroKicker: "> FULL-STACK ENGINEER",
      heroLede: "Ödeme sistemleri ve web servislerinden mobil uygulamalara kadar yazılım çözümleri geliştiriyorum.",
      ctaTalk: "İLETİŞİME GEÇ", ctaWork: "PROJELER",
      aboutTitle: "HAKKIMDA",
      aboutBody1: "İzmir merkezli bir yazılım mühendisiyim. Ödeme sistemleri ve web servisleri alanında PL/SQL ve .NET ile çalışıyorum; kurumsal projelerde çözüm geliştirme ve müşteri entegrasyonları konularında deneyim sahibiyim.",
      aboutBody2: "Kurumsal geliştirmenin yanı sıra iOS (SwiftUI), backend (Node.js) ve web (React) tarafında kişisel projeler geliştiriyorum. Guardi, MasaMasa ve EcceHome bu projelerden bazıları.",
      workTitle: "PROJELER",
      roleLabel: "ROL:",
      guardiMeta: "iOS · APP STORE", guardiRole: "Tasarım, iOS, backend ve App Store yayını dahil hepsi.",
      guardiDesc: "iPhone için spam çağrı engelleyici ve yapay zekâ destekli SMS filtresi. Cihaz üstünde çalışan CoreML sınıflandırıcı; aramaları ve mesajları gizliliği koruyarak süzer.",
      linkSite: "TANITIM ↗",
      masaMeta: "iOS · SWIFTUI", masaRole: "Ürün, tasarım sistemi ve iOS geliştirme.",
      masaDesc: "Düğün ve davetler için akıllı masa yerleşim planlayıcı. Özel yerleştirme algoritması konukları gruplara ve kurallara göre otomatik oturtur; cihaz-içi yapay zekâ konuk listesini otomatik içe aktarır. Kendi tasarım sistemi üzerine kuruludur.",
      chipAI: "Cihaz-içi AI",
      masaSoon: "DETAYLI DEMO TALEP ÜZERİNE",
      ecceMeta: "E-TİCARET · WEB", ecceRole: "Full-stack geliştirme, altyapı ve DevOps.",
      ecceDesc: "Uçtan uca e-ticaret platformu: Next.js vitrin ve yönetim paneli, Prisma ve PostgreSQL backend. Google Shopping entegrasyonu, teknik SEO, Meta CAPI ve otomatik stok yönetimi.",
      tagLive: "CANLI", tagSoon: "YAKINDA",
      skillsTitle: "YETENEKLER", servicesTitle: "HİZMETLER",
      svc1: "Uçtan uca ürün geliştirme (web + mobil)",
      svc2: "iOS uygulama geliştirme ve App Store yayını",
      svc3: "Kurumsal backend, ödeme sistemleri ve entegrasyonlar",
      svc4: "Veritabanı geliştirme (Oracle PL/SQL, PostgreSQL)",
      contactTitle: "İLETİŞİM",
      contactLede: "Bir proje fikriniz mi var ya da ekibinize bir yazılım mühendisi mi arıyorsunuz? Bana yazabilirsiniz.",
      copyHint: "[KOPYALA]", copyDone: "[KOPYALANDI]",
      fName: "AD", fEmail: "E-POSTA", fMsg: "MESAJ", fSend: "GÖNDER",
      fNote: "E-posta uygulamanız hazır mesajla açılır.",
      fErr: "Lütfen tüm alanları doldurun.",
      fOpening: "E-posta uygulamanız açılıyor...",
      footerNote: "İZMİR, TÜRKİYE"
    },
    en: {
      _title: "Doğancan Hırdavatçıoğlu | Full-stack Engineer",
      metaDesc: "Pixel-art portfolio of full-stack engineer Doğancan Hırdavatçıoğlu. Projects: Guardi, MasaMasa, and EcceHome.",
      navAbout: "ABOUT", navWork: "PROJECTS", navSkills: "SKILLS", navContact: "CONTACT",
      menuLabel: "Menu",
      heroKicker: "> FULL-STACK ENGINEER",
      heroLede: "I build software solutions across payment systems, web services, and mobile applications.",
      ctaTalk: "LET'S TALK", ctaWork: "PROJECTS",
      aboutTitle: "ABOUT ME",
      aboutBody1: "I'm a software engineer based in İzmir, working on payment systems and web services with PL/SQL and .NET. I have experience in solution development and customer integrations on enterprise projects.",
      aboutBody2: "Alongside enterprise development, I work on personal projects across iOS (SwiftUI), backend (Node.js), and web (React). Guardi, MasaMasa, and EcceHome are some of them.",
      workTitle: "PROJECTS",
      roleLabel: "ROLE:",
      guardiMeta: "iOS · APP STORE", guardiRole: "Design, iOS, backend, and the App Store release. All of it.",
      guardiDesc: "A spam-call blocker and AI-powered SMS filter for iPhone. An on-device CoreML classifier screens calls and messages while preserving privacy.",
      linkSite: "LANDING ↗",
      masaMeta: "iOS · SWIFTUI", masaRole: "Product, design system, and iOS development.",
      masaDesc: "A smart seating-plan builder for weddings and events. A custom placement algorithm seats guests automatically by groups and rules; the on-device AI imports the guest list automatically. Built on its own design system.",
      chipAI: "On-device AI",
      masaSoon: "DETAILED DEMO ON REQUEST",
      ecceMeta: "E-COMMERCE · WEB", ecceRole: "Full-stack development, infrastructure, and DevOps.",
      ecceDesc: "An end-to-end e-commerce platform: a Next.js storefront and admin panel on a Prisma and PostgreSQL backend. Google Shopping, technical SEO, Meta CAPI, and automated inventory management.",
      tagLive: "LIVE", tagSoon: "SOON",
      skillsTitle: "SKILLS", servicesTitle: "SERVICES",
      svc1: "End-to-end product development (web + mobile)",
      svc2: "iOS app development and App Store release",
      svc3: "Enterprise backend, payment systems, and integrations",
      svc4: "Database development (Oracle PL/SQL, PostgreSQL)",
      contactTitle: "CONTACT",
      contactLede: "Have a project in mind, or looking for a software engineer for your team? Feel free to reach out.",
      copyHint: "[COPY]", copyDone: "[COPIED]",
      fName: "NAME", fEmail: "EMAIL", fMsg: "MESSAGE", fSend: "SEND",
      fNote: "Opens your email app with a ready-to-send message.",
      fErr: "Please fill in all fields.",
      fOpening: "Opening your email app...",
      footerNote: "İZMİR, TÜRKİYE"
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

  function initProjects() {
    document.querySelectorAll(".prow__head").forEach(function (head) {
      head.addEventListener("click", function () {
        var row = head.closest(".prow");
        var open = row.classList.toggle("open");
        head.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
  }

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
      var subject = "Portfolyo: " + name;
      var body = msg + "\n\n" + name + " (" + email + ")";
      window.location.href = "mailto:dhirdavatcioglu@gmail.com?subject=" +
        encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    });
  }

  function boot() {
    initLang();
    initNav();
    initProjects();
    initReveal();
    initScroll();
    initCopy();
    initForm();
    var y = document.getElementById("year");
    if (y) y.textContent = String(new Date().getFullYear());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else { boot(); }
})();
