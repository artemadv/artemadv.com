import React, { FC } from 'react';

import { Section } from '../../model/types';

import { CounterItem } from './CounterItem';

import { Container, Row, Col } from '@/shared/ui';

import styles from './Counter.module.css';

export const Counter: FC<Section> = (props) => {
    const { style, nodes } = props;

    return (
        <div style={style}>
            <Container>
                <Row>
                    <Col>
                        <hr className={styles.hr} />
                    </Col>
                    {nodes?.map((node) => (
                        <Col key={node.id} size={{ mobile: 6, desktop: 4, desktopLarge: 3 }}>
                            <CounterItem {...node} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};
