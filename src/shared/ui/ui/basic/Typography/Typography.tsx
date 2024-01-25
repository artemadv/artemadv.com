import React, { ForwardRefRenderFunction, PropsWithChildren, forwardRef } from 'react';
import clsx from 'clsx';

import { TypographyTag } from '@/shared/ui/types/basic';
import { isTypographyTagType } from '@/shared/ui/lib/type-guards';

import styles from './Typography.module.css';

type TypographyWeight = 'thin' | 'normal' | 'medium' | 'bold';
type Typography = {
    className?: string;
    as?: string | null;
    size?: TypographyTag;
    weight?: TypographyWeight;
    style?: React.CSSProperties;
};

const CLASS_NAME_MAPPER_FOR_TYPOGRAPHY_SIZE: { [key in TypographyTag]?: string } = {
    h1: styles.typography_size_h1,
    h2: styles.typography_size_h2,
    h3: styles.typography_size_h3,
    h4: styles.typography_size_h4,
    p: styles.typography_size_p,
};
const CLASS_NAME_MAPPER_FOR_TYPOGRAPHY_WEIGHT: { [key in TypographyWeight]?: string } = {
    thin: styles.typography_weight_thin,
    normal: styles.typography_weight_normal,
    medium: styles.typography_weight_medium,
    bold: styles.typography_weight_bold,
};

const TypographyInner: ForwardRefRenderFunction<
    HTMLParagraphElement,
    PropsWithChildren<Typography>
> = (props, ref) => {
    const { children, as, size, className, weight = 'normal', style } = props;

    const Tag = isTypographyTagType(as) ? as : 'p';
    // Ability to overwrite tag size
    const typographySize = size ?? Tag;

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
};

export const Typography = forwardRef(TypographyInner);
