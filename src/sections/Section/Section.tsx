import React, { FC } from 'react';

import { SimpleTemplate } from '@/sections/templates/SimpleTemplate';
import { TextWithImage } from '@/sections/nodes/TextWithImage';
import { ESectionNames, INode, ISection, TSectionTemplate } from '@/types';

const SECTION_TEMPLATE: { [key in ESectionNames]: FC<TSectionTemplate> } = {
    [ESectionNames.TextWithImage]: SimpleTemplate,
};

const NODE_TEMPLATE: { [key in ESectionNames]: FC<INode> } = {
    [ESectionNames.TextWithImage]: TextWithImage,
};

export const Section: FC<ISection> = (props) => {
    const { sectionName } = props;

    const SectionTemplate = SECTION_TEMPLATE[sectionName];
    const nodeTemplate = NODE_TEMPLATE[sectionName];

    return <SectionTemplate nodeTemplate={nodeTemplate} section={props} />;
};
