import React, { FC } from 'react';

import { Section } from '@/sections/Section';
import { ISectionsGroup } from '@/types';

import styles from './SectionsGroup.module.css';

export const SectionsGroup: FC<ISectionsGroup> = ({ sections }) => {
    return (
        <div className={styles.sectionsGroup}>
            {sections?.map((section) => (
                <Section key={section.id} {...section} />
            ))}
        </div>
    );
};
