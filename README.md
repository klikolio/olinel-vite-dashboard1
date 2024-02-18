# Olinel - Vite TypeScript Admin Dashboard Template

## Overview

**Olinel** is a multipurpose admin dashboard template which leverages **Vite** as a development tool, providing an efficient development environment, ensuring optimized production builds and enabling modern JavaScript features. All application logics are written in **TypeScript** for type-safe and maintainable codebase. This template is also built upon robust and widely adopted **Bootstrap** which offers a seamless user experience across various browsers. Utilizes **SASS** for enabling modular and maintainable styles which make it easier to manage the visual aspects. **Nunjucks** as a templating engine simplifies HTML structure and enhances code reusability. Integration of **EsLint** and **Prettier**, ensuring code consistency and identifying potential issues early in the development process to improve code quality.

**Olinel** has various layout styles and showcases a modern design that blends aesthetics with functionality and visually appealing interface, ensures a delightful user experience. This template also provides a rich library of components that empowers you to build dynamic admin dashboard applications. This template also offering both practical examples and documentation from pre-built pages will accelerate your development process.

**Files Included**

- Nunjucks
- SCSS
- TypeScript
- Supporting assets

## Editor Set Up

This template comes with **Nunjucks** as a templating engine. Most code editors don't support the syntax highlighting. This documentation will show you how to set up [Visual Studio Code](https://code.visualstudio.com) as the most popular code editor to work with this template. You should install [Nunjucks extension](https://marketplace.visualstudio.com/items?itemName=ronnidc.nunjucks) on your code editor. This template also comes with Visual Studio Code specific configuration in the `.vscode` directory, so you don't need to do a lot of configuration.

This template also comes with **EsLint** and **Prettier**, you can optionally install [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and [EsLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) plugins on your Visual Studio Code to make your development process more efficient.

## Project Set Up

1. You must have [Node.js](https://nodejs.org) installed on your computer.
2. Extract downloaded package from marketplace.
3. Start terminal on `template` directory.
4. Install package dependencies by running `npm install` command.
5. Run `npm run dev` to start **Vite** development server.

## Project Structure

```
├─ .vscode/          - contains Visual Studio Code configuration
├─ public/           - contains static assets
├─ src/              - contains source codes
│  ├─ app/           - contains application logic codes
│  ├─ modules/       - contains custom vendor modules
│  ├─ components/    - contains Nunjucks components
│  └─ pages/         - contains Nunjucks pages
├─ .browserslistrc   - browser list for build
├─ .env.example      - example of environment variables
├─ .eslintrc.json    - Eslint configuration
├─ .gitattributes    - Git attributes configuration
├─ .gitignore        - ignore file for Git
├─ .prettierignore   - ignore file for Prettier
├─ .prettierrc       - Prettier configuration
├─ package.json      - Node.js package information
├─ postcss.config.js - PostCSS configuration
├─ README.md         - documentation in markdown
├─ tsconfig.json     - TypeScript configuration
├─ vite.config.js    - Vite configuration
```

For more understanding of the project structure, you need to understand the `src/app` directory. This directory contains all application logic in TypeScript codes. There is `entry.ts` code in this directory, this file will be imported to every page, so you can set general functions of your project. For components and pages specific codes, you can find them in `src/app/{components|pages}` directory.

This template uses **Nunjucks** to generate pages and components modulation, all the codes are written in `*.njk` format that you can find in `components` and `pages` directories. All `*.njk` files in the `pages` directory will be compiled as plain HTML, the routing will depend on your structure in the `pages` directory. All the pages are also extended from `components/template.njk` as base page template and you can see the page configuration in `components/variables.njk`. This template uses **Vituum** to power the page template system, you can see more detail on [the page](https://vituum.dev/guide/template-engines.html).

This template has customized vendor module assets to fit the requirement, you can find all custom vendor modules in `src/modules` directory. Several libraries depend on **Bootstrap** as a base library. This template also extends extra components to Bootstrap library and removes several components to fit template requirements, you can find them in `src/modules/bootstrap` directory. In the `modules` directory, you can also find style codes for every component. Every module has `_variables.scss` files that contain all styling variables, so you can override it to change the design style.

## Command Line Interface

| Command                | Description                                     |
| ---------------------- | ----------------------------------------------- |
| `npm run dev`          | Start development server                        |
| `npm run build`        | Build assets for production                     |
| `npm run preview`      | Preview local production build                  |
| `npm run lint`         | Lint TypeScript or Javascript codes with EsLint |
| `npm run format:check` | Check code format with Prettier                 |
| `npm run format:fix`   | Fix code format with Prettier                   |

To change page direction for this template you can set `PAGE_DIRECTION` with `ltr|rtl` in environment variables, you can see the example in the `.env.example` file.
