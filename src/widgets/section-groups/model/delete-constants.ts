import { SectionNames } from '@/entities/section';

export const FAKE_MAIN_PAGE_SECTION_GROUPS = [
    {
        id: 'sectionsGroup1',
        sections: [
            {
                id: 'section1',
                sectionName: SectionNames.TextWithImage,
                style: {
                    background: 'var(--color-blue-800)',
                    padding: '150px 0',
                },
                nodes: [
                    {
                        id: 'node1',
                        label: 'Hi! I’am Artem Karakulov',
                        title: {
                            text: 'I enjoy designing tech websites and digital products',
                            as: 'h1',
                        },
                        subtitle:
                            'Aliquet ut justo aliquet venenatis sed faucibus integer dictumst<br />vel magna vitae risus gravida pharetra dictum egestas cursus non<br />lectus dole consectetur sapien cursus dis id vulputate habitasse.',
                        image: {
                            src: '/images/img-avatar.png',
                            alt: 'image test alt',
                        },
                        style: {
                            color: '#fff',
                        },
                        actions: [
                            {
                                id: 'action1',
                                href: '/',
                                text: 'Get in touch',
                            },
                            {
                                id: 'action2',
                                href: '#portfolio',
                                text: 'View portfolio',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 'sectionsGroup2',
        sections: [
            {
                id: 'section2',
                sectionName: SectionNames.TextWithImage,
                style: {
                    background: 'var(--color-blue-700)',
                    padding: '150px 0 30px',
                },
                nodes: [
                    {
                        id: 'node2',
                        label: 'About me',
                        title: {
                            text: 'I’ve been developing websites since 2020',
                            as: 'h2',
                        },
                        subtitle:
                            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
                        style: {
                            color: '#fff',
                        },
                    },
                ],
            },
        ],
    },
    {
        id: 'sectionsGroup3',
        sections: [
            {
                id: 'section3',
                sectionName: SectionNames.Counter,
                style: {
                    background: 'var(--color-blue-700)',
                    padding: '0px 0 150px',
                },
                nodes: [
                    {
                        id: 'node3',
                        title: {
                            text: '3+',
                            as: 'p',
                        },
                        subtitle: 'Years<br />of experience',
                        style: {
                            color: '#fff',
                            background: 'var(--color-blue-800)',
                        },
                    },
                    {
                        id: 'node4',
                        title: {
                            text: '2',
                            as: 'p',
                        },
                        subtitle: 'Major projects<br />and many others',
                        style: {
                            color: '#fff',
                            background: 'var(--color-blue-800)',
                        },
                    },
                    {
                        id: 'node5',
                        title: {
                            text: '31',
                            as: 'p',
                        },
                        subtitle: 'Years old',
                        style: {
                            color: '#fff',
                            background: 'var(--color-blue-800)',
                        },
                    },
                    {
                        id: 'node6',
                        title: {
                            text: 'A2',
                            as: 'p',
                        },
                        subtitle: 'Level<br />of English',
                        style: {
                            color: '#fff',
                            background: 'var(--color-blue-800)',
                        },
                    },
                ],
            },
        ],
    },
    {
        id: 'sectionsGroup4',
        sections: [
            {
                id: 'section4',
                sectionName: SectionNames.TextWithImage,
                style: {
                    background: 'var(--color-yellow-50)',
                    padding: '150px 0 50px',
                },
                nodes: [
                    {
                        id: 'node8',
                        label: 'My portfolio',
                        title: {
                            text: 'Take a look at the latest projects I’ve done',
                            as: 'h2',
                        },
                        subtitle:
                            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
                        style: {
                            color: '#000',
                        },
                    },
                ],
            },
            {
                id: 'section5',
                sectionName: SectionNames.CarouselPortfolio,
                style: {
                    background: 'var(--color-yellow-50)',
                    padding: '50px 0 150px',
                },
                nodes: [
                    {
                        id: 'node9',
                        title: {
                            text: 'The largest subscription service in Russia',
                            as: 'h5',
                        },
                        subtitle:
                            'Worked in the partner integration team. We launched such products as subscriptions for children, for travelers and those who like to read and watch movies',
                        style: {
                            color: '#000',
                            background: 'var(--color-yellow-100)',
                        },
                    },
                    {
                        id: 'node10',
                        title: {
                            text: 'Regional electronics retailer',
                            as: 'h5',
                        },
                        subtitle:
                            'Worked in the marketing team. Developed landing pages for promotions, letters and website interfaces.',
                        style: {
                            color: '#000',
                            background: 'var(--color-yellow-100)',
                        },
                    },
                    {
                        id: 'node11',
                        title: {
                            text: 'Personal website',
                            as: 'h5',
                        },
                        subtitle: 'artemadv.com',
                        style: {
                            color: '#000',
                            background: 'var(--color-yellow-100)',
                        },
                    },
                    {
                        id: 'node12',
                        title: {
                            text: 'Money control',
                            as: 'h5',
                        },
                        subtitle: 'Coming soon',
                        style: {
                            color: '#000',
                            background: 'var(--color-yellow-100)',
                        },
                    },
                ],
            },
        ],
    },
];
