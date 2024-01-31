'use client';

import React, { FC } from 'react';

import {
    SectionNames,
    TextWithRightContent,
    Counter,
    CarouselListL,
    SectionExtended,
    CarouselListM,
    ColumnList,
    Faq,
} from '@/entities/section';
import { PortfolioCard } from '@/entities/portfolio';
import { ExperienceCard, TechnologyCard } from '@/entities/resume';
import { Section } from '@/shared/api';

const SECTION_TEMPLATES_MAPPER: { [key in SectionNames]: FC<Section> } = {
    [SectionNames.TextWithRightContent]: TextWithRightContent,
    [SectionNames.Counter]: Counter,
    [SectionNames.CarouselPortfolio]: CarouselListL,
    [SectionNames.CarouselTechnology]: CarouselListM,
    [SectionNames.WorkList]: ColumnList,
    [SectionNames.Faq]: Faq,
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

const isSectionNameType = (sectionName: string | SectionNames): sectionName is SectionNames => {
    return Object.values(SectionNames).includes(sectionName as SectionNames);
};

export const SectionItem: FC<Section> = (props) => {
    const { sectionName } = props;
    const validSectionName = isSectionNameType(sectionName)
        ? sectionName
        : SectionNames.TextWithRightContent;

    const SectionTemplate = SECTION_TEMPLATES_MAPPER[validSectionName];
    const additionalProps = SECTION_ADDITIONAL_PROPS_MAPPER[validSectionName] ?? {};

    return <SectionTemplate {...props} {...additionalProps} />;
};
