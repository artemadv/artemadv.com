import React, { FC } from 'react';

import { SectionsGroup } from '@/widgets/section-groups';
import { usePageConfig } from '@/shared/api/server-only';

export const Home: FC = async () => {
    const { sectionsGroup } = await usePageConfig({
        variables: {
            path: 'home',
        },
    });

    return (
        <>
            {sectionsGroup.map((group) => (
                <SectionsGroup key={group.id} {...group} />
            ))}
        </>
    );
};
