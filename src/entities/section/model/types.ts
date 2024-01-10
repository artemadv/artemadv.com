import { FC } from 'react';

import { Node, Section } from '@/shared/api';

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

export type SectionExtended = Section & {
    mainSlot?: FC<Node & { className?: string }>; // To expand logic in sections
    secondSlot?: JSX.Element; // Fixed slot. For JSX.Element
};
