import React, { FC } from 'react';

import { ContactList } from '../ContactList';

import { TextWithRightContent, SectionType } from '@/entities/section';
import { useSectionGroups } from '@/shared/api/server-only';

export const Contact: FC = async () => {
    const { sections } = await useSectionGroups({
        variables: {
            path: 'widget-contact',
        },
    });

    const mainSection = sections.find((section) => section?.sectionType === SectionType.Main);
    const { nodes } = sections.find((section) => section?.sectionType === SectionType.Basic) ?? {};

    if (!mainSection) return null;

    return (
        <div id="contact">
            <TextWithRightContent {...mainSection} secondSlot={<ContactList nodes={nodes} />} />
        </div>
    );
};
