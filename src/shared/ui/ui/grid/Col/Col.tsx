import React, { FC, PropsWithChildren, useMemo } from 'react';
import clsx from 'clsx';

import { Range } from '../../../types/grid';

import styles from './Col.module.css';

type Breakpoints = 'default' | 'mobile' | 'tablet' | 'desktop' | 'desktopLarge'; // 576 | 768 | 992 | 1200
type Size<T> = {
    [key in Breakpoints]?: T;
};
type ColSize = Size<Range<1, 13>>;
type Col = {
    size?: ColSize;
    className?: string;
};

const createSizeClassName = (size: ColSize) => {
    return Object.entries(size).map(([breakpoint, colSize]) => {
        return styles[`col_size_${breakpoint}${colSize}`];
    });
};

const DEFAULT_COL_SIZE: ColSize = { default: 12 };

export const Col: FC<PropsWithChildren<Col>> = (props) => {
    const { children, size, className } = props;
    const memoizedSize = useMemo(
        () => ({
            ...DEFAULT_COL_SIZE,
            ...(size || {}),
        }),
        [size],
    );

    return (
        <div className={clsx(styles.col, className, ...createSizeClassName(memoizedSize))}>
            {children}
        </div>
    );
};
