import React, { FC } from 'react';

import { createStyleFromNodeFields, getColorToneByTextColor } from '@/shared/lib';
import { Section } from '@/shared/api';
import { Container, Faq as FaqItem } from '@/shared/ui';

import styles from './Faq.module.css';

export const Faq: FC<Section> = (props) => {
    const { nodes } = props;

    const style = createStyleFromNodeFields(props);

    return (
        <div style={style} className={styles.faq} id="#faq">
            <Container>
                <ul className={styles.faq__list}>
                    {nodes?.map((node, index) => {
                        const nodeStyle = createStyleFromNodeFields(node);
                        const colorTone = getColorToneByTextColor(nodeStyle?.color);

                        return (
                            <li key={node.id} className={styles.faq__itemWrapper}>
                                <FaqItem
                                    title={node?.titleText ?? ''}
                                    description={node.description?.value ?? ''}
                                    style={nodeStyle}
                                    isOpen={index === 0}
                                    color={colorTone}
                                    className={styles.faq__item}
                                />
                            </li>
                        );
                    })}
                </ul>
            </Container>
        </div>
    );
};
