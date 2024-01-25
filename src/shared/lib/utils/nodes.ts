import { CSSProperties } from 'react';

import { Node } from '@/shared/api';

export const createStyleFromNodeFields = ({
    styleColor,
    styleBackground,
    stylePadding,
}: Pick<Node, 'styleColor' | 'styleBackground' | 'stylePadding'>) => {
    const style: CSSProperties = {};

    if (styleColor) {
        style.color = styleColor;
    }

    if (styleBackground) {
        style.background = styleBackground;
    }

    if (stylePadding) {
        style.padding = stylePadding;
    }

    return style;
};

export const createActionsFromNodeFields = ({
    actionTitle,
    actionUrl,
}: Pick<Node, 'actionTitle' | 'actionUrl'>) => {
    return actionTitle?.reduce((actions, text, index) => {
        actions.push({
            id: `action${index}`,
            text,
            href: actionUrl?.[index] ? actionUrl[index] : '/',
        });

        return actions;
    }, [] as { id: string; text: string; href: string }[]);
};
