import { stackMiddlewares, withI18nRouter, withHeaders } from '@/app/middlewares';

export const config = {
    matcher: ['/((?!api|graphql|_next/static|_next/image|favicon.ico).*)'],
};

export default stackMiddlewares([withHeaders, withI18nRouter]);
