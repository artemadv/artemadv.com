'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import parse from 'html-react-parser';

import { INode } from '@/types';
import { Container } from '@/components/Container';
import { Row } from '@/components/Row';
import { Col } from '@/components/Col';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { getButtonColorByTextColor } from '@/utils';

import styles from './TextWithImage.module.css';

export const TextWithImage: FC<INode> = (props) => {
    const { title, subtitle, image: { alt: imageAlt, src: imageSrc } = {}, style, actions } = props;
    const hasImage = imageAlt && imageSrc;
    const buttonColor = getButtonColorByTextColor(style?.color);

    return (
        <section className={styles.section} style={style}>
            <Container>
                <Row>
                    <Col size={hasImage ? { default: 12, tablet: 7 } : undefined}>
                        {title && (
                            <Typography as="h1" weight="medium">
                                {parse(title)}
                            </Typography>
                        )}
                        {subtitle && (
                            <Typography as="p" className={styles.section__subtitle}>
                                {parse(subtitle)}
                            </Typography>
                        )}
                        {Boolean(actions) && (
                            <ul className={styles.section__buttons}>
                                {actions?.map(({ id, text, href }, index) => (
                                    <li key={id} className={styles.section__buttonWrapper}>
                                        <Button
                                            href={href}
                                            theme={index !== 0 ? 'outlined' : undefined}
                                            size="l"
                                            color={buttonColor}
                                        >
                                            {parse(text)}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </Col>
                    {hasImage && (
                        <Col
                            size={{ default: 12, tablet: 5 }}
                            className={styles.section__imageWrapper}
                        >
                            <div>
                                <div>
                                    <Image
                                        src={imageSrc}
                                        alt={imageAlt}
                                        className={styles.section__image}
                                        fill
                                    />
                                </div>
                            </div>
                        </Col>
                    )}
                </Row>
            </Container>
        </section>
    );
};
