'use client';

import React, { FC } from 'react';

import { SimpleLayout } from './layouts/client';

import { GlobalError as GlobalErrorInner, PropsWithError } from '@/entities/error/client';

import './styles/root.css';

export const GlobalError: FC<PropsWithError> = (props) => {
    const { error, reset } = props;

    return (
        <SimpleLayout>
            <GlobalErrorInner error={error} reset={reset} />
        </SimpleLayout>
    );
};
