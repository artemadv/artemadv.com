import React, { FC } from 'react';

import { Section } from '../../model/types';

import { TextWithImageItem } from './TextWithImageItem';

// export const TextWithImage: FC<ISection> = (props) => {
//     const { style, nodes } = props;

//     return (
//         <div style={style}>
//             <ul className={styles.sectionsList}>
//                 {nodes?.map((node) => (
//                     <li className={styles.sectionWrapper}>
//                         <TextWithImageNode key={node.id} {...node} />
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

export const TextWithImage: FC<Section> = (props) => {
    const { style, nodes } = props;
    const node = nodes?.[0];

    if (!node) return null;

    return (
        <div style={style}>
            <TextWithImageItem {...node} />
        </div>
    );
};
