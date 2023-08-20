import { FC } from 'react';

import { INode, ISection } from './custom';

export type TSectionTemplate = {
    nodeTemplate: FC<INode>;
    section?: ISection;
};
