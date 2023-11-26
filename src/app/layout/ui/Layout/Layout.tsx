/* eslint-disable boundaries/element-types */
import React, { FC, PropsWithChildren } from 'react';

import { RootLayout } from '@/app/_app/layouts';
// Global styles
import '@/app/_app/styles/root.css';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
    return <RootLayout>{children}</RootLayout>;
};
