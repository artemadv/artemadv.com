import React, { ComponentProps, FC } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import styles from './AdaptiveImage.module.css';

type AdaptiveImage = Omit<ComponentProps<typeof Image>, 'fill' | 'height' | 'width'>;

export const AdaptiveImage: FC<AdaptiveImage> = (props) => {
    const { className, alt, ...otherProps } = props;

    return (
        <div className={styles.adaptiveImage}>
            <Image
                fill
                alt={alt}
                className={clsx(styles.adaptiveImage__element, className)}
                {...otherProps}
            />
        </div>
    );
};
