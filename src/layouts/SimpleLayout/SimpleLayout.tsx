import React, { FC } from 'react';
import { Roboto } from 'next/font/google';

import { BasicLayout } from '@/types/layouts';

const inter = Roboto({ weight: '400', subsets: ['cyrillic', 'latin'] });

export const metadata = {
    title: 'SimpleLayout title',
    description: 'SimpleLayout description',
};

export const SimpleLayout: FC<BasicLayout> = ({ children }) => {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
};
