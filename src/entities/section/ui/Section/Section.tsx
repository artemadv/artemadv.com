import React, { FC } from 'react';

import { Section as SectionType, SectionNames } from '../../model/types';
import { TextWithImage } from '../TextWithImage';
import { AboutMe } from '../AboutMe';
import { Portfolio } from '../Portfolio';

// ! Redefine the type for multiple export
export type Section = SectionType;

const SECTION_TEMPLATES_MAPPER: { [key in SectionNames]: FC<Section> } = {
    [SectionNames.TextWithImage]: TextWithImage,
    [SectionNames.AboutMe]: AboutMe,
    [SectionNames.Portfolio]: Portfolio,
};

export const Section: FC<Section> = (props) => {
    const { sectionName } = props;

    const SectionTemplate = SECTION_TEMPLATES_MAPPER[sectionName];

    return <SectionTemplate {...props} />;
};
