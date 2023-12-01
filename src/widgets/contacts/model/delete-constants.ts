import { SectionNames, Section, SectionType } from '@/entities/section';

export const FAKE_CONTACTS_SECTIONS: Section[] = [
    {
        id: 'section1',
        sectionName: SectionNames.TextWithRightContent,
        sectionType: SectionType.Main,
        style: {
            background: 'var(--color-yellow-50)',
            padding: '140px 0',
        },
        nodes: [
            {
                id: 'node1',
                label: 'Contact me',
                title: {
                    text: 'Write to me in any way',
                    as: 'h2',
                },
                subtitle:
                    'Aliquet ut justo aliquet venenatis sed faucibus integer dictumst<br />vel magna vitae risus gravida pharetra dictum egestas cursus non<br />lectus dole consectetur sapien cursus dis id vulputate habitasse.',
                style: {
                    color: '#000',
                },
            },
        ],
    },
    {
        id: 'section2',
        sectionName: SectionNames.TextWithRightContent,
        sectionType: SectionType.Basic,
        style: {
            background: 'var(--color-yellow-50)',
            padding: '0',
        },
        nodes: [
            {
                id: 'node2',
                title: {
                    text: 'Mail',
                    as: 'h5',
                },
                subtitle: 'artemadventurer@gmail.com',
                style: {
                    background: 'var(--color-blue-800)',
                    color: '#fff',
                },
            },
            {
                id: 'node3',
                title: {
                    text: 'LinkedIn',
                    as: 'h5',
                },
                subtitle: 'https://www.linkedin.com/in/artem-karakulov-40b28b123/',
                style: {
                    background: 'var(--color-blue-800)',
                    color: '#fff',
                },
            },
        ],
    },
];
