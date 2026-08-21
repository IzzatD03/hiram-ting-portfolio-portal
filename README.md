# Prof. Dr. Hiram Ting — Academic Portfolio

Production-ready academic portfolio built with Next.js 16, React 19 and TypeScript.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production checks

```bash
npm run lint
npm run build
npm start
```

The app has no required environment variables.

## Cloudflare Workers

The production Worker is named `hiramting-portfolio`. Preview and deploy it with:

```bash
npm run preview
npm run deploy
```

`npm run build` creates both the Next.js production output and the compiled OpenNext Worker. The build automatically stages the editable files from `content/` into the Worker's read-only bundle before OpenNext packages the application. Keep `nodejs_compat` enabled and deploy through the checked-in `wrangler.jsonc` configuration.

## Routes

- `/` — home
- `/profile` — biography, appointments and editorial roles
- `/research` — research domains, methods and programmes
- `/publications` — searchable and filterable publication catalogue
- `/team` — research network and opportunities
- `/impact` — applied projects and engagement events
- `/news` — paginated media archive
- `/cv` — CV summary and PDF download

Editable content lives only in `content/`. Canonical public images and PDF files live in `public/uploads/`. See `docs/CONTENT_UPDATE_GUIDE.md` before making content changes.
