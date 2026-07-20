/*
   Pixel-art portfolio: interactions (no dependencies, no build)
*/
(function () {
  "use strict";

  var I18N = {
    tr: {
      _title: "Doğancan Hırdavatçıoğlu | Full-stack Mühendis",
      metaDesc: "Full-stack mühendis Doğancan Hırdavatçıoğlu'nun pixel-art portfolyosu. Guardi, MasaMasa ve Eccehome projeleri.",
      navAbout: "HAKKIMDA", navExp: "DENEYİM", navWork: "PROJELER", navSkills: "YETENEKLER", navContact: "İLETİŞİM",
      menuLabel: "Menü",
      heroKicker: "> FULL-STACK ENGINEER",
      heroLede: "Veritabanı altyapısından ürün tasarımına, fikirden App Store'a kadar uçtan uca ürünler kuruyorum.",
      ctaTalk: "İLETİŞİME GEÇ", ctaWork: "PROJELER",
      aboutTitle: "HAKKIMDA",
      aboutBody1: "İzmir merkezli bir yazılım mühendisiyim. Kurumsal tarafta ödeme sistemlerini ve web servislerini PL/SQL, .NET ve Oracle APEX ile geliştiriyor; bir yandan da fikirden App Store'a kadar kendi ürünlerimi çıkarıyorum.",
      aboutBody2: "SwiftUI ile iOS, Node.js ve TypeScript ile backend, React ile arayüz geliştiriyorum. Veritabanı şemasından son kullanıcının elindeki cilalı arayüze kadar işin her katmanında rahatım. Guardi, MasaMasa ve Eccehome bu uçtan uca yaklaşımın üç örneği.",
      expTitle: "DENEYİM",
      exp1Co: "Anadolu Hayat Emeklilik", exp1Role: "Yazılım Uzmanı", exp1Date: "2023 - GÜNÜMÜZ",
      exp1b1: "Ödeme sistemlerini PL/SQL ve .NET ile geliştirdim; sistem verimliliğini ve güvenilirliğini artırdım.",
      exp1b2: "Çeşitli projeler için web servisleri geliştirdim, işlevselliği ve kullanıcı deneyimini iyileştirdim.",
      exp1b3: "İş birimleri için teknik çözümler ürettim; muhasebe sistemlerindeki hataları çözdüm.",
      exp2Co: "Simply Deliver", exp2Role: "Yazılım Mühendisi", exp2Date: "2021 - 2023",
      exp2b1: "Oracle APEX ile Demiryolu Taşıma Yönetim Sistemi geliştirdim.",
      exp2b2: "Müşteri entegrasyonlarını tasarlayıp hayata geçirdim.",
      exp2b3: "6 kişilik çevik ekibe liderlik ettim; Alman ürün sahipleriyle çalıştım.",
      exp2b4: "Bootcamp'lerde Oracle APEX, SQL ve PL/SQL üzerine mentorluk yaptım.",
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
      skillsTitle: "YETENEKLER", servicesTitle: "// HİZMETLER",
      svc1: "Uçtan uca ürün geliştirme (web + mobil)",
      svc2: "iOS uygulama geliştirme ve App Store yayını",
      svc3: "Kurumsal backend, ödeme sistemleri ve entegrasyonlar",
      svc4: "Veritabanı geliştirme (Oracle PL/SQL, APEX, PostgreSQL)",
      contactTitle: "İLETİŞİM",
      contactLede: "Bir fikriniz mi var ya da ekibinize uçtan uca bir mühendis mi arıyorsunuz? Yazın, en kısa sürede dönüş yaparım.",
      copyHint: "[KOPYALA]", copyDone: "[KOPYALANDI]",
      fName: "AD", fEmail: "E-POSTA", fMsg: "MESAJ", fSend: "GÖNDER",
      fNote: "E-posta uygulamanız hazır mesajla açılır.",
      fErr: "Lütfen tüm alanları doldurun.",
      fOpening: "E-posta uygulamanız açılıyor...",
      footerNote: "TÜRKİYE'DE ♥ İLE YAPILDI"
    },
    en: {
      _title: "Doğancan Hırdavatçıoğlu | Full-stack Engineer",
      metaDesc: "Pixel-art portfolio of full-stack engineer Doğancan Hırdavatçıoğlu. Projects: Guardi, MasaMasa, and Eccehome.",
      navAbout: "ABOUT", navExp: "EXPERIENCE", navWork: "PROJECTS", navSkills: "SKILLS", navContact: "CONTACT",
      menuLabel: "Menu",
      heroKicker: "> FULL-STACK ENGINEER",
      heroLede: "From database infrastructure to product design, and from an idea all the way to the App Store. I build end-to-end products.",
      ctaTalk: "LET'S TALK", ctaWork: "PROJECTS",
      aboutTitle: "ABOUT ME",
      aboutBody1: "I'm a software engineer based in İzmir. On the enterprise side I build payment systems and web services with PL/SQL, .NET, and Oracle APEX; on the side I ship my own products from idea to App Store.",
      aboutBody2: "I build iOS with SwiftUI, backends with Node.js and TypeScript, and interfaces with React. I'm comfortable at every layer, from the database schema to the polished interface in the user's hands. Guardi, MasaMasa, and Eccehome are three examples of that end-to-end approach.",
      expTitle: "EXPERIENCE",
      exp1Co: "Anadolu Hayat Emeklilik", exp1Role: "Software Specialist", exp1Date: "2023 - PRESENT",
      exp1b1: "Built payment systems with PL/SQL and .NET, improving efficiency and reliability.",
      exp1b2: "Developed web services across multiple projects, improving functionality and user experience.",
      exp1b3: "Delivered technical solutions for business units and resolved issues in accounting systems.",
      exp2Co: "Simply Deliver", exp2Role: "Software Engineer", exp2Date: "2021 - 2023",
      exp2b1: "Built a Rail Transport Management System with Oracle APEX.",
      exp2b2: "Designed and implemented customer integrations.",
      exp2b3: "Led an agile team of 6 and worked with German product owners.",
      exp2b4: "Mentored bootcamps on Oracle APEX, SQL, and PL/SQL.",
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
      skillsTitle: "SKILLS", servicesTitle: "// SERVICES",
      svc1: "End-to-end product development (web + mobile)",
      svc2: "iOS app development and App Store release",
      svc3: "Enterprise backend, payment systems, and integrations",
      svc4: "Database development (Oracle PL/SQL, APEX, PostgreSQL)",
      contactTitle: "CONTACT",
      contactLede: "Have an idea, or looking for an end-to-end engineer for your team? Drop a line and I'll get back to you soon.",
      copyHint: "[COPY]", copyDone: "[COPIED]",
      fName: "NAME", fEmail: "EMAIL", fMsg: "MESSAGE", fSend: "SEND",
      fNote: "Opens your email app with a ready-to-send message.",
      fErr: "Please fill in all fields.",
      fOpening: "Opening your email app...",
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
