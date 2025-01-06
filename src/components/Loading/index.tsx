import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";

function LoadingComponent() {
    const { t } = useTranslation();

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>{t('Core.Loading')}</h1>
            <div className={styles.loading}>
                <div className={styles.dots}>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                </div>
            </div>
        </div>

    );
}

export default LoadingComponent;
