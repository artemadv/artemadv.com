import {
    GetNavigationDocument,
    GetNavigationQuery,
    GetNavigationQueryVariables,
} from '../graphql/generated-schema';
import { getClient } from '../lib/register-apollo-client';
import { CustomQueryOptions } from '../types';

import { getLangcode } from '@/shared/lib/server';

export const getNavigation = async ({
    variables,
    ...options
}: CustomQueryOptions<GetNavigationQueryVariables, GetNavigationQuery>) => {
    const langcode = getLangcode();
    const { data, loading, error } = await getClient().query<GetNavigationQuery>({
        query: GetNavigationDocument,
        variables: {
            langcode,
            ...variables,
        },
        ...options,
    });

    return {
        menu: data.menu,
        error: Boolean(error),
        loading,
    };
};
