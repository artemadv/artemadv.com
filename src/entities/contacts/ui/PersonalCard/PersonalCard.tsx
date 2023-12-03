import React, { FC } from 'react';
import clsx from 'clsx';
import parse from 'html-react-parser';

import { Node } from '@/shared/types';
import { AdaptiveImage, Typography, checkTypographyTag } from '@/shared/ui';

import styles from './PersonalCard.module.css';

type PersonalCard = Node & {
    className?: string;
};

export const PersonalCard: FC<PersonalCard> = (props) => {
    const {
        title: { text: titleText, as: titleAs } = {},
        image: { src: imageSrc, alt: imageAlt } = {},
        subtitle,
        style,
        className,
    } = props;

    return (
        <div style={style} className={clsx(styles.personalCard, className)}>
            {imageSrc && imageAlt && (
                <div className={styles.personalCard__imageWrapper}>
                    <AdaptiveImage src={imageSrc} alt={imageAlt} />
                </div>
            )}
            <div className={styles.personalCard__info}>
                {titleText && (
                    <Typography
                        as={checkTypographyTag(titleAs) ? titleAs : 'h4'}
                        size="h4"
                        weight="bold"
                        className={styles.personalCard__title}
                    >
                        {parse(titleText)}
                    </Typography>
                )}

                {subtitle && (
                    <Typography className={styles.personalCard__subtitle}>
                        {parse(subtitle)}
                    </Typography>
                )}
            </div>
        </div>
    );
};
