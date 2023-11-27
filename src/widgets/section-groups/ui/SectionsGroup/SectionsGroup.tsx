import React, { FC } from 'react';

import { SectionItem } from '../SectionItem';

import { Section } from '@/entities/section';

interface SectionsGroup {
    id: string;
    sections?: Section[];
}

export const SectionsGroup: FC<SectionsGroup> = ({ sections }) => {
    return (
        <div>
            {sections?.map((section) => (
                <SectionItem key={section.id} {...section} />
            ))}
        </div>
    );
};
