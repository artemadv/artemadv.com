import React, { FC, PropsWithChildren } from 'react';

import { ApolloProviderWrapper, CoreProvider } from './providers';
import { RootLayout as LayoutInner, Layout } from './layouts';

import { getOrigin } from '@/shared/lib/server';

import './styles/root.css';

export const RootLayout: FC<PropsWithChildren<Layout>> = ({ children, params }) => {
    const origin = getOrigin();

    return (
        <CoreProvider origin={origin}>
            <ApolloProviderWrapper>
                <LayoutInner params={params}>{children}</LayoutInner>
            </ApolloProviderWrapper>
        </CoreProvider>
    );
};
