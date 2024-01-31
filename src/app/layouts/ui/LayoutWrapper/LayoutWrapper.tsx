import React, { FC, PropsWithChildren } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Open_Sans as OpenSans } from 'next/font/google';
import clsx from 'clsx';

import { Layout } from '../../model/types';

import styles from './LayoutWrapper.module.css';

const inter = OpenSans({ weight: ['300', '400', '600', '800'], subsets: ['cyrillic', 'latin'] });

export const LayoutWrapper: FC<PropsWithChildren<Layout & { className?: string }>> = (props) => {
    const {
        children,
        params: { locale },
        className,
    } = props;

    return (
        <html lang={locale} className={clsx(styles.fullHeight, styles.html)}>
            <body className={clsx(inter.className, styles.fullHeight, styles.layout, className)}>
                {children}
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
};
