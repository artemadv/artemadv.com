import { TYPOGRAPHY_TAGS } from '../constants/basic';
import { TypographyTag } from '../types/basic';

export const checkTypographyTag = (tag?: TypographyTag | string): tag is TypographyTag => {
    return typeof tag === 'string' && TYPOGRAPHY_TAGS.includes(tag as TypographyTag);
};
