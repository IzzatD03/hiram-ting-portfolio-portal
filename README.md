# Prof. Dr. Hiram Ting — Academic Portfolio

Official academic portfolio website for **Prof. Dr. Hiram Ting**.

This repository contains the redesigned production application built with **Next.js**, **React**, and **TypeScript**, with support for deployment to **Cloudflare Workers through OpenNext**.

The current implementation replaces the previous Vite/Lovable-based portfolio while preserving the website's academic content and public-facing purpose.

---

## Tech Stack

* **Next.js 16**
* **React 19**
* **TypeScript**
* **OpenNext for Cloudflare**
* **Cloudflare Workers**
* **Wrangler**
* **Lucide React**
* **Zod**
* **ESLint**

---

## Project Structure

```text
.
├── app/                  # Next.js App Router pages and layouts
├── components/           # Reusable UI components
├── content/              # Editable structured website content
├── docs/                 # Project and content documentation
├── public/
│   └── uploads/          # Public images, documents, CV and media assets
├── scripts/              # Validation and build helper scripts
│
├── next.config.ts
├── open-next.config.ts
├── wrangler.jsonc
├── tsconfig.json
├── package.json
└── package-lock.json
```

### Content source

Editable website data should be maintained primarily in:

```text
content/
```

Public static assets should be stored in:

```text
public/uploads/
```

Do not hard-code academic content directly inside UI components unless it is structural or interface-specific.

---

## Requirements

Recommended environment:

* **Node.js** compatible with the version specified in `.nvmrc`
* **npm**
* Git

If `nvm` is available:

```bash
nvm use
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/IzzatD03/hiram-ting-portfolio-portal.git
cd hiram-ting-portfolio-portal
```

Install dependencies:

```bash
npm ci
```

For development environments where the lockfile is being intentionally updated:

```bash
npm install
```

---

## Local Development

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

---

## Available Scripts

### Development

```bash
npm run dev
```

Starts the Next.js development server.

### Lint

```bash
npm run lint
```

Runs ESLint across the project.

### Type checking

```bash
npm run typecheck
```

Runs TypeScript validation without generating build output.

### Validate content

```bash
npm run validate:content
```

Validates structured content files.

### Validate assets

```bash
npm run check:assets
```

Checks referenced public assets and content dependencies.

### Production build

```bash
npm run build
```

Builds the Next.js application and packages the application for OpenNext/Cloudflare.

### Full validation

```bash
npm run check
```

Runs the complete validation pipeline:

```text
validate content
      ↓
check assets
      ↓
lint
      ↓
typecheck
      ↓
production build
```

This command should pass before a production release.

---

## Main Routes

| Route           | Description                                    |
| --------------- | ---------------------------------------------- |
| `/`             | Homepage and academic overview                 |
| `/profile`      | Biography, appointments and professional roles |
| `/research`     | Research domains, programmes and core projects |
| `/publications` | Publications and scholarly works               |
| `/team`         | Research team and academic network             |
| `/impact`       | Projects, engagement and academic impact       |
| `/news`         | News and media archive                         |
| `/cv`           | Curriculum Vitae summary and downloadable CV   |

---

## Content Management

Website content is designed to remain separated from presentation logic.

### Academic content

Maintain structured information in:

```text
content/
```

This includes content such as:

* biography
* professional roles
* research information
* publications
* team members
* projects
* news
* academic activities

### Media assets

Store canonical public assets under:

```text
public/uploads/
```

Examples:

```text
public/uploads/profile/
public/uploads/team/
public/uploads/ranking/
public/uploads/publications/
public/uploads/cv/
```

Before adding or replacing an asset, verify that all references remain valid.

Run:

```bash
npm run check:assets
```

after significant asset changes.

---

## Production Validation

Before releasing a new version, run:

```bash
npm ci
npm run check
```

The application should satisfy all of the following:

* content validation passes
* asset validation passes
* ESLint reports no blocking errors
* TypeScript compilation passes
* Next.js production build succeeds
* OpenNext packaging succeeds
* no required asset returns `404`
* no development URL remains in production content
* no secrets or local environment files are committed

