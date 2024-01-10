import { HttpLink } from '@apollo/client';
import {
    NextSSRInMemoryCache,
    NextSSRApolloClient,
} from '@apollo/experimental-nextjs-app-support/ssr';

import { API_URL } from '@root/site.config';

export const makeClient = () => {
    const httpLink = new HttpLink({
        uri: `${API_URL}/graphql`,
    });

    return new NextSSRApolloClient({
        cache: new NextSSRInMemoryCache(),
        link: httpLink,
    });
};
