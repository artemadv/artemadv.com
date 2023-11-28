'use client';

import React, { FC } from 'react';

import {
    Section,
    SectionNames,
    TextWithImage,
    Counter,
    Carousel,
    SectionExtended,
} from '@/entities/section';
import { PortfolioCard } from '@/entities/portfolio';

const SECTION_TEMPLATES_MAPPER: { [key in SectionNames]: FC<Section> } = {
    [SectionNames.TextWithImage]: TextWithImage,
    [SectionNames.Counter]: Counter,
    [SectionNames.CarouselPortfolio]: Carousel,
    [SectionNames.CarouselSkills]: Carousel,
};

const SECTION_ADDITIONAL_PROPS_MAPPER: {
    [key in SectionNames]?: Pick<SectionExtended, 'mainSlot'>;
} = {
    [SectionNames.CarouselPortfolio]: {
        mainSlot: PortfolioCard,
    },
};

export const SectionItem: FC<Section> = (props) => {
    const { sectionName } = props;

    const SectionTemplate = SECTION_TEMPLATES_MAPPER[sectionName];
    const additionalProps = SECTION_ADDITIONAL_PROPS_MAPPER[sectionName] ?? {};

    return <SectionTemplate {...props} {...additionalProps} />;
};
