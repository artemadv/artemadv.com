import React, { FC } from 'react';
import clsx from 'clsx';
import parse from 'html-react-parser';

import { AdaptiveImage, Label, Typography, checkTypographyTag } from '@/shared/ui';
import { createStyleFromNodeFields } from '@/shared/libs';
import { Node } from '@/shared/api';

import styles from './ExperienceCard.module.css';

type ExperienceCard = Node & {
    className?: string;
};

export const ExperienceCard: FC<ExperienceCard> = (props) => {
    const { titleText, titleAs, image, subtitle: date, className, labels, description } = props;
    const style = createStyleFromNodeFields(props);

    return (
        <article style={style} className={clsx(styles.experienceCard, className)}>
            {image && (
                <div className={styles.experienceCard__imageWrapper}>
                    <AdaptiveImage src={image.url} alt={image.alt || ''} />
                </div>
            )}

            <div className={styles.experienceCard__info}>
                {date && (
                    <Typography as="p" weight="bold" className={styles.experienceCard__date}>
                        {parse(date)}
                    </Typography>
                )}

                {titleText && (
                    <Typography
                        as={checkTypographyTag(titleAs) ? titleAs : 'h3'}
                        size="h3"
                        weight="bold"
                        className={styles.experienceCard__title}
                    >
                        {parse(titleText)}
                    </Typography>
                )}

                {description?.value && (
                    <Typography className={styles.experienceCard__description}>
                        {parse(description.value)}
                    </Typography>
                )}

                {labels && (
                    <ul className={styles.experienceCard__labels}>
                        {labels.map((label) => (
                            <li key={label} className={styles.experienceCard__labelWrapper}>
                                <Label>{parse(label)}</Label>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </article>
    );
};
