import { SectionNames, Section } from '@/entities/section';

export const FAKE_FOOTER_SECTION: Section = {
    id: 'section1',
    sectionName: SectionNames.TextWithRightContent,
    style: {
        padding: '0',
    },
    nodes: [
        {
            id: 'node1',
            title: {
                text: 'Thanks to my wife<br />for the illustrations ❤️',
                as: 'p',
            },
            image: {
                src: '/images/footer-avatar.png',
                alt: 'Artem K.',
            },
            style: {
                background: 'var(--color-blue-700)',
                color: '#fff',
            },
        },
    ],
};
