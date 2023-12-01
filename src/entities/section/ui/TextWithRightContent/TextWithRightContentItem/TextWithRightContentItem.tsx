import React, { FC, useCallback } from 'react';
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
import { SectionExtended } from '@/entities/section/model/types';

import styles from './TextWithRightContentItem.module.css';

export const TextWithRightContentItem: FC<Node & Pick<SectionExtended, 'secondSlot'>> = (props) => {
    const {
        label,
        title: { text: titleText, as: titleAs } = {},
        subtitle,
        image: { alt: imageAlt, src: imageSrc } = {},
        style,
        actions,
        secondSlot,
    } = props;

    const colorTone = getColorToneByTextColor(style?.color);
    const needRightContent = secondSlot || (imageSrc && imageAlt);

    const RightContent = useCallback(() => {
        if (secondSlot) return secondSlot;
        if (imageSrc && imageAlt)
            return (
                <AdaptiveImage src={imageSrc} alt={imageAlt} className={styles.section__image} />
            );
        return null;
    }, [secondSlot, imageSrc, imageAlt]);

    return (
        <section className={styles.section} style={style}>
            <Container>
                <Row align="center">
                    <Col size={needRightContent ? { desktop: 7 } : undefined}>
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
                    {needRightContent && (
                        <Col size={{ desktop: 5 }}>
                            <RightContent />
                        </Col>
                    )}
                </Row>
            </Container>
        </section>
    );
};
