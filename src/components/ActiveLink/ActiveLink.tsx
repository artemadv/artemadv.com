'use client';

import React, { ComponentProps, FC } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

type ActiveLink = ComponentProps<typeof Link> & {
    activeClassName?: string;
};

export const ActiveLink: FC<ActiveLink> = (props) => {
    const { children, className, activeClassName, href, ...otherProps } = props;
    const pathname = usePathname();

    const needActiveClassName = pathname === href;

    return (
        <Link
            href={href}
            className={clsx(className, needActiveClassName && activeClassName)}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
