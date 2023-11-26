import React, { PropsWithChildren, forwardRef } from 'react';
import clsx from 'clsx';

import { TypographyTag } from '@/shared/ui/types/basic';

import styles from './Typography.module.css';

type TypographyWeight = 'thin' | 'normal' | 'medium' | 'bold';
type Typography = {
    className?: string;
    as?: TypographyTag;
    size?: TypographyTag;
    weight?: TypographyWeight;
    style?: React.CSSProperties;
};

const CLASS_NAME_MAPPER_FOR_TYPOGRAPHY_SIZE: { [key in TypographyTag]?: string } = {
    h1: styles.typography_size_h1,
    h2: styles.typography_size_h2,
    h3: styles.typography_size_h3,
    p: styles.typography_size_p,
};
const CLASS_NAME_MAPPER_FOR_TYPOGRAPHY_WEIGHT: { [key in TypographyWeight]?: string } = {
    thin: styles.typography_weight_thin,
    normal: styles.typography_weight_normal,
    medium: styles.typography_weight_medium,
    bold: styles.typography_weight_bold,
};

export const Typography = forwardRef<HTMLParagraphElement, PropsWithChildren<Typography>>(
    (props, ref) => {
        const { children, as = 'p', size, className, weight = 'normal', style } = props;

        const Tag = as;
        // Ability to overwrite tag size
        const typographySize = size ?? as;

        return (
            <Tag
                ref={ref}
                style={style}
                className={clsx(
                    styles.typography,
                    className,
                    CLASS_NAME_MAPPER_FOR_TYPOGRAPHY_SIZE[typographySize],
                    CLASS_NAME_MAPPER_FOR_TYPOGRAPHY_WEIGHT[weight],
                )}
            >
                {children}
            </Tag>
        );
    },
);
