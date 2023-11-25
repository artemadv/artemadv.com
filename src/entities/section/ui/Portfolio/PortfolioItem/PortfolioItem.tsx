import React, { FC } from 'react';
import parse from 'html-react-parser';

import { Node } from '@/entities/section/model/types';
import { Typography } from '@/shared/ui';

export const PortfolioItem: FC<Node> = (props) => {
    const {
        title: { text: titleText } = {},
        subtitle,
        style: { background, ...otherStyle } = {},
    } = props;

    return (
        <div style={otherStyle}>
            {titleText && (
                <Typography size="h1" weight="bold" style={{ background }}>
                    {parse(titleText)}
                </Typography>
            )}
            {subtitle && <Typography>{parse(subtitle)}</Typography>}
        </div>
    );
};
