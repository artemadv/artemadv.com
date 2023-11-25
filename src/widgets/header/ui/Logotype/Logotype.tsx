import React, { FC } from 'react';
import clsx from 'clsx';

import { Button } from '@/shared/ui';

import styles from './Logotype.module.css';

export const Logotype: FC<Pick<Button, 'className'>> = (props) => {
    const { className } = props;

    return (
        <Button className={clsx(styles.logotype, className)} size="m" color="blue" href="/">
            artem<span className={styles.logotype__selectedText}>adv</span>
        </Button>
    );
};
