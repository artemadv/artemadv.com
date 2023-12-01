import React, { FC } from 'react';

import { SectionExtended } from '@/entities/section';
import { ContactCard } from '@/entities/contacts';

import styles from './ContactsList.module.css';

export const ContactsList: FC<Pick<SectionExtended, 'nodes'>> = ({ nodes }) => {
    return (
        <ul className={styles.contactsList}>
            {nodes?.map((node) => (
                <li key={node.id} className={styles.contactsList__item}>
                    <ContactCard {...node} />
                </li>
            ))}
        </ul>
    );
};
