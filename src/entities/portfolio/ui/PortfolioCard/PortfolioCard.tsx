import React, { FC } from 'react';
import clsx from 'clsx';
import parse from 'html-react-parser';

import { AdaptiveImage, Label, Typography } from '@/shared/ui';
import { createStyleFromNodeFields } from '@/shared/lib';
import { Node } from '@/shared/api';

import styles from './PortfolioCard.module.css';

type PortfolioCard = Node & {
    className?: string;
};

export const PortfolioCard: FC<PortfolioCard> = (props) => {
    const { titleText, titleAs, description, image, className, labels, subtitle: date } = props;
    const style = createStyleFromNodeFields(props);

    return (
        <article className={clsx(styles.portfolioCard, className)}>
            <div style={style} className={styles.portfolioCard__inner}>
                <div className={styles.portfolioCard__imageWrapper}>
                    {image && (
                        <AdaptiveImage
                            src={image.url}
                            alt={image.alt || ''}
                            className={styles.portfolioCard__image}
                        />
                    )}

                    {date && (
                        <Typography
                            className={styles.portfolioCard__date}
                            style={{ background: style.background }}
                        >
                            {parse(date)}
                        </Typography>
                    )}
                </div>

                <div className={clsx(styles.portfolioCard__content)}>
                    {titleText && image && (
                        <Typography
                            as={titleAs}
                            size="h2"
                            weight="bold"
                            className={styles.portfolioCard__title}
                        >
                            {parse(titleText)}
                        </Typography>
                    )}

                    {description?.value && (
                        <Typography className={styles.portfolioCard__description}>
                            {parse(description.value)}
                        </Typography>
                    )}

                    {labels && (
                        <ul className={styles.portfolioCard__labels}>
                            {labels.map((label) => (
                                <li key={label} className={styles.portfolioCard__labelWrapper}>
                                    <Label>{parse(label)}</Label>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </article>
    );
};
