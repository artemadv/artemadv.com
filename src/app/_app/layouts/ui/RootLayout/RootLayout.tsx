import React, { FC, PropsWithChildren } from 'react';
import { Open_Sans as OpenSans } from 'next/font/google';
import clsx from 'clsx';

import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { Contacts } from '@/widgets/contacts';

import styles from './RootLayout.module.css';

const inter = OpenSans({ weight: ['300', '400', '600', '800'], subsets: ['cyrillic', 'latin'] });

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
        href: '/contacts',
        text: 'Contacts',
    },
    {
        id: '4',
        href: '/cv',
        text: 'CV',
    },
];

export const RootLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <html lang="en" className={styles.fullHeight}>
            <body className={clsx(inter.className, styles.rootLayout, styles.fullHeight)}>
                <Header navigationItems={FAKE_NAVIGATION_ITEMS} />
                <main>{children}</main>
                <Contacts />
                <Footer className={styles.rootLayout__footer} />
            </body>
        </html>
    );
};
