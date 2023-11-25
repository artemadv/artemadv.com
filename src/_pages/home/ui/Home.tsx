import React from 'react';

import { FAKE_MAIN_PAGE_SECTION_GROUPS, SectionsGroup } from '@/widgets/section-groups';

export const Home = () => {
    return (
        <>
            {FAKE_MAIN_PAGE_SECTION_GROUPS.map((sectionsGroup) => (
                <SectionsGroup key={sectionsGroup.id} {...sectionsGroup} />
            ))}
        </>
    );
};
