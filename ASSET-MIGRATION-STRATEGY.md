# Asset-On-Demand Migration Strategy

This document establishes the strategy for migrating assets from the original HTML template
(`quarter-rtl/`) into the Next.js project (`public/`) **only when a page/component actually
requires them**.

## Core Rules

1. **Never copy all assets at once.** Copy only what the currently-migrated page/component needs.
2. **Never copy unused assets** (images, CSS, JS, fonts, media) into `public/`.
3. **Keep `quarter-rtl/` unchanged.** It remains the source of truth for future migrations.
4. **Copy on demand.** For each page/component migration, inspect the HTML, check `public/`,
   and copy only missing required assets.
5. **Preserve filenames & folder structure** as much as practical so original paths map easily.
6. **Do not optimize/rename/resize/modify** assets unless explicitly required.
7. **Do not migrate assets for future pages in advance.**

## Tailwind 4 Preferred

The original Quarter template was built with **Tailwind CSS v3.4.4**, but the Next.js project
uses **Tailwind CSS v4**. During migration:

- Prefer **Tailwind CSS v4 utilities and `@theme` configuration** over copying or recreating
  large amounts of raw/compiled CSS.
- When an existing template style can be represented cleanly using Tailwind v4, implement it
  using Tailwind v4.
- Preserve the original visual design and spacing exactly as much as practical.
- Preserve existing Tailwind class names when they are already compatible with Tailwind v4.
- Convert Tailwind v3 custom configuration/theme values into the appropriate Tailwind v4
  `@theme` tokens where needed.
- **Do NOT blindly copy the compiled `style.css`** into the Next.js project just because the
  original template depends on it.
- **Do NOT introduce unnecessary custom CSS** when an equivalent Tailwind v4 utility exists.
- Use raw CSS only when:
  1. Tailwind v4 cannot reasonably reproduce the behavior,
  2. the style is a complex third-party/plugin style,
  3. an external library requires its own CSS,
  4. or reproducing the exact template behavior requires a small custom CSS rule.

### Priority

Use this priority when migrating styles:

1. Existing Tailwind v4 utility
2. Tailwind v4 `@theme` token / custom utility
3. Small custom CSS rule
4. Original/third-party CSS only when necessary

> **Important:** The goal is **NOT** to preserve the original CSS implementation. The goal is to
> preserve the **original visual result/design** while using the modern Tailwind v4 architecture
> of the Next.js project.

## Target Structure

```text
public/
├── images/      # from quarter-rtl/assets/img/**
├── fonts/       # from quarter-rtl/assets/fonts/** (icon fonts: flaticon, icomoon, lightcase)
├── webfonts/    # from quarter-rtl/assets/webfonts/** (Font Awesome)
├── css/         # third-party CSS only when a component depends on it
└── media/       # from quarter-rtl/assets/media/** (mp4 videos)
```

## Source Inventory (quarter-rtl/assets)

### CSS (`assets/css/`)
| File | Purpose | Migrate when |
|------|---------|--------------|
| `style.css` | Main compiled Tailwind v3 + custom theme + RTL overrides | Always (core) |
| `font-icons.css` | Icon fonts (flaticon, icomoon, Font Awesome) | When icons used |
| `animate.css` | Animation library | When animations used |
| `glightbox.css` | Lightbox | When gallery/lightbox used |
| `lightcase.css` | Lightbox | When lightbox used |
| `nice-select2.css` | Custom select | When select dropdowns used |
| `swiper-bundle.min.css` | Swiper slider | When sliders used |
| `ui-widget.css` | UI widgets | When widgets used |

### JS (`assets/js/`)
| File | Purpose |
|------|---------|
| `main.js`, `silder.js`, `accordion.js`, `tabs.js`, `modal.js`, `drawer.js`, `search.js`, `filter.js`, `count.js`, `countdown.js`, `counterup.js`, `nice_checkbox.js`, `nice-select2.js`, `scrollUp.js`, `service.js`, `smoothScroll.js`, `stickyHeader.js`, `glightbox.min.js`, `isotope.pkgd.min.js`, `maplace.js`, `maplace-active.js`, `swiper-bundle.min.js`, `ui-widget.js` | Migrate individually per component need |

