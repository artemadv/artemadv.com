import React, { FC, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './Container.module.css';

type Container = {
    children: ReactNode;
    className?: string;
    fullWidth?: boolean;
};

export const Container: FC<Container> = (props) => {
    const { children, fullWidth, className } = props;

    return (
        <div
            className={clsx(styles.container, className, {
                [styles.container_fullWidth]: fullWidth,
            })}
        >
            {children}
        </div>
    );
};
