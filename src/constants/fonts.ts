export const fonts = {
    regular: 'Outfit-Regular',
    bold: 'Outfit-Bold',
} as const;

export type FontFamily = typeof fonts[keyof typeof fonts];
