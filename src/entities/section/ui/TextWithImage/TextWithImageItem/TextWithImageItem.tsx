import React, { FC } from 'react';
import parse from 'html-react-parser';
import clsx from 'clsx';

import { getColorToneByTextColor } from '@/shared/libs';
import {
    AdaptiveImage,
    Button,
    Col,
    Container,
    Row,
    Typography,
    checkTypographyTag,
} from '@/shared/ui';
import { Node } from '@/shared/types';

import styles from './TextWithImageItem.module.css';

export const TextWithImageItem: FC<Node> = (props) => {
    const {
        label,
        title: { text: titleText, as: titleAs } = {},
        subtitle,
        image: { alt: imageAlt, src: imageSrc } = {},
        style,
        actions,
    } = props;
    const hasImage = imageAlt && imageSrc;
    const colorTone = getColorToneByTextColor(style?.color);

    return (
        <section className={styles.section} style={style}>
            <Container>
                <Row align="center">
                    <Col size={hasImage ? { desktop: 7 } : undefined}>
                        {label && (
                            <Typography
                                as="span"
                                weight="medium"
                                className={clsx(styles.section__label, {
                                    [styles.section__label_theme_light]: colorTone === 'light',
                                    [styles.section__label_theme_dark]: colorTone === 'dark',
                                })}
                            >
                                {parse(label)}
                            </Typography>
                        )}
                        {titleText && (
                            <Typography
                                as={checkTypographyTag(titleAs) ? titleAs : 'h1'}
                                weight="medium"
                                className={styles.section__title}
                            >
                                {parse(titleText)}
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
                                            color={colorTone}
                                            className={styles.section__button}
                                        >
                                            {parse(text)}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </Col>
                    {hasImage && (
                        <Col size={{ desktop: 5 }}>
                            <AdaptiveImage
                                src={imageSrc}
                                alt={imageAlt}
                                className={styles.section__image}
                            />
                        </Col>
                    )}
                </Row>
            </Container>
        </section>
    );
};
