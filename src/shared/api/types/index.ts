import { NodeConfig, NodeSection, NodeSectionGroup, NodeNode } from '../graphql/generated-schema';

type Modify<T, K> = Omit<T, keyof K> & K;

export type Section = Modify<
    NodeSection,
    {
        nodes?: NodeNode[];
    }
>;

export type SectionsGroup = Modify<
    NodeSectionGroup,
    {
        sections?: Section[];
    }
>;

export type Config = Modify<
    NodeConfig,
    {
        sectionsGroup?: SectionsGroup[];
    }
>;
