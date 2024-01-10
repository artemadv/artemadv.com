'use client';

import React, { FC, PropsWithChildren } from 'react';
import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support/ssr';

import { makeClient } from '@/shared/api';

export const ApolloWrapper: FC<PropsWithChildren> = ({ children }) => {
    return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>;
};
