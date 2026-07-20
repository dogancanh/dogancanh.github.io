# dogancanh.github.io

Doğancan Hırdavatçıoğlu'nun kişisel portfolyo sitesi. Full-stack Engineer.

**Canlı:** https://dogancanh.github.io

Öne çıkan projeler: **Guardi** (iOS spam/SMS filtresi, App Store'da), **MasaMasa** (SwiftUI masa planlayıcı, yakında), **Eccehome** (Next.js/Prisma e-ticaret, canlı).

## Teknik

Framework yok — statik site. Tek `index.html` + `styles.css` + `main.js`. Build adımı gerektirmez, GitHub Pages'ten `main` dalının kökünden yayınlanır.

- İki dilli (TR/EN), tercih `localStorage`'da tutulur
- Açık/koyu tema (sistem tercihine uyar + elle geçiş)
- Erişilebilir, responsive, SEO/OG etiketleri

## Geliştirme

Yerelde açmak için dosyayı doğrudan tarayıcıda açmak yeterli; ya da:

```bash
python3 -m http.server 8000   # http://localhost:8000
```

## İçerik güncelleme

- Metinler: `main.js` içindeki `I18N` sözlüğü (tr/en)
- Projeler: `index.html` `<ol class="projects">`
- Renk/tipografi: `styles.css` en üstteki `:root` değişkenleri

Değişiklikten sonra `git push` — GitHub Pages otomatik yeniden yayınlar.
