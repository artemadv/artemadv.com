import React, { FC } from 'react';
import clsx from 'clsx';

import { FAKE_FOOTER_SECTION } from '../../model/delete-constants';

import { Col, Container, Row, Typography } from '@/shared/ui';
import { PersonalCard } from '@/entities/contacts';

import styles from './Footer.module.css';

type Footer = {
    className?: string;
};

export const Footer: FC<Footer> = ({ className }) => {
    const { nodes } = FAKE_FOOTER_SECTION;

    return (
        <footer className={clsx(styles.footer, className)}>
            <Container>
                <Row>
                    {nodes?.length && (
                        <Col size={{ desktop: 6 }}>
                            <PersonalCard {...nodes[0]} />
                        </Col>
                    )}
                    <Col size={{ desktop: 6 }}>2</Col>
                </Row>
                <div className={styles.footer__bottom}>
                    <Typography className={styles.footer__text}>© artemadv</Typography>
                </div>
            </Container>
        </footer>
    );
};
