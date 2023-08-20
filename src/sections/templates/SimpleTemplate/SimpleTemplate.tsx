import React, { FC } from 'react';

import { TSectionTemplate } from '@/types';

import styles from './SimpleTemplate.module.css';

export const SimpleTemplate: FC<TSectionTemplate> = (props) => {
    const { section: { nodes, style } = {}, nodeTemplate: Node } = props;

    return (
        <div className={styles.section} style={style}>
            {nodes?.map((node) => (
                <Node key={node.id} {...node} />
            ))}
        </div>
    );
};
