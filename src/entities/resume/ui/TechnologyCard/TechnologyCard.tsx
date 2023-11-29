import React, { FC } from 'react';
import clsx from 'clsx';
import parse from 'html-react-parser';

import { Node } from '@/shared/types';
import { Typography, checkTypographyTag } from '@/shared/ui';

import styles from './TechnologyCard.module.css';

type TechnologyCard = Node & {
    className?: string;
};

export const TechnologyCard: FC<TechnologyCard> = (props) => {
    const { title: { text: titleText, as: titleAs } = {}, subtitle, style, className } = props;

    return (
        <article style={style} className={clsx(styles.technologyCard, className)}>
            <div className={styles.technologyCard__inner}>
                {titleText && (
                    <Typography
                        as={checkTypographyTag(titleAs) ? titleAs : 'h3'}
                        size="h2"
                        weight="bold"
                        className={styles.technologyCard__title}
                    >
                        {parse(titleText)}
                    </Typography>
                )}

                {subtitle && (
                    <Typography className={styles.technologyCard__subtitle}>
                        {parse(subtitle)}
                    </Typography>
                )}
            </div>
        </article>
    );
};
