import React, { FC, PropsWithChildren, useMemo } from 'react';
import clsx from 'clsx';
import parse from 'html-react-parser';
import Link from 'next/link';

import { Typography } from '@/shared/ui';
import { createActionsFromNodeFields, createStyleFromNodeFields } from '@/shared/lib';
import { Node } from '@/shared/api';

import styles from './ContactCard.module.css';

type ContactCard = Node & {
    className?: string;
};

const ContactCardWrapper: FC<
    PropsWithChildren<Omit<ContactCard, 'titleText' | 'titleAs' | 'description'>>
> = (props) => {
    const { children, className } = props;
    const style = createStyleFromNodeFields(props);
    const action = createActionsFromNodeFields(props)?.[0];
    const memoizedDefaultProps = useMemo(
        () => ({
            style,
            className: clsx(styles.contactCard, className),
        }),
        [style, className],
    );

    if (action) {
        return (
            <Link href={action.href} target="_blank" {...memoizedDefaultProps}>
                {children}
            </Link>
        );
    }

    return <article {...memoizedDefaultProps}>{children}</article>;
};

export const ContactCard: FC<ContactCard> = (props) => {
    const { titleText, titleAs, description, ...otherProps } = props;

    return (
        <ContactCardWrapper {...otherProps}>
            {titleText && (
                <Typography
                    as={titleAs}
                    size="h3"
                    weight="bold"
                    className={styles.contactCard__title}
                >
                    {parse(titleText)}
                </Typography>
            )}

            {description?.value && (
                <Typography className={styles.contactCard__description}>
                    {parse(description.value)}
                </Typography>
            )}
        </ContactCardWrapper>
    );
};
