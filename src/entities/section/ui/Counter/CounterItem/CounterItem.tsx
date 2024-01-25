import React, { FC } from 'react';
import parse from 'html-react-parser';
import clsx from 'clsx';

import { Typography } from '@/shared/ui';
import { createStyleFromNodeFields } from '@/shared/lib';
import { Node } from '@/shared/api';

import styles from './CounterItem.module.css';

type CounterItem = Node & {
    className?: string;
};

export const CounterItem: FC<CounterItem> = (props) => {
    const { titleText, description, className } = props;
    const style = createStyleFromNodeFields(props);

    return (
        <div style={style} className={clsx(styles.section, className)}>
            {titleText && (
                <Typography size="h1" weight="bold" className={styles.section__rectangle}>
                    {parse(titleText)}
                </Typography>
            )}
            {description?.value && (
                <Typography className={styles.section__text}>{parse(description.value)}</Typography>
            )}
        </div>
    );
};
