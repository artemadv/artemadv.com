import React, { FC } from 'react';
import clsx from 'clsx';

import { Col, Container, Row, Social, Typography } from '@/shared/ui';
import { PersonalCard } from '@/entities/contact';
import { SectionType } from '@/entities/section';
import { getSectionGroups } from '@/shared/api';

import styles from './Footer.module.css';

type Footer = {
    className?: string;
};

export const Footer: FC<Footer> = async ({ className }) => {
    const { sections } = await getSectionGroups({
        variables: {
            path: 'widget-footer',
        },
    });

    const { nodes: mainNodes } =
        sections.find((section) => section?.sectionType === SectionType.Main) ?? {};
    const { nodes } = sections.find((section) => section?.sectionType === SectionType.Basic) ?? {};

    return (
        <footer className={clsx(styles.footer, className)}>
            <Container>
                <Row>
                    {nodes && (
                        <Col size={{ mediaTablet: 4, mediaDesktop: 5, mediaDesktopLarge: 7 }}>
                            <ul className={styles.footer__list}>
                                {nodes.map(({ actionTitle, actionUrl, special, id }) => (
                                    <li key={id} className={styles.footer__listItem}>
                                        <Social
                                            className={styles.footer__label}
                                            name={special}
                                            href={actionUrl?.[0]}
                                        >
                                            {actionTitle?.[0]}
                                        </Social>
                                    </li>
                                ))}
                            </ul>
                        </Col>
                    )}
                    {mainNodes && (
                        <Col size={{ mediaTablet: 8, mediaDesktop: 7, mediaDesktopLarge: 5 }}>
                            <PersonalCard
                                className={styles.footer__personalCard}
                                {...mainNodes[0]}
                            />
                        </Col>
                    )}
                </Row>
                <div className={styles.footer__bottom}>
                    <Typography className={styles.footer__text}>© artemadv</Typography>
                </div>
            </Container>
        </footer>
    );
};
