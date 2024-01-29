import React, { FC, useEffect } from 'react';

import { Button, Typography } from '@/shared/ui';
import { useCurrentLocale } from '@/shared/locales/client';
import { LOCALES } from '@/shared/config/site.config';

import styles from './Error.module.css';

type ErrorPage = {
    error: Error & { digest?: string };
    reset: () => void;
};

const LOCALE_TEXT_MAPPER: {
    [key: (typeof LOCALES)[number]]: {
        [key: string]: string;
    };
} = {
    en: {
        title: 'Something went wrong!',
        button: 'Try again',
    },
    ru: {
        title: 'Что-то пошло не так!',
        button: 'Попробовать еще раз',
    },
};

export const Error: FC<ErrorPage> = (props) => {
    const { reset, error } = props;

    const local = useCurrentLocale();
    const title = LOCALE_TEXT_MAPPER[local]?.title;
    const button = LOCALE_TEXT_MAPPER[local]?.button;

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className={styles.error}>
            {title && (
                <Typography as="h2" className={styles.error__title}>
                    {title}
                </Typography>
            )}
            {button && (
                <Button onClick={reset} className={styles.error__button} color="blue">
                    {button}
                </Button>
            )}
        </div>
    );
};
