import { QueryOptions } from '@apollo/client';

import {
    GetSectionsGroupDocument,
    GetSectionsGroupQuery,
    GetSectionsGroupQueryVariables,
} from '../../graphql/generated-schema';
import {
    isNodeSectionGroupType,
    isNodeSectionTypeByList,
    isRouteInternalType,
} from '../../libs/type-guards';
import { getClient } from '../../libs/register-apollo-client';

const getSections = (data: GetSectionsGroupQuery) => {
    if (
        isRouteInternalType(data.route) &&
        isNodeSectionGroupType(data.route.entity) &&
        isNodeSectionTypeByList(data.route.entity.sections)
    ) {
        return data.route.entity.sections;
    }

    return [];
};

export const useSectionGroups = async (
    options?: Omit<QueryOptions<GetSectionsGroupQueryVariables, GetSectionsGroupQuery>, 'query'>,
) => {
    const { data, loading, error } = await getClient().query<
        GetSectionsGroupQuery,
        GetSectionsGroupQueryVariables
    >({
        query: GetSectionsGroupDocument,
        ...(options || {}),
    });

    return {
        sections: getSections(data),
        error: Boolean(error),
        loading,
    };
};
