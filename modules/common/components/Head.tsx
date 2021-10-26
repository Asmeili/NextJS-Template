/**
 * @file Head.tsx
 * @description Replaces the document's head.
 */

import type { FC } from "react";

import NextHead from "next/head";

import { useTranslation } from "next-i18next";


export type HeadProps = {
    title?: string;
    keywords?: string[];
}
export const Head: FC<HeadProps> = props => {
    const { t } = useTranslation("common");


    return (
        <NextHead>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <title>{ props.title || t("appName") }</title>
            {props.keywords !== undefined && (
                <meta name="keywords" content={props.keywords.join(",")} />
            )}

            { props.children }
        </NextHead>
    );
}