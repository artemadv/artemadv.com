import React, { FC } from 'react';

import { SectionExtended } from '../../model/types';

import { TextWithRightContentItem } from './TextWithRightContentItem';

export const TextWithRightContent: FC<SectionExtended> = (props) => {
    const { style, nodes, secondSlot } = props;
    const node = nodes?.[0];

    if (!node) return null;

    return (
        <div style={style}>
            <TextWithRightContentItem {...node} secondSlot={secondSlot} />
        </div>
    );
};
