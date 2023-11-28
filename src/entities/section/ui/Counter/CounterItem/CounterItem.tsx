import React, { FC } from 'react';
import parse from 'html-react-parser';
import clsx from 'clsx';

import { Typography } from '@/shared/ui';
import { Node } from '@/shared/types';

import styles from './CounterItem.module.css';

type CounterItem = Node & {
    className?: string;
};

export const CounterItem: FC<CounterItem> = (props) => {
    const { title: { text: titleText } = {}, subtitle, style, className } = props;

    return (
        <div style={style} className={clsx(styles.section, className)}>
            {titleText && (
                <Typography size="h1" weight="bold" className={styles.section__rectangle}>
                    {parse(titleText)}
                </Typography>
            )}
            {subtitle && (
                <Typography className={styles.section__text}>{parse(subtitle)}</Typography>
            )}
        </div>
    );
};
