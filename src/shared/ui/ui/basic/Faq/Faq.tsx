'use client';

import React, { CSSProperties, FC, useMemo, useState } from 'react';
import clsx from 'clsx';
import parse from 'html-react-parser';

import { Typography } from '../Typography';

import styles from './Faq.module.css';

type FaqColor = 'light' | 'dark';
type Faq = {
    title: string;
    description: string;
    isOpen?: boolean;
    color?: FaqColor;
    style?: CSSProperties;
    className?: string;
};

const CLASS_NAME_MAPPER_FOR_ICON_COLOR = {
    light: styles.faq__icon_color_light,
    dark: styles.faq__icon_color_dark,
};

export const Faq: FC<Faq> = (props) => {
    const { style, className, title, description, color = 'dark', isOpen: isOpenFromProps } = props;

    const [isOpen, setIsOpen] = useState(isOpenFromProps ?? false);

    const handlerClickToChangeOpen = () => {
        setIsOpen(!isOpen);
    };

    const memoizedDescriptionStyle = useMemo(() => {
        if (isOpen) {
            return {
                gridTemplateRows: '1fr',
                opacity: 1,
            };
        }

        return {
            gridTemplateRows: '0fr',
            opacity: 0,
        };
    }, [isOpen]);

    return (
        <dl style={style} className={clsx(styles.faq, className)}>
            <dt className={styles.faq__title}>
                <button
                    type="button"
                    className={styles.faq__titleButton}
                    onClick={handlerClickToChangeOpen}
                >
                    <Typography as="span" size="h3" weight="medium">
                        {parse(title)}
                    </Typography>
                    <span
                        className={clsx(styles.faq__icon, CLASS_NAME_MAPPER_FOR_ICON_COLOR[color])}
                    >
                        {'>'}
                    </span>
                </button>
            </dt>
            <dd className={styles.faq__descriptionWrapper} style={memoizedDescriptionStyle}>
                <div className={styles.faq__descriptionHidden}>
                    <Typography as="p" className={styles.faq__description}>
                        {parse(description)}
                    </Typography>
                </div>
            </dd>
        </dl>
    );
};
