# NextJS Template

This project contains a simple template project that I use when creating a NextJS app.<br/>
It contains a few preconfigured things:<br/>

## [framer-motion](https://www.framer.com/motion/)
The _app.tsx component includes an AnimatePresence to allow pages to animate the ``exit`` animation variant.

## [next-i18next](https://next-i18next.com/)
Use the ``next-i18next.config.js`` file contains configuration for next-i18next, used by ``next.config.js``.
Make sure to export the utility function on every page you wish translations to be enabled on.

## [next-plugin-preact](https://github.cdnweb.icu/preactjs/next-plugin-preact)
Uses preact instead of react in production builds to decrease bundle size.

## [sass](https://sass-lang.com/)
Use SCSS or SASS in the project.

## [tailwindcss](https://tailwindcss.com/)
TailwindCSS already configured.

## [typescript](https://www.typescriptlang.org/)
Project uses typescript. Also using ``baseUrl`` to be able to import from the root of the project.

## Components
Contains a preconfigured ``Head`` component to easily change the document's head.