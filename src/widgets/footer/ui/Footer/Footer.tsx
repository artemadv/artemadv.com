import React, { FC } from 'react';
import clsx from 'clsx';

import styles from './Footer.module.css';

type Footer = {
    className?: string;
    text?: string;
};

export const Footer: FC<Footer> = (props) => {
    const { text = 'подвал', className } = props;

    return <footer className={clsx(styles.footer, className)}>{text}</footer>;
};
