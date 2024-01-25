import { headers } from 'next/headers';

export const getOrigin = () => {
    return headers().get('x-origin') || '';
};

export const getLangcode = () => {
    return headers().get('x-next-locale') || 'en';
};
