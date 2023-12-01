import { CSSProperties, FC } from 'react';

import { Node } from '@/shared/types';

// TODO refactoring
export enum SectionNames {
    TextWithRightContent = 'TextWithRightContent',
    Counter = 'Counter',
    CarouselPortfolio = 'CarouselPortfolio',
    CarouselTechnology = 'CarouselTechnology',
    WorkList = 'WorkList',
}

export enum SectionType {
    Main = 'Main',
    Basic = 'Basic',
}

export type Section = {
    id: string;
    sectionName: SectionNames;
    sectionType?: SectionType;
    style?: CSSProperties;
    nodes?: Node[];
};

export type SectionExtended = Section & {
    mainSlot?: FC<Node & { className?: string }>; // To expand logic in sections
    secondSlot?: JSX.Element; // Fixed slot. For JSX.Element
};