### Fonts (`assets/fonts/`)
- `flaticon.*` (eot/svg/ttf/woff/woff2) — icon font
- `icomoon.*` (eot/svg/ttf/woff) — icon font
- `lightcase.*` (eot/svg/ttf/woff) — lightbox icon font
- `new-folder/` — contains duplicate/legacy copies (custom-Fonts-For-Use, custom-Fonts-For-Use-2).
  **Do not migrate these duplicates** unless a specific page references them.

### Webfonts (`assets/webfonts/`) — Font Awesome 6
- `fa-brands-400.*`, `fa-regular-400.*`, `fa-solid-900.*`, `fa-v4compatibility.*` (ttf/woff2)

### Media (`assets/media/`)
- `1.mp4`, `2.mp4`, `3.mp4` — migrate only when a page uses video.

### Images (`assets/img/`)
| Subfolder | Contents |
|-----------|----------|
| `banner/` | Banner images |
| `bg/` | Background images |
| `blog/` (+ `blog-details/`) | Blog images |
| `brand-logo/` | Brand/client logos |
| `effect/` | Decorative effects |
| `gallery/` | Gallery images |
| `home-demos/` | Homepage demo thumbnails |
| `icons/` (+ `icon-img/`, `svg/`, `svg/2/`) | Icons |
| `img-slide/` | Slider images |
| `neighbour/` | Neighbourhood images |
| `others/` | Misc images |
| `product/`, `product-2/`, `product-3/` | Product images |
| `service/` | Service images |
| `slider/` | Hero slider images |
| `team/` | Team images |
| `testimonial/` | Testimonial images |
| `logo.png`, `logo-2.png`, `favicon.png` | Brand assets |

## Design System (for Tailwind v4 port)

The template uses **Tailwind v3.4.4** with custom theme extensions compiled into `style.css`.
The Next.js project uses **Tailwind v4** (`@theme`). When migrating, reproduce these tokens
in `app/globals.css` via `@theme`:

### Colors
| Token | Value |
|-------|-------|
| `primary-color` | `#000000` |
| `secondary-color` | `#ff5a3c` |
| `secondary-color-2` | `#cb3421` |
| `primary-color-3` | `#133236` |
| `heading-color` | `#071c1f` |
| `paragraph-color` | `#5c727d` |
| `color-1` | `#8cb2b2` |
| `color-7` | `#212529` |
| `section-bg-1` | `#f2f6f7` |
| `section-bg-2` | `#171b2a` |
| `section-bg-5` | `#fff2f0` |
| `section-bg-6` | `#0b2c3d` |
| `section-bg-7` | `#282b38` |
| `table-bg` | `#f7f8fa` |
| `border-color-1` | `#e5eaee` |
| `border-color-3` | `#5c617f` |
| `border-color-8` | `#f6f6f6` |
| `border-color-9` | `#e4ecf2` |
| `border-color-10` | `#ebecec` |
| `border-color-11` | `#ededed` |
| `border-color-12` | `#e1e6ff` |
| `border-color-13` | `#f1f8ff` |
| `border-color-14` | `#576466` |
| `border-color-15` | `#f4faff` |
| `border-color-16` | `#93959e` |
| `border-color-17` | `#dee2e6` |
| `border-color-18` | `#203336` |
| `border-dashed` | `#dddddd` |
| `border-primary` | `#eeeeee` |
| `white-4` | `#e6ecf0` |
| `white-5` | `#f0f4f7` |
| `white-6` | `#f1f1f1` |
| `white-7` | `#f7f7f7` |
| `green` | `#77c720` |
| `ratings` | `#ffb800` |

### Fonts
| Token | Value |
|-------|-------|
| `heading-font` | `"Poppins", sans-serif` |
| `body-font` | `"Nunito Sans", sans-serif` |

