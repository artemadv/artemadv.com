import React, { FC, PropsWithChildren } from 'react';

import { Layout } from '../../model/types';
import { LayoutWrapper } from '../LayoutWrapper';

export const SimpleLayout: FC<PropsWithChildren<Layout>> = (props) => {
    const { children, params } = props;

    return <LayoutWrapper params={params}>{children}</LayoutWrapper>;
};
