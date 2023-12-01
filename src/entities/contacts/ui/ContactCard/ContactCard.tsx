import React, { FC } from 'react';
import clsx from 'clsx';
import parse from 'html-react-parser';

import { Node } from '@/shared/types';
import { Typography, checkTypographyTag } from '@/shared/ui';

import styles from './ContactCard.module.css';

type ContactCard = Node & {
    className?: string;
};

export const ContactCard: FC<ContactCard> = (props) => {
    const { title: { text: titleText, as: titleAs } = {}, subtitle, style, className } = props;

    return (
        <article style={style} className={clsx(styles.contactCard, className)}>
            {titleText && (
                <Typography
                    as={checkTypographyTag(titleAs) ? titleAs : 'h4'}
                    size="h3"
                    weight="bold"
                    className={styles.contactCard__title}
                >
                    {parse(titleText)}
                </Typography>
            )}

            {subtitle && (
                <Typography className={styles.contactCard__subtitle}>{parse(subtitle)}</Typography>
            )}
        </article>
    );
};
