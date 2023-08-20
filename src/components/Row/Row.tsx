import React, { FC, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './Row.module.css';

type TRow = {
    children: ReactNode;
    className?: string;
};

export const Row: FC<TRow> = (props) => {
    const { children, className } = props;

    return <div className={clsx(styles.row, className)}>{children}</div>;
};
