import { NodeUnion, RouteInternal, RouteUnion } from '../graphql/generated-schema';
import { Config, Section, SectionsGroup } from '../types';

type Node = Pick<NodeUnion, '__typename'>;
type Route = Pick<RouteUnion, '__typename'>;

export const isRouteInternalType = (route?: Route | null): route is RouteInternal => {
    return route?.__typename === 'RouteInternal';
};

export const isNodeSectionGroupType = (node?: Node | null): node is SectionsGroup => {
    return node?.__typename === 'NodeSectionGroup';
};

export const isNodeConfigType = (node?: Node | null): node is Config => {
    return node?.__typename === 'NodeConfig';
};

export const isNodeSectionTypeByList = (nodes?: Node[] | null): nodes is Section[] => {
    return nodes?.[0].__typename === 'NodeSection';
};

export const isNodeSectionGroupTypeByList = (nodes?: Node[] | null): nodes is SectionsGroup[] => {
    return nodes?.[0].__typename === 'NodeSectionGroup';
};
