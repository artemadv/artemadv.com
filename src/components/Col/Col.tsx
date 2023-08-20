import React, { FC, ReactNode } from 'react';
import clsx from 'clsx';

import { Range } from '@/types';

import styles from './Col.module.css';

type Breakpoints = 'default' | 'mobile' | 'tablet' | 'desktop' | 'desktopLarge'; // 576 | 768 | 992 | 1200
type Size<T> = {
    [key in Breakpoints]?: T;
};
type ColSize = Size<Range<1, 13>>;
type Col = {
    children: ReactNode;
    size?: ColSize;
    className?: string;
};

const createSizeClassName = (size: ColSize) => {
    return Object.entries(size).map(([breakpoint, colSize]) => {
        return styles[`col_size_${breakpoint}${colSize}`];
    });
};

export const Col: FC<Col> = (props) => {
    const { children, size = { default: 12 }, className } = props;

    return (
        <div className={clsx(styles.col, className, ...createSizeClassName(size))}>{children}</div>
    );
};
