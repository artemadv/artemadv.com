'use client';

import React, { FC } from 'react';

import {
    Section,
    SectionNames,
    TextWithRightContent,
    Counter,
    CarouselListL,
    SectionExtended,
    CarouselListM,
    ColumnList,
} from '@/entities/section';
import { PortfolioCard } from '@/entities/portfolio';
import { ExperienceCard, TechnologyCard } from '@/entities/resume';

const SECTION_TEMPLATES_MAPPER: { [key in SectionNames]: FC<Section> } = {
    [SectionNames.TextWithRightContent]: TextWithRightContent,
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
        mainSlot: ExperienceCard,
    },
};

export const SectionItem: FC<Section> = (props) => {
    const { sectionName } = props;

    const SectionTemplate = SECTION_TEMPLATES_MAPPER[sectionName];
    const additionalProps = SECTION_ADDITIONAL_PROPS_MAPPER[sectionName] ?? {};

    return <SectionTemplate {...props} {...additionalProps} />;
};
