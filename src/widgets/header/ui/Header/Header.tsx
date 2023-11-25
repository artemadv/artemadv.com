import React, { FC } from 'react';

import { Logotype } from '../Logotype';
import { Navigation } from '../Navigation';
import { NavigationItem } from '../../model/types';

import { Col, Container, Row } from '@/shared/ui';

import styles from './Header.module.css';

type Header = {
    navigationItems?: NavigationItem[];
};

export const Header: FC<Header> = (props) => {
    const { navigationItems } = props;

    return (
        <header className={styles.header}>
            <Container>
                <Row align="center">
                    <Col size={{ mobile: 4 }}>
                        <Logotype />
                    </Col>
                    <Col size={{ mobile: 8 }}>
                        <Navigation
                            className={styles.header__navigation}
                            classNameList={styles.header__navigationList}
                            items={navigationItems}
                        />
                    </Col>
                </Row>
            </Container>
        </header>
    );
};
