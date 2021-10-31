/**
 * @file next.config.js
 * @description Configuration for next
 */

const { i18n } = require("./next-i18next.config");
const withPreact = require("next-plugin-preact");


module.exports = withPreact({
    i18n,
 
    reactStrictMode: true,
    webpack5: true,
    
    webpackDevMiddleware: config => {
        config.watchOptions = {
            poll: 800,
            aggregateTimeout: 300
        }
        return config;
    }
});
