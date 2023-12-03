import React, { CSSProperties, FC, PropsWithChildren } from 'react';
import clsx from 'clsx';

import styles from './Label.module.css';

type Label = {
    style?: CSSProperties;
    className?: string;
};

export const Label: FC<PropsWithChildren<Label>> = (props) => {
    const { children, style, className } = props;

    return (
        <span style={style} className={clsx(styles.label, className)}>
            {children}
        </span>
    );
};
