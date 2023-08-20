import React, { ReactNode, forwardRef } from 'react';
import clsx from 'clsx';

import styles from './Typography.module.css';

type TypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
type TypographyWeight = 'thin' | 'normal' | 'medium' | 'bold';

type Typography = {
    children: ReactNode;
    className?: string;
    as?: TypographyTag;
    weight?: TypographyWeight;
};

const CLASS_NAME_MAPPER_FOR_TYPOGRAPHY: { [key in TypographyTag]?: string } = {
    h1: styles.typography_theme_h1,
    h2: styles.typography_theme_h2,
    h3: styles.typography_theme_h3,
    p: styles.typography_theme_p,
};

const CLASS_NAME_MAPPER_FOR_TYPOGRAPHY_WEIGHT: { [key in TypographyWeight]?: string } = {
    thin: styles.typography_weight_thin,
    normal: styles.typography_weight_normal,
    medium: styles.typography_weight_medium,
    bold: styles.typography_weight_bold,
};

export const Typography = forwardRef<HTMLParagraphElement, Typography>((props, ref) => {
    const { children, as = 'p', className, weight = 'normal' } = props;
    const Tag = as;

    return (
        <Tag
            ref={ref}
            className={clsx(
                styles.typography,
                className,
                CLASS_NAME_MAPPER_FOR_TYPOGRAPHY[as],
                CLASS_NAME_MAPPER_FOR_TYPOGRAPHY_WEIGHT[weight],
            )}
        >
            {children}
        </Tag>
    );
});
