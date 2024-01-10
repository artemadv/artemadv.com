import { QueryOptions } from '@apollo/client';

import {
    GetNavigationDocument,
    GetNavigationQuery,
    GetNavigationQueryVariables,
} from '../../graphql/generated-schema';
import { getClient } from '../../libs/register-apollo-client';

export const useNavigation = async (
    options: Omit<QueryOptions<GetNavigationQueryVariables, GetNavigationQuery>, 'query'>,
) => {
    const { data, loading, error } = await getClient().query<
        GetNavigationQuery,
        GetNavigationQueryVariables
    >({
        query: GetNavigationDocument,
        ...options,
    });

    return {
        menu: data.menu,
        error: Boolean(error),
        loading,
    };
};
