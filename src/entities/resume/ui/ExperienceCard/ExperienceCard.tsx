import React, { FC } from 'react';
import clsx from 'clsx';
import parse from 'html-react-parser';

import { Node } from '@/shared/types';
import { AdaptiveImage, Label, Typography, checkTypographyTag } from '@/shared/ui';

import styles from './ExperienceCard.module.css';

type ExperienceCard = Node & {
    className?: string;
};

const FAKE_LABELS_PROD = ['Production', 'React.js', 'Next.js', 'PostCss'];

export const ExperienceCard: FC<ExperienceCard> = (props) => {
    const {
        title: { text: titleText, as: titleAs } = {},
        image: { src: imageSrc, alt: imageAlt } = {},
        subtitle,
        style,
        className,
        label: date,
    } = props;

    return (
        <article style={style} className={clsx(styles.experienceCard, className)}>
            {imageSrc && imageAlt && (
                <div className={styles.experienceCard__imageWrapper}>
                    <AdaptiveImage src={imageSrc} alt={imageAlt} />
                </div>
            )}

            <div className={styles.experienceCard__info}>
                {titleText && (
                    <Typography
                        as={checkTypographyTag(titleAs) ? titleAs : 'h3'}
                        size="h2"
                        weight="bold"
                        className={styles.experienceCard__title}
                    >
                        {parse(titleText)}
                    </Typography>
                )}

                {date && (
                    <Typography as="p" weight="bold" className={styles.experienceCard__date}>
                        {parse(date)}
                    </Typography>
                )}

                {subtitle && (
                    <Typography className={styles.experienceCard__subtitle}>
                        {parse(subtitle)}
                    </Typography>
                )}

                <ul className={styles.experienceCard__labels}>
                    {FAKE_LABELS_PROD.map((label) => (
                        <li key={label} className={styles.experienceCard__labelWrapper}>
                            <Label>{parse(label)}</Label>
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
};
