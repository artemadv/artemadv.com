import React, { FC, PropsWithChildren } from 'react';
import { Open_Sans as OpenSans } from 'next/font/google';
import clsx from 'clsx';

import { Layout } from '../../model/types';

import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { Contact } from '@/widgets/contact';

import styles from './RootLayout.module.css';

const inter = OpenSans({ weight: ['300', '400', '600', '800'], subsets: ['cyrillic', 'latin'] });

export const RootLayout: FC<PropsWithChildren<Layout>> = ({ children, params: { locale } }) => {
    return (
        <html lang={locale} className={styles.fullHeight}>
            <body className={clsx(inter.className, styles.rootLayout, styles.fullHeight)}>
                <Header />
                <main>{children}</main>
                <Contact />
                <Footer className={styles.rootLayout__footer} />
            </body>
        </html>
    );
};
