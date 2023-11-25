import React, { FC } from 'react';

import { Section } from '@/entities/section';

import styles from './SectionsGroup.module.css';

interface SectionsGroup {
    id: string;
    sections?: Section[];
}

export const SectionsGroup: FC<SectionsGroup> = ({ sections }) => {
    return (
        <div className={styles.sectionsGroup}>
            {sections?.map((section) => (
                <Section key={section.id} {...section} />
            ))}
        </div>
    );
};
