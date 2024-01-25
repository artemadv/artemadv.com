import React, { FC } from 'react';

import { CounterItem } from './CounterItem';

import { Container, Row, Col } from '@/shared/ui';
import { createStyleFromNodeFields } from '@/shared/lib';
import { Section } from '@/shared/api';

export const Counter: FC<Section> = (props) => {
    const { nodes } = props;
    const style = createStyleFromNodeFields(props);

    return (
        <div style={style}>
            <Container>
                <Row>
                    {nodes?.map((node) => (
                        <Col
                            key={node.id}
                            size={{ mediaMobile: 6, mediaDesktop: 4, mediaDesktopLarge: 3 }}
                        >
                            <CounterItem {...node} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};
