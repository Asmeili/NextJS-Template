/**
 * @file UniqueKey.ts
 * @description Generates a unique key using the params passed to the page dynamically (per routing) by using the key and value.
 *              An AnimePrescence will only render a new component if the key changes. This is an issue.
 *              /pages/department/jobs/[index].tsx will always route as /pages/department/jobs/[index] instead of dynamically providing the param.
 *              This causes no animation to play when changing dynamic routes. This code takes the keys & values to append them to a unique string which is added after the route to ensure each route is truely unique.
 */

import type { Router } from "next/dist/client/router";


export const generateUniqueKey = (router: Router) => {
    let uniqueKey = router.route;
    if (router.query !== {}) {
        const keys = Object.keys(router.query);
        const uniqueParams = keys.map(key => {
            const value = router.query[key];
            return `${key}:${value}`;
        }).join("__");
        
        uniqueKey += uniqueParams;
    }
    return uniqueKey;
}