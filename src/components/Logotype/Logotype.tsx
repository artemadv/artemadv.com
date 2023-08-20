import React, { FC } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

import styles from './Logotype.module.css';

type TLogotype = {
    className?: string;
};

export const Logotype: FC<TLogotype> = (props) => {
    const { className } = props;

    return (
        <Link className={clsx(styles.logotype, className)} href="/">
            artem<span className={styles.logotype__selectedText}>adv</span>
        </Link>
    );
};
