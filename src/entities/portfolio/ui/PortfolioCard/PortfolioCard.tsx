'use client';

import React, { FC } from 'react';

import { Node } from '@/shared/types';

export const PortfolioCard: FC<Node> = (props) => {
    const { title } = props;

    return <div>{title?.text}</div>;
};
