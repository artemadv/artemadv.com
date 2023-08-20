import React, { FC } from 'react';

import { Col } from '@/components/Col';
import { Row } from '@/components/Row';
import { Logotype } from '@/components/Logotype';
import { Container } from '@/components/Container';
import { Navigation } from '@/components/Navigation';
import { INavigationItem } from '@/types';

import styles from './Header.module.css';

type Header = {
    navigationItems?: INavigationItem[];
};

export const Header: FC<Header> = (props) => {
    const { navigationItems } = props;

    return (
        <header className={styles.header}>
            <Container>
                <Row className={styles.header__row}>
                    <Col size={{ default: 12, mobile: 4 }}>
                        <Logotype />
                    </Col>
                    <Col size={{ default: 12, mobile: 8 }}>
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
