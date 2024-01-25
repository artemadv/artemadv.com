import { createI18nMiddleware } from 'next-international/middleware';
import { NextFetchEvent, NextRequest } from 'next/server';

import { MiddlewareFactory } from './stack-middlewares';

import { LOCALES } from '@/shared/config/site.config';

const I18nMiddleware = createI18nMiddleware({
    locales: LOCALES,
    defaultLocale: LOCALES[0] ?? 'en',
    urlMappingStrategy: 'rewrite',
});

export const withI18nRouter: MiddlewareFactory = (next) => {
    return async (request: NextRequest, _next: NextFetchEvent) => {
        const res = await next(request, _next);

        if (res) {
            return I18nMiddleware(request);
        }

        return next(request, _next);
    };
};
