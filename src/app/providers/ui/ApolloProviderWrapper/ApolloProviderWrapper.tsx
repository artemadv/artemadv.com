'use client';

import React, { FC, PropsWithChildren } from 'react';
import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support/ssr';

import { useMakeClient } from '@/shared/api/client';

export const ApolloProviderWrapper: FC<PropsWithChildren> = ({ children }) => {
    const makeClient = useMakeClient();

    return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>;
};
