import React, { PropsWithChildren, forwardRef, useMemo } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

import styles from './Button.module.css';

type ButtonSize = 's' | 'm' | 'l';
type ButtonColor = 'light' | 'dark' | 'blue';
type ButtonTheme = 'default' | 'outlined';
export type Button = {
    onClick?: () => void;
    className?: string;
    size?: ButtonSize;
    theme?: ButtonTheme;
    type?: HTMLButtonElement['type'];
    href?: string;
    color?: ButtonColor;
};

const CLASS_NAME_MAPPER_FOR_BUTTON_SIZE: { [key in ButtonSize]?: string } = {
    s: styles.button_size_s,
    m: styles.button_size_m,
    l: styles.button_size_l,
};

const createClassNames = ({
    theme,
    color,
    size,
}: {
    theme: ButtonTheme;
    color: ButtonColor;
    size: ButtonSize;
}) => {
    const formattedColor = color[0].toUpperCase() + color.slice(1);

    return {
        theme: styles[`button_theme_${theme + formattedColor}`],
        size: styles[`button_size_${size}`],
    };
};

export const Button = forwardRef<HTMLButtonElement & HTMLAnchorElement, PropsWithChildren<Button>>(
    (props, ref) => {
        const {
            children,
            className,
            type = 'button',
            onClick,
            size = 'm',
            color = 'dark',
            theme = 'default',
            href,
        } = props;

        const memoizedButtonProps = useMemo(() => {
            const { theme: themeClassName, size: sizeClassName } = createClassNames({
                theme,
                color,
                size,
            });

            return {
                ref,
                onClick,
                className: clsx(
                    styles.button,
                    className,
                    CLASS_NAME_MAPPER_FOR_BUTTON_SIZE[size],
                    themeClassName,
                    sizeClassName,
                ),
            };
        }, [size, ref, onClick, className, theme, color]);

        if (href) {
            <Link href={href} {...memoizedButtonProps}>
                {children}
            </Link>;
        }

        return (
            <button type={type} {...memoizedButtonProps}>
                {children}
            </button>
        );
    },
);
