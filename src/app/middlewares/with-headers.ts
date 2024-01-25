import { NextFetchEvent, NextRequest } from 'next/server';

import { MiddlewareFactory } from './stack-middlewares';

export const withHeaders: MiddlewareFactory = (next) => {
    return async (request: NextRequest, _next: NextFetchEvent) => {
        const res = await next(request, _next);

        if (res) {
            res.headers.set('x-origin', request.nextUrl.origin);
        }

        return res;
    };
};
