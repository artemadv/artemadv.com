import React, { FC } from 'react';
import parse from 'html-react-parser';

import { Node } from '@/entities/section/model/types';
import { Typography } from '@/shared/ui';

import styles from './AboutMeItem.module.css';

export const AboutMeItem: FC<Node> = (props) => {
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