For manual testing, verify at minimum:

```text
/
/profile
/research
/publications
/team
/impact
/news
/cv
```

Also verify:

* desktop layout
* mobile layout
* navigation
* external academic links
* ranking links
* CV download
* images
* metadata
* social sharing preview

---

## Cloudflare / OpenNext

The repository includes OpenNext and Cloudflare Worker configuration.

Primary configuration files:

```text
open-next.config.ts
wrangler.jsonc
```

The generated Worker entry point is:

```text
.open-next/worker.js
```

Static assets are packaged under:

```text
.open-next/assets
```

The Cloudflare Worker currently uses:

```text
nodejs_compat
```

through the checked-in Wrangler configuration.

### Local Cloudflare preview

```bash
npm run preview
```

This builds the application and launches an OpenNext/Cloudflare preview.

### Automatic deploy through GitHub Actions

Every push to `main` runs the CI/CD workflow in:

```text
.github/workflows/content-check.yml
```

The workflow installs dependencies, runs the full validation/build pipeline, and deploys the generated OpenNext application to Cloudflare Workers only if all checks pass.

Configure these repository secrets under **GitHub → Settings → Secrets and variables → Actions**:

```text
CLOUDFLARE_API_TOKEN
CLOUDFLARE_ACCOUNT_ID
```

The API token must be authorized to deploy the `hiramting-portfolio` Worker in the target Cloudflare account. Pull requests run validation only and never deploy.

### Manual deploy through Cloudflare

For an environment with the required Cloudflare authentication and permissions:

```bash
npm run deploy
```

Alternatively:

```bash
npm run upload
```

may be used to build and upload the Worker without directly completing the full deployment workflow.

Production deployment should only be performed by an authorized repository or hosting maintainer.

---

## Environment Variables

The current application does not require environment variables for its standard local build.

If environment variables are introduced later, use files such as:

```text
.env.local
.env.production
```

where appropriate.

Environment and secret files must never be committed to Git.

The repository `.gitignore` excludes `.env*` by default, except for an explicitly permitted example file.

---

## Generated Files

Do not commit runtime or generated build directories such as:

```text
node_modules/
.next/
.open-next/
.wrangler/
.worker-files/
out/
.vercel/
```

These files are generated during installation, build, preview or deployment.

---

## Release Workflow

Recommended release process:

```text
Update content / source
        ↓
npm ci
        ↓
npm run check
        ↓
Manual browser verification
        ↓
Review git diff
        ↓
Commit changes
        ↓
Push to main
        ↓
Automatic production deployment through GitHub Actions
        ↓
Production smoke test
```

Before committing:

```bash
git status
git diff --stat
git diff
```

Verify that no secrets, generated directories, local configuration or unrelated files are included.

---

## Git Branch

The primary production branch is:

```text
main
```

Changes intended for release should be validated against the latest version of `main` before being pushed.

Recommended synchronization before release:

```bash
git pull --rebase origin main
npm run check
```

Avoid force-pushing to the production branch unless explicitly required by the repository maintainer.

---

## Migration Note

The repository previously contained a Vite/React implementation.

The redesigned application uses a different architecture:

```text
Previous
Vite + React 18 + React Router

Current
Next.js 16 + React 19 + App Router + OpenNext
```

Legacy Vite-specific files such as the following are no longer part of the current application architecture:

```text
src/
index.html
vite.config.ts
tsconfig.app.json
tsconfig.node.json
```

The current Next.js application should be treated as the authoritative production codebase.

---

## Documentation

Additional project documentation is available under:

```text
docs/
```

For content updates, consult the content update guide before modifying structured academic data or canonical public assets.

---

## Repository

```text
IzzatD03/hiram-ting-portfolio-portal
```

This repository is the source repository used for the official Prof. Dr. Hiram Ting academic portfolio release workflow.

---

## License and Content

Source code, academic information, photographs, publications, documents and other media in this repository may have different ownership or usage restrictions.

Do not redistribute academic content, photographs, CV files, publication materials or third-party assets without appropriate authorization.
