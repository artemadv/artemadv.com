import {
    GetPageConfigDocument,
    GetPageConfigQuery,
    GetPageConfigQueryVariables,
} from '../graphql/generated-schema';
import {
    isNodeConfigType,
    isNodeSectionGroupTypeByList,
    isRouteInternalType,
} from '../lib/type-guards';
import { getClient } from '../lib/register-apollo-client';
import { CustomQueryOptions } from '../types';

import { getLangcode } from '@/shared/lib/server';

const createPageData = (data: GetPageConfigQuery) => {
    if (
        isRouteInternalType(data.route) &&
        isNodeConfigType(data.route.entity) &&
        isNodeSectionGroupTypeByList(data.route.entity.sectionsGroup)
    ) {
        return {
            sectionsGroup: data.route.entity.sectionsGroup,
            seo: {
                title: data.route.entity.seoTitle,
                description: data.route.entity.seoDescription,
            },
        };
    }

    return {
        sectionsGroup: [],
        seo: {},
    };
};

export const getPageConfig = async ({
    variables,
    ...options
}: CustomQueryOptions<GetPageConfigQueryVariables, GetPageConfigQuery>) => {
    const langcode = getLangcode();
    const { data, loading, error } = await getClient().query<
        GetPageConfigQuery,
        GetPageConfigQueryVariables
    >({
        query: GetPageConfigDocument,
        variables: {
            langcode,
            ...variables,
        },
        ...options,
    });
    const { sectionsGroup, seo } = createPageData(data);

    return {
        sectionsGroup,
        seo,
        error: Boolean(error),
        loading,
    };
};
