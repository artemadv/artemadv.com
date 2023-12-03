import React, { FC } from 'react';

import { FAKE_CONTACTS_SECTIONS } from '../../model/delete-constants';
import { ContactsList } from '../ContactsList';

import { TextWithRightContent, SectionType } from '@/entities/section';

export const Contacts: FC = () => {
    const mainSection = FAKE_CONTACTS_SECTIONS.find(
        (section) => section?.sectionType === SectionType.Main,
    );
    const { nodes } =
        FAKE_CONTACTS_SECTIONS.find((section) => section?.sectionType === SectionType.Basic) ?? {};

    if (!mainSection) return null;

    return (
        <div id="contacts">
            <TextWithRightContent {...mainSection} secondSlot={<ContactsList nodes={nodes} />} />
        </div>
    );
};
