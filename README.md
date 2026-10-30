# FahriYOS.EDU

Сайт сопровождения поступления в университеты Турции: подготовка к TR-YÖS, подача документов, денклик, ВНЖ, жильё и переезд.

Собран на [Astro](https://astro.build) — статический сайт без бэкенда. Заявки уходят в Telegram (@lanperor) готовым текстом.

## Запуск

```bash
npm install
npm run dev      # http://localhost:4321/halil/
npm run build    # готовый сайт в dist/
```

## Где что править

| Что | Файл |
| --- | --- |
| Цены, пакеты, разовые услуги | `src/data/packages.ts` |
| Шаги, услуги, темы TR-YÖS | `src/data/content.ts` |
| Вопросы и ответы FAQ | `src/data/faq.ts` |
| Telegram, соцсети, меню | `src/data/site.ts` |
| Цвета и шрифты | `src/styles/global.css` (`:root`) |
| Картинки | `public/assets/` |

## Публикация

Workflow `.github/workflows/deploy.yml` публикует сайт на GitHub Pages при пуше в `main`.
Один раз включите: Settings → Pages → Source: **GitHub Actions**.
Адрес: `https://tofass.github.io/halil/`. Если репозиторий или домен другой — поменяйте `site` и `base` в `astro.config.mjs`.
