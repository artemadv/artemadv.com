import React, { FC } from 'react';

import { RootLayout, BasicLayout } from '@/app/_app/layouts';

// Global styles
import '@/app/_app/styles/root.css';

export const Layout: FC<BasicLayout> = ({ children }) => {
    return <RootLayout>{children}</RootLayout>;
};
