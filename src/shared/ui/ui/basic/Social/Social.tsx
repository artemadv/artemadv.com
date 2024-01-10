import React, { CSSProperties, FC, PropsWithChildren } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

import styles from './Social.module.css';

export type Social = {
    href?: string;
    name?: string | null;
    style?: CSSProperties;
    className?: string;
};

const CLASS_NAME_MAPPER_FOR_SOCIAL: { [key: string]: string } = {
    LinkedIn: styles.social_theme_linkedIn,
    GitHub: styles.social_theme_gitHub,
    default: styles.social_theme_default,
};

export const Social: FC<PropsWithChildren<Social>> = (props) => {
    const { href, className, style, name, children } = props;

    return (
        <Link
            style={style}
            href={href || '/'}
            target="_blank"
            className={clsx(
                styles.social,
                className,
                CLASS_NAME_MAPPER_FOR_SOCIAL[name || 'default'],
            )}
        >
            {children}
        </Link>
    );
};
