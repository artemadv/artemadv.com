import React, { FC } from 'react';

import { SectionItem } from '../SectionItem';

import { SectionsGroup as SectionsGroupType } from '@/shared/api';

export const SectionsGroup: FC<SectionsGroupType> = ({ sections }) => {
    return (
        <>
            {sections?.map((section) => (
                <SectionItem key={section.id} {...section} />
            ))}
        </>
    );
};
