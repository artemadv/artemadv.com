import React, { FC } from 'react';

import { Logotype } from '../Logotype';
import { Navigation } from '../Navigation';

import { Col, Container, Row } from '@/shared/ui';
import { getNavigation, MenuAvailable } from '@/shared/api';
import { SwitchLocale } from '@/features/switch-locale';

import styles from './Header.module.css';

export const Header: FC = async () => {
    const { menu } = await getNavigation({
        variables: {
            name: MenuAvailable.HeaderMenu,
        },
    });

    return (
        <header className={styles.header}>
            <Container>
                <Row align="center">
                    <Col size={{ default: 6, mediaTablet: 4 }}>
                        <Logotype />
                    </Col>
                    <Col size={{ default: 6, mediaTablet: 2 }} order={{ mediaTablet: 3 }}>
                        <SwitchLocale className={styles.header__locale} />
                    </Col>
                    <Col size={{ mediaTablet: 6 }} order={{ mediaTablet: 2 }}>
                        <Navigation
                            className={styles.header__navigation}
                            classNameList={styles.header__navigationList}
                            menu={menu}
                        />
                    </Col>
                </Row>
            </Container>
        </header>
    );
};
