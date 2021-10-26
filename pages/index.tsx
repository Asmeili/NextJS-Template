/**
 * @file index.tsx
 * @description Home page.
 * @route /
 */

import type { FC } from "react";

import { useTranslation } from "next-i18next";


export { getStaticProps } from "modules/common/util/ServerTranslations";
export const Root: FC = () => {
    const { t } = useTranslation("common");
    
    
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <h1 className="text-center">
                <b>{t("appName")}</b>
            </h1>
        </div>
    );
}
export default Root;