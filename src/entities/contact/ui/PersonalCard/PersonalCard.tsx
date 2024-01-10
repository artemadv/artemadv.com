import React, { FC } from 'react';
import clsx from 'clsx';
import parse from 'html-react-parser';

import { Node } from '@/shared/api';
import { AdaptiveImage, Typography, checkTypographyTag } from '@/shared/ui';
import { createStyleFromNodeFields } from '@/shared/libs';

import styles from './PersonalCard.module.css';

type PersonalCard = Node & {
    className?: string;
};

export const PersonalCard: FC<PersonalCard> = (props) => {
    const { titleText, titleAs, image, className } = props;
    const style = createStyleFromNodeFields(props);

    return (
        <div style={style} className={clsx(styles.personalCard, className)}>
            {image && (
                <div className={styles.personalCard__imageWrapper}>
                    <AdaptiveImage src={image.url} alt={image.alt || ''} />
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
            </div>
        </div>
    );
};
