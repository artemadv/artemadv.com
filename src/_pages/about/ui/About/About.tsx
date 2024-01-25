import React, { FC } from 'react';
import type { Metadata } from 'next';

import { SectionsGroup } from '@/widgets/section-groups';
import { getPageConfig } from '@/shared/api';

const PATH = 'about';

export const generateMetadata = async (): Promise<Metadata> => {
    const { seo } = await getPageConfig({ variables: { path: PATH } });

    return seo;
};

export const About: FC = async () => {
    const { sectionsGroup } = await getPageConfig({ variables: { path: PATH } });

    return (
        <>
            {sectionsGroup.map((group) => (
                <SectionsGroup key={group.id} {...group} />
            ))}
        </>
    );
};
