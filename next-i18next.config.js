/**
 * @file next-i18next.config.js
 * @description Configuration for next-i18n and next.
 */

 module.exports = {
    i18n: {
        locales: ["en"],
        defaultLocale: "en"
    },
    react: {
        useSuspense: false // Using suspense can cause next-18next to break.
    }
}