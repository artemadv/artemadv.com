import React, { FC } from 'react';

import { SectionExtended } from '../../model/types';

import { Container } from '@/shared/ui';
import { createStyleFromNodeFields } from '@/shared/lib';

import styles from './ColumnList.module.css';

export const ColumnList: FC<SectionExtended> = (props) => {
    const { nodes, mainSlot: ListItem } = props;
    const style = createStyleFromNodeFields(props);

    if (!ListItem) return null;

    return (
        <div style={style} className={styles.columnList}>
            <Container>
                <ul className={styles.columnList__list}>
                    {nodes?.map((node) => (
                        <li key={node.id} className={styles.columnList__listItem}>
                            <ListItem {...node} />
                        </li>
                    ))}
                </ul>
            </Container>
        </div>
    );
};
