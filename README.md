# macgreene.com

Personal website for Mac Greene. Built with Next.js 15, TypeScript, and Tailwind v4.

**🌐 Live:** [macgreene.com](https://macgreene.com)

## Stack

- [Next.js 15](https://nextjs.org/) — static export
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [GitHub Pages](https://pages.github.com/) — hosting

## Development

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deployment

Pushes to `main` trigger GitHub Actions → static export → GitHub Pages.

Custom domain (`macgreene.com`) configured via CNAME + GoDaddy DNS.
