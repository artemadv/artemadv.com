'use client';

import React, { FC } from 'react';

import {
    Section,
    SectionNames,
    TextWithImage,
    Counter,
    CarouselListL,
    SectionExtended,
    CarouselListM,
    ColumnList,
} from '@/entities/section';
import { PortfolioCard } from '@/entities/portfolio';
import { TechnologyCard } from '@/entities/resume';

const SECTION_TEMPLATES_MAPPER: { [key in SectionNames]: FC<Section> } = {
    [SectionNames.TextWithImage]: TextWithImage,
    [SectionNames.Counter]: Counter,
    [SectionNames.CarouselPortfolio]: CarouselListL,
    [SectionNames.CarouselTechnology]: CarouselListM,
    [SectionNames.WorkList]: ColumnList,
};

const SECTION_ADDITIONAL_PROPS_MAPPER: {
    [key in SectionNames]?: Pick<SectionExtended, 'mainSlot'>;
} = {
    [SectionNames.CarouselPortfolio]: {
        mainSlot: PortfolioCard,
    },
    [SectionNames.CarouselTechnology]: {
        mainSlot: TechnologyCard,
    },
    [SectionNames.WorkList]: {
        mainSlot: TechnologyCard,
    },
};

export const SectionItem: FC<Section> = (props) => {
    const { sectionName } = props;

    const SectionTemplate = SECTION_TEMPLATES_MAPPER[sectionName];
    const additionalProps = SECTION_ADDITIONAL_PROPS_MAPPER[sectionName] ?? {};

    return <SectionTemplate {...props} {...additionalProps} />;
};
