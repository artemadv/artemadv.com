import React, { FC } from 'react';

import { SectionExtended } from '../../model/types';

import { TextWithRightContentItem } from './TextWithRightContentItem';

import { createStyleFromNodeFields } from '@/shared/libs';

export const TextWithRightContent: FC<SectionExtended> = (props) => {
    const { nodes, secondSlot } = props;
    const style = createStyleFromNodeFields(props);
    const node = nodes?.[0];

    if (!node) return null;

    return (
        <div style={style}>
            <TextWithRightContentItem {...node} secondSlot={secondSlot} />
        </div>
    );
};
