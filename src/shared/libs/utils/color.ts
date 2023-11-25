const DARK = 'dark';

// https://gist.github.com/jed/983661
const convertHEXtoRGB = (hexColor: string) => {
    let formattedColor: number | string = hexColor.slice(1);

    if (hexColor.length < 5) {
        formattedColor = formattedColor.replace(/./g, '$&$&');
    }
    formattedColor = Number(`0x${formattedColor}`);
    // eslint-disable-next-line no-bitwise
    return [formattedColor >> 16, (formattedColor >> 8) & 255, formattedColor & 255];
};

const getLightOrDark = (hexColor: string) => {
    const [r, g, b] = convertHEXtoRGB(hexColor);
    const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

    if (hsp > 127.5) return 'light';
    return DARK;
};

export const getColorToneByTextColor = (color?: string) => {
    if (!color || !color.startsWith('#')) return DARK;
    return getLightOrDark(color);
};
