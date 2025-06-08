export const toPascalCase = (text: string | undefined): string | undefined => {
    if (text === undefined) return undefined;
    text = text.toLowerCase();
    text = text.replace(text.charAt(0), text.charAt(0).toUpperCase());
    return text;
}