import React, { FC } from 'react';
import clsx from 'clsx';
import parse from 'html-react-parser';

import { Node } from '@/shared/types';
import { Label, Typography, checkTypographyTag } from '@/shared/ui';

import styles from './PortfolioCard.module.css';

type PortfolioCard = Node & {
    className?: string;
};

const FAKE_LABELS_PROD = ['Production', 'React.js', 'Next.js', 'PostCss'];

export const PortfolioCard: FC<PortfolioCard> = (props) => {
    const {
        title: { text: titleText, as: titleAs } = {},
        subtitle,
        image,
        style: { background, ...otherStyles } = {},
        className,
    } = props;

    return (
        <article className={clsx(styles.portfolioCard, className)}>
            <div style={otherStyles} className={styles.portfolioCard__inner}>
                <div className={styles.portfolioCard__imageWrapper}>
                    {titleText && !image && (
                        <div style={{ background }} className={styles.portfolioCard__fakeImage}>
                            <Typography
                                as={checkTypographyTag(titleAs) ? titleAs : 'h3'}
                                size="h2"
                                weight="bold"
                                className={clsx(
                                    styles.portfolioCard__title,
                                    styles.portfolioCard__fakeImageTitle,
                                )}
                            >
                                {parse(titleText)}
                            </Typography>
                        </div>
                    )}
                </div>

                <ul className={styles.portfolioCard__labels}>
                    {FAKE_LABELS_PROD.map((label) => (
                        <li key={label} className={styles.portfolioCard__labelWrapper}>
                            <Label>{parse(label)}</Label>
                        </li>
                    ))}
                </ul>

                <div className={clsx(styles.portfolioCard__content)}>
                    {titleText && image && (
                        <Typography
                            as={checkTypographyTag(titleAs) ? titleAs : 'h3'}
                            size="h2"
                            weight="bold"
                            className={styles.portfolioCard__title}
                        >
                            {parse(titleText)}
                        </Typography>
                    )}

                    {subtitle && (
                        <Typography className={styles.portfolioCard__subtitle}>
                            {parse(subtitle)}
                        </Typography>
                    )}
                </div>
            </div>
        </article>
    );
};
