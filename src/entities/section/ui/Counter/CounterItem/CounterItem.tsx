import React, { FC } from 'react';
import parse from 'html-react-parser';

import { Typography } from '@/shared/ui';
import { Node } from '@/shared/types';

import styles from './CounterItem.module.css';

export const CounterItem: FC<Node> = (props) => {
    const {
        title: { text: titleText } = {},
        subtitle,
        style: { background, ...otherStyle } = {},
    } = props;

    return (
        <div style={otherStyle} className={styles.section}>
            {titleText && (
                <Typography
                    size="h1"
                    weight="bold"
                    className={styles.section__title}
                    style={{ background }}
                >
                    {parse(titleText)}
                </Typography>
            )}
            {subtitle && (
                <Typography className={styles.section__subtitle}>{parse(subtitle)}</Typography>
            )}
        </div>
    );
};
