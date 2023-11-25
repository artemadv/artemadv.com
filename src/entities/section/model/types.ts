// TODO refactoring
export enum SectionNames {
    TextWithImage = 'TextWithImage',
    AboutMe = 'AboutMe',
    Portfolio = 'Portfolio',
}

type Style = {
    background?: string;
    padding?: string;
    color?: string;
};

export type Node = {
    id: string;
    label?: string;
    title?: {
        text: string;
        as: string;
    };
    subtitle?: string;
    style?: Style;
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

export type Section = {
    id: string;
    sectionName: SectionNames;
    style?: Style;
    nodes?: Node[];
};
