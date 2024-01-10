import React, { FC } from 'react';

import { Logotype } from '../Logotype';
import { Navigation } from '../Navigation';

import { Col, Container, Row } from '@/shared/ui';
import { useNavigation } from '@/shared/api/server-only';
import { MenuAvailable } from '@/shared/api';

import styles from './Header.module.css';

export const Header: FC = async () => {
    const { menu, loading: isLoading } = await useNavigation({
        variables: {
            name: MenuAvailable.HeaderMenu,
        },
    });

    return (
        <header className={styles.header}>
            <Container>
                <Row align="center">
                    <Col size={{ mobile: 4 }}>
                        <Logotype />
                    </Col>
                    <Col size={{ mobile: 8 }}>
                        <Navigation
                            isLoading={isLoading}
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
