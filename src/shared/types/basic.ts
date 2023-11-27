import { CSSProperties } from 'react';

export type Node = {
    id: string;
    label?: string;
    title?: {
        text: string;
        as: string;
    };
    subtitle?: string;
    style?: CSSProperties;
    image?: {
        src: string;
        alt: string;
    };
    actions?: {
        id: string;
        href: string;
        text: string;
    }[];
};
