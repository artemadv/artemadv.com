import React, { FC } from 'react';
import clsx from 'clsx';

import { NavigationItem } from '../../model/types';

import { ActiveLink } from '@/shared/ui';

import styles from './Navigation.module.css';

type Navigation = {
    items?: NavigationItem[];
    className?: string;
    classNameList?: string;
};

export const Navigation: FC<Navigation> = (props) => {
    const { items, className, classNameList } = props;

    if (!items) {
        return null;
    }

    return (
        <nav className={clsx(styles.navigation, className)}>
            <ul className={clsx(styles.navigation__list, classNameList)}>
                {items.map(({ id, href, text }, index) => (
                    <li
                        key={id}
                        className={clsx(styles.navigation__item, {
                            [styles.navigation__item_position_first]: index === 0,
                        })}
                    >
                        <ActiveLink
                            className={styles.navigation__link}
                            activeClassName={styles.navigation__link_theme_active}
                            href={href}
                        >
                            {text}
                        </ActiveLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
