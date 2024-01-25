export { getNavigation } from './query/get-navigation';
export { getSectionGroups } from './query/get-sections-group';
export { getPageConfig } from './query/get-page-config';
export {
    type NodeNode as Node,
    type GetNavigationQuery,
    MenuAvailable,
} from './graphql/generated-schema';
export type { Section, SectionsGroup } from './types';
