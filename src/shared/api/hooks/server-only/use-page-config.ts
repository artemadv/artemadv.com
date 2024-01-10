import { QueryOptions } from '@apollo/client';

import {
    GetPageConfigDocument,
    GetPageConfigQuery,
    GetPageConfigQueryVariables,
} from '../../graphql/generated-schema';
import {
    isNodeConfigType,
    isNodeSectionGroupTypeByList,
    isRouteInternalType,
} from '../../libs/type-guards';
import { getClient } from '../../libs/register-apollo-client';

const getSectionsGroup = (data: GetPageConfigQuery) => {
    if (
        isRouteInternalType(data.route) &&
        isNodeConfigType(data.route.entity) &&
        isNodeSectionGroupTypeByList(data.route.entity.sectionsGroup)
    ) {
        return data.route.entity.sectionsGroup;
    }

    return [];
};

export const usePageConfig = async (
    options: Omit<QueryOptions<GetPageConfigQueryVariables, GetPageConfigQuery>, 'query'>,
) => {
    const { data, loading, error } = await getClient().query<
        GetPageConfigQuery,
        GetPageConfigQueryVariables
    >({
        query: GetPageConfigDocument,
        ...options,
    });

    return {
        sectionsGroup: getSectionsGroup(data),
        error: Boolean(error),
        loading,
    };
};
