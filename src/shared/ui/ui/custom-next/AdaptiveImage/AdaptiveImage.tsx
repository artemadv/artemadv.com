import React, { ComponentProps, FC } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import styles from './AdaptiveImage.module.css';

type AdaptiveImage = Omit<ComponentProps<typeof Image>, 'fill' | 'height' | 'width'>;

export const AdaptiveImage: FC<AdaptiveImage> = (props) => {
    const { className, ...otherProps } = props;

    return (
        <div className={styles.adaptiveImage}>
            <Image
                fill
                className={clsx(styles.adaptiveImage__element, className)}
                {...otherProps}
            />
        </div>
    );
};
