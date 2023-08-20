import React from 'react';

import { SectionsGroup } from '@/sections/SectionsGroup';
import { MAIN_PAGE_SECTION_GROUPS } from '@/types';

export const Home = () => {
    return (
        <>
            {MAIN_PAGE_SECTION_GROUPS.map((sectionsGroup) => (
                <SectionsGroup key={sectionsGroup.id} {...sectionsGroup} />
            ))}
        </>
    );
};
