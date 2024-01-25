import { createI18nClient } from 'next-international/client';

import { LOCALES } from '@/shared/config/site.config';

const createConfig = () => {
    return LOCALES.reduce((acc, locale) => {
        if (!acc[locale]) {
            acc[locale] = () => Promise.resolve({});
        }

        return acc;
    }, {} as { [key: (typeof LOCALES)[number]]: () => Promise<object> });
};

export const { useCurrentLocale, useChangeLocale } = createI18nClient(createConfig());
