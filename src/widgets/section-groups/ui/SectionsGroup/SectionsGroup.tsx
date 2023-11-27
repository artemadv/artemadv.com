import React, { FC } from 'react';

import { Section } from '@/entities/section';

interface SectionsGroup {
    id: string;
    sections?: Section[];
}

export const SectionsGroup: FC<SectionsGroup> = ({ sections }) => {
    return (
        <div>
            {sections?.map((section) => (
                <Section key={section.id} {...section} />
            ))}
        </div>
    );
};
