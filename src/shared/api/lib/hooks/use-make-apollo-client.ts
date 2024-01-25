/* eslint-disable indent */

'use client';

import { useContext } from 'react';
import { ApolloLink, HttpLink } from '@apollo/client';
import {
    NextSSRInMemoryCache,
    NextSSRApolloClient,
    SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';

import { CoreContext } from '@/shared/lib/client';

export const useMakeClient = () => {
    const { origin } = useContext(CoreContext);
    const httpLink = new HttpLink({
        uri: `${origin}/graphql`,
    });

    return () =>
        new NextSSRApolloClient({
            cache: new NextSSRInMemoryCache(),
            link:
                typeof window === 'undefined'
                    ? ApolloLink.from([
                          new SSRMultipartLink({
                              stripDefer: true,
                          }),
                          httpLink,
                      ])
                    : httpLink,
        });
};
