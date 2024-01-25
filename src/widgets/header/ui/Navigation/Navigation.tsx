import React, { FC } from 'react';
import clsx from 'clsx';

import { ActiveLink } from '@/shared/ui';
import { GetNavigationQuery } from '@/shared/api';

import styles from './Navigation.module.css';

type Navigation = {
    menu: GetNavigationQuery['menu'];
    className?: string;
    classNameList?: string;
};

export const Navigation: FC<Navigation> = (props) => {
    const { menu, className, classNameList } = props;

    if (!menu?.items) {
        return null;
    }

    return (
        <nav className={clsx(styles.navigation, className)}>
            <ul className={clsx(styles.navigation__list, classNameList)}>
                {menu.items.map(({ id, url, title }, index) => (
                    <li
                        key={id}
                        className={clsx(styles.navigation__item, {
                            [styles.navigation__item_position_first]: index === 0,
                        })}
                    >
                        <ActiveLink
                            className={styles.navigation__link}
                            activeClassName={styles.navigation__link_theme_active}
                            href={url || '/'}
                        >
                            {title}
                        </ActiveLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
