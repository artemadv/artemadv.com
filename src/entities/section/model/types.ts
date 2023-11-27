import { CSSProperties, FC } from 'react';

import { Node } from '@/shared/types';

// TODO refactoring
export enum SectionNames {
    TextWithImage = 'TextWithImage',
    Counter = 'Counter',
    CarouselPortfolio = 'CarouselPortfolio',
    CarouselSkills = 'CarouselSkills',
}

export type Section = {
    id: string;
    sectionName: SectionNames;
    style?: CSSProperties;
    nodes?: Node[];
};

export type SectionExtended = Section & {
    mainSlot?: FC<Node>;
};
