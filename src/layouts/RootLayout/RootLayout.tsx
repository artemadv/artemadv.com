import React, { FC } from 'react';
import { Open_Sans as OpenSans } from 'next/font/google';
import clsx from 'clsx';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BasicLayout } from '@/types';

import '@/styles/root.css';
import styles from './RootLayout.module.css';

const inter = OpenSans({ weight: ['300', '400', '600', '800'], subsets: ['cyrillic', 'latin'] });

export const metadata = {
    title: 'RootLayout title',
    description: 'RootLayout description',
};

const FAKE_NAVIGATION_ITEMS = [
    {
        id: '1',
        href: '/',
        text: 'Home',
    },
    {
        id: '2',
        href: '/about',
        text: 'About',
    },
    {
        id: '3',
        href: '/about',
        text: 'Contacts',
    },
    {
        id: '4',
        href: '/cv',
        text: 'CV',
    },
];

export const RootLayout: FC<BasicLayout> = ({ children }) => {
    return (
        <html lang="en" className={styles.fullHeight}>
            <body className={clsx(inter.className, styles.rootLayout, styles.fullHeight)}>
                <Header navigationItems={FAKE_NAVIGATION_ITEMS} />
                <main>{children}</main>
                <Footer className={styles.rootLayout__footer} />
            </body>
        </html>
    );
};
