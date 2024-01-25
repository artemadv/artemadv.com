'use client';

import React, { FC } from 'react';
import clsx from 'clsx';

import { useChangeLocale, useCurrentLocale } from '@/shared/locales/client';
import { LOCALES } from '@/shared/config/site.config';
import { Button } from '@/shared/ui';

import styles from './SwitchLocale.module.css';

type SwitchLocale = {
    className?: string;
};

const formatFirstSymbolToUpperCase = (string: string) => {
    return string[0].toUpperCase() + string.slice(1, string.length).toLowerCase();
};

// TODO: change on select
export const SwitchLocale: FC<SwitchLocale> = (props) => {
    const { className } = props;

    const currentLocale = useCurrentLocale();
    const changeLocale = useChangeLocale();

    return (
        <ul className={clsx(styles.locale, className)}>
            {LOCALES.map((locale) => {
                const isCurrentLocale = currentLocale === locale;

                return (
                    <li key={locale} className={styles.locale__buttonWrapper}>
                        <Button
                            size="xs"
                            className={styles.locale__button}
                            theme="default"
                            color={isCurrentLocale ? 'dark' : 'blue'}
                            onClick={() => changeLocale(locale)}
                            disabled={isCurrentLocale}
                        >
                            {formatFirstSymbolToUpperCase(locale)}
                        </Button>
                    </li>
                );
            })}
        </ul>
    );
};