### Shadows
| Token | Value |
|-------|-------|
| `box-shadow-1` | `0 16px 32px 0 rgba(7,28,31,0.1)` |
| `box-shadow-2` | `0 0 4px rgba(0,0,0,0.1)` |
| `box-shadow-3` | `0 1px 6px 0 rgba(32,33,36,.28)` |
| `box-shadow-4` | `0 5px 20px 0 rgba(23,44,82,0.1)` |
| `box-shadow-5` | `0 8px 16px 0 rgba(93,93,93,0.1)` |

### Z-index
| Token | Value |
|-------|-------|
| `z-1` | `1` |
| `z-10` | `10` |
| `z-20` | `20` |
| `z-xsmall` | `99999` |
| `z-small` | `999999` |
| `z-high` | `99999999` |
| `z-xl` | `999999999` |
| `z-xxl` | `9999999999` |

### Custom spacing (pixel-based)
The template uses arbitrary pixel spacing utilities such as `mb-10px`, `gap-15px`, `pt-100px`,
`w-140px`, `h-350px`, `leading-22px`, `max-w-350px`, `text-13px`, `rounded-10px`, `border-3px`,
`w-dropdown` (14.375rem). These must be reproduced in Tailwind v4 `@theme` spacing/width/height
extensions as needed per component.

### RTL
The template is RTL-first. `:root` defines position/transform CSS variables that are flipped
under `[dir="rtl"]`. The Next.js layout must set `dir="rtl"` and `lang="ar"` (or appropriate)
and reproduce these variable flips.

## Per-Page Migration Checklist

For every page/component migration, explicitly identify:

1. **Assets required** — list every asset the page references (from HTML `src`, `href`, CSS `url()`).
2. **Assets already migrated** — check `public/` first; skip if present.
3. **Assets to copy** — only the missing required ones.
4. **Original → Next.js path mapping** — e.g.:

```text
quarter-rtl/assets/img/logo.png
→ public/images/logo.png

quarter-rtl/assets/fonts/flaticon.woff2
→ public/fonts/flaticon.woff2

quarter-rtl/assets/webfonts/fa-solid-900.woff2
→ public/webfonts/fa-solid-900.woff2

quarter-rtl/assets/media/1.mp4
→ public/media/1.mp4
```

## Path Mapping Convention

| Original (quarter-rtl/assets/) | Next.js (public/) |
|--------------------------------|-------------------|
| `img/**` | `images/**` |
| `fonts/**` | `fonts/**` |
| `webfonts/**` | `webfonts/**` |
| `css/**` | `css/**` |
| `media/**` | `media/**` |

Subfolder names are preserved (e.g. `img/banner/1.jpg` → `images/banner/1.jpg`).

## Final Cleanup / Migration Completion

`quarter-rtl/` is the **original source template** and must remain **untouched** for the entire
duration of the migration. It is the source of truth for every asset, style, and script that is
copied on demand into the Next.js project.

### Deletion is a deliberate manual step — NOT automatic

- **Do NOT delete `quarter-rtl/` now.**
- **Do NOT delete `quarter-rtl/` during any migration step.**
- `quarter-rtl/` must be manually deleted **ONLY after** the entire HTML → Next.js migration is
  fully completed **and** verified.

### Required verification before deletion

Before `quarter-rtl/` may be deleted, confirm **all** of the following:

- [ ] All required pages have been migrated to Next.js.
- [ ] All required assets have been migrated into `public/`.
- [ ] All required styles have been migrated (Tailwind v4 `@theme` tokens / component CSS).
- [ ] All required JavaScript interactions have React/Next.js equivalents.
- [ ] All routes work correctly.
- [ ] No migrated code still depends on files inside `quarter-rtl/`.
- [ ] Production `next build` succeeds.

### Completion rule

- The migration is **NOT considered complete** until this final cleanup has been performed.
- The deletion of `quarter-rtl/` is a **manual final cleanup step**, not an automatic migration step.

## Current Status

- **No assets have been migrated yet.** `public/` contains only the default Next.js SVGs
  (`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`).
- `quarter-rtl/` is untouched.
- This strategy is ready to be applied on a per-page basis.
