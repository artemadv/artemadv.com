import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

import { getOrigin } from '@/shared/lib/server';

export const { getClient } = registerApolloClient(() => {
    const origin = getOrigin();

    return new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
            uri: `${origin}/graphql`,
        }),
    });
});
