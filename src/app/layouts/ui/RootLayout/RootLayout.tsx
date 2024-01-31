import React, { FC, PropsWithChildren } from 'react';

import { Layout } from '../../model/types';
import { LayoutWrapper } from '../LayoutWrapper';

import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { Contact } from '@/widgets/contact';

import styles from './RootLayout.module.css';

export const RootLayout: FC<PropsWithChildren<Layout>> = (props) => {
    const { children, params } = props;

    return (
        <LayoutWrapper params={params} className={styles.rootLayout}>
            <Header />
            <main>
                {children}
                <Contact />
            </main>
            <Footer className={styles.rootLayout__footer} />
        </LayoutWrapper>
    );
};
