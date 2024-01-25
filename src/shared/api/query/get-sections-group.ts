import {
    GetSectionsGroupDocument,
    GetSectionsGroupQuery,
    GetSectionsGroupQueryVariables,
} from '../graphql/generated-schema';
import {
    isNodeSectionGroupType,
    isNodeSectionTypeByList,
    isRouteInternalType,
} from '../lib/type-guards';
import { getClient } from '../lib/register-apollo-client';
import { CustomQueryOptions } from '../types';

import { getLangcode } from '@/shared/lib/server';

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

export const getSectionGroups = async ({
    variables,
    ...options
}: CustomQueryOptions<GetSectionsGroupQueryVariables, GetSectionsGroupQuery>) => {
    const langcode = getLangcode();
    const { data, loading, error } = await getClient().query<GetSectionsGroupQuery>({
        query: GetSectionsGroupDocument,
        variables: {
            langcode,
            ...variables,
        },
        ...options,
    });

    return {
        sections: getSections(data),
        error: Boolean(error),
        loading,
    };
};
