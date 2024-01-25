'use client';

import React, { FC, PropsWithChildren, useMemo } from 'react';

import { CoreContext } from '@/shared/lib/client';

export const CoreProvider: FC<PropsWithChildren<CoreContext>> = ({ children, ...otherProps }) => {
    const memoizedValue = useMemo(
        () => ({
            ...otherProps,
        }),
        [otherProps],
    );

    return <CoreContext.Provider value={memoizedValue}>{children}</CoreContext.Provider>;
};
