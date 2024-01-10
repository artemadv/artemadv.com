import React, { FC } from 'react';
import clsx from 'clsx';
import parse from 'html-react-parser';

import { Typography, checkTypographyTag } from '@/shared/ui';
import { createStyleFromNodeFields } from '@/shared/libs';
import { Node } from '@/shared/api';

import styles from './TechnologyCard.module.css';

type TechnologyCard = Node & {
    className?: string;
};

export const TechnologyCard: FC<TechnologyCard> = (props) => {
    const { titleText, titleAs, description, className } = props;
    const style = createStyleFromNodeFields(props);

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

                {description?.value && (
                    <Typography className={styles.technologyCard__description}>
                        {parse(description.value)}
                    </Typography>
                )}
            </div>
        </article>
    );
};
