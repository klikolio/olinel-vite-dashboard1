# Klikolio Docs (Vite Template)

## Overview

**Olinel** is multipurpose admin dashboard template which leverages **Vite** as development tool, providing a efficient development environment, ensuring optimized production builds and embracing modern JavaScript features. This template also built upon robust and widely adopted **Bootstrap 5** which offering a seamless user experience across various browsers. Utilizes **SASS** enabling modular and maintainable styles which making easier to manage the visual aspects. **Nunjucks** as templating engine, simplifies HTML structure and enhances code reusability. For efficient DOM manipulation, this template also includes **jQuery**. Integration of **EsLint** and **Prettier**, ensuring code consistency and identifying potential issues early in development process to improves code quality.

**Olinel** showcases a modern design style that blends aesthetics with functionality. Visually appealing interface ensures a delightful user experiences. This template also provides a rich library of components that empowers you to build dynamic admin dashboard application. Offering both practical examples and documentation from pre-built pages will accelerate your development process.

**Files Included**
- Nunjucks
- SCSS
- Javascript
- Supporting assets

## Editor Setup

**Olinel** comes with **Nunjucks** as templating engine. Most of code editor doesn't support the syntax highlighting out of the box, you need to setup your code editor. This documentation will show you how to setup **Visual Studio Code** as popular code editor. You should install [Nunjucks extension](https://marketplace.visualstudio.com/items?itemName=ronnidc.nunjucks) on your code editor. This template comes with Visual Studio Code specific configuration in `.vscode` directory.

**Olinel** also comes with **EsLint** and **Prettier** integration, you can optionally install [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) plugins for Visual Studio Code to make your development process for efficient.

## Project Setup

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
├─ .browserlistrc    - browser list for build
├─ .env.example      - example of environment variables
├─ .eslintignore     - ignore file for EsLint
├─ .eslintrc.json    - Eslint configuration
├─ .gitattribute     - Git attributes configuration
├─ .gitignore        - ignore file for Git
├─ .prettierignore   - ignore file for Prettier
├─ .prettierrc       - Prettier configuration
├─ package.json      - Node.js package information
├─ postcss.config.js - PostCSS configuration
├─ README.md         - documentation in markdown
├─ vite.config.js    - Vite configuration
```

For more understanding of the project structure, you need to understand `src/app` directory. This directory contains all application logic JavaScript codes. There are `entry.js` code in this directory, this file will imported to every pages, so you can set general function of your projects. For components and pages specific codes, you can find them in `src/app/{components|pages}` directory.

This template uses **Nunjucks** to generating pages and modular components, all the codes are written in `*.njk` format that you can find in `components` and `pages` directory. All `*.njk` files in `pages` directory will be compiled as plain HTML, the routing will depends on your structure in `pages` directory. All the pages are extend `components/template.njk` as base page template and you can see the page configuration in `components/variables.njk`. This template uses **Vituum** to power page template system, you can see more detail on [the page](<(https://vituum.dev/guide/template-engines.html)>).

This template has customize vendor library assets to fit the requirement, you can find all custom vendor modules in `modules` directory. Several library depends on **Bootstrap** as base library. This templates also extends extra components to Bootstrap and remove several components to fit template requirement, you can find them in `src/modules/bootstrap` directory. In `modules` directory, you can also find style codes for every components. Every modules has `_variables.scss` files that contains all styling variables, so you can override it to change the design style.

## Command Line Interface

| Command                | Description                       |
| ---------------------- | --------------------------------- |
| `npm run dev`          | Start development server          |
| `npm run build`        | Build project for production      |
| `npm run preview`      | Preview local production build    |
| `npm run lint`         | Lint JavaScript codes with EsLint |
| `npm run format:check` | Check code format with Prettier   |
| `npm run format:fix`   | Fix code format with Prettier     |

To change page direction for your project you can set `PAGE_DIRECTION` with `ltr|rtl` in environment variables, you can see the example in `.env.example` file.
