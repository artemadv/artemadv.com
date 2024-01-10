import React, { FC } from 'react';

import { SectionExtended } from '@/entities/section';
import { ContactCard } from '@/entities/contact';

import styles from './ContactList.module.css';

export const ContactList: FC<Pick<SectionExtended, 'nodes'>> = ({ nodes }) => {
    return (
        <ul className={styles.contactList}>
            {nodes?.map((node) => (
                <li key={node.id} className={styles.contactList__item}>
                    <ContactCard {...node} />
                </li>
            ))}
        </ul>
    );
};
