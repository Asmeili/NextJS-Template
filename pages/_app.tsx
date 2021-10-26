/**
 * @file _app.tsx
 * @description Included with every page.
 *              Adds Head component and includes an AnimatePresence.
 */

import type { FC } from "react";

import type { AppProps } from "next/app";

import { AnimatePresence } from "framer-motion";
import { appWithTranslation } from "next-i18next";

import { Head } from "modules/common/components/Head";
import { generateUniqueKey } from "modules/common/util/UniqueKey";

import "styles/globals.scss";


export const Root: FC<AppProps> = ({ Component, pageProps, router }) => {
    const uniqueKey = generateUniqueKey(router);


    return (
        <>
            <Head />

            <AnimatePresence exitBeforeEnter>
                <Component Key={uniqueKey}
                    {...pageProps}
                />
            </AnimatePresence>
        </>
    );
}
export default appWithTranslation(Root);