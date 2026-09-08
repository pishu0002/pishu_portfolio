# Prashanth Balaji — Software Engineer

A professional portfolio covering full-stack development, AI application interfaces, image-analysis integration, and cloud release infrastructure.

- [Portfolio website](https://pishu0002.github.io/pishu_portfolio/)
- [Download resume](./Prashanth_Balaji_Resume.pdf)
- [Editable source archive](./Prashanth_Balaji_Portfolio_Source.zip)
- [LinkedIn](https://www.linkedin.com/in/prashanth-balaji-1a2345254/)

## Built with

React, TypeScript, and Vite. The portfolio adapts [GitProfile](https://github.com/arifszn/gitprofile) by Ariful Alam under the [MIT license](./LICENSE), retaining its profile/sidebar, timeline, skill badges, and card-grid structure. Upstream source commit: `0e58cd05cc68a1295694fc2003cf282c08c8f781`.

Custom additions include curated professional work, accessible project filters and expandable details, light/dark themes, a professional portrait, and responsive layouts. All website assets are local; the site does not use analytics, remote fonts, or live GitHub API calls.

## Source and development

Download and extract `Prashanth_Balaji_Portfolio_Source.zip` into a folder. Use Node.js 24 LTS and a current npm version:

```sh
npm ci
npm run dev
npm run build
```

Edit `gitprofile.config.ts` for professional facts and projects, `src/components/gitprofile.tsx` for page composition, and `src/assets/index.css` for presentation. Public assets and the resume live in `public/`. Original adapted components are included under `upstream-reference/` for attribution and traceability; they are excluded from compilation.

The production build is written to `dist/` with relative, root-level assets. This repository preserves the existing GitHub Pages workflow, which publishes the repository root after a push to `main`. Copy the tested `dist/` files into the repository root for a future release, and refresh the source archive. Keep `LICENSE` with the distribution. Legacy portfolio assets remain in the repository for link compatibility.

## Project attribution

Academic projects are labeled as such. Agri Multiway Analyzer includes its repository's original authorship credits in the portfolio; no sole original authorship is claimed. The portfolio distinguishes completed work from artefact detection, which remains in progress.