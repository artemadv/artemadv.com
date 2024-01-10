import React, { FC, useCallback } from 'react';
import parse from 'html-react-parser';
import clsx from 'clsx';

import {
    createStyleFromNodeFields,
    getColorToneByTextColor,
    createActionsFromNodeFields,
} from '@/shared/libs';
import {
    AdaptiveImage,
    Button,
    Col,
    Container,
    Row,
    Typography,
    checkTypographyTag,
} from '@/shared/ui';
import { Node } from '@/shared/api';
import { SectionExtended } from '@/entities/section/model/types';

import styles from './TextWithRightContentItem.module.css';

export const TextWithRightContentItem: FC<Node & Pick<SectionExtended, 'secondSlot'>> = (props) => {
    const { titleAs, titleText, subtitle, image, secondSlot, description } = props;

    const style = createStyleFromNodeFields(props);
    const actions = createActionsFromNodeFields(props);
    const colorTone = getColorToneByTextColor(style?.color);
    const needRightContent = secondSlot || image;

    const RightContent = useCallback(() => {
        if (secondSlot) return secondSlot;
        if (image) {
            return (
                <AdaptiveImage
                    src={image.url}
                    alt={image.alt || ''}
                    className={styles.section__image}
                />
            );
        }
        return null;
    }, [secondSlot, image]);

    return (
        <section className={styles.section} style={style}>
            <Container>
                <Row align="center">
                    <Col size={needRightContent ? { desktop: 7 } : undefined}>
                        {subtitle && (
                            <Typography
                                as="span"
                                weight="medium"
                                className={clsx(styles.section__subtitle, {
                                    [styles.section__subtitle_theme_light]: colorTone === 'light',
                                    [styles.section__subtitle_theme_dark]: colorTone === 'dark',
                                })}
                            >
                                {parse(subtitle)}
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
                        {description?.value && (
                            <Typography as="p" className={styles.section__description}>
                                {parse(description.value)}
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
