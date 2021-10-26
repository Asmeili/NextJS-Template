/**
 * @file ServerTranslations.ts
 * @description Required by a page in order to allow translations for it.
 */

import type { GetStaticProps } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";


export const getStaticProps: GetStaticProps = async props => ({
    props: {
        ...(await serverSideTranslations(props.locale || props.defaultLocale!))
    }
});