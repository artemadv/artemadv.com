'use client';

import React, { FC } from 'react';

import { SimpleLayout, Layout } from './layouts/client';

import { GlobalError as GlobalErrorInner, PropsWithError } from '@/entities/error/client';

import './styles/root.css';

export const GlobalError: FC<PropsWithError<Layout>> = (props) => {
    const { params, error, reset } = props;
    console.log('props_debug', props);
    return (
        <SimpleLayout params={params}>
            <GlobalErrorInner error={error} reset={reset} />
        </SimpleLayout>
    );
};
