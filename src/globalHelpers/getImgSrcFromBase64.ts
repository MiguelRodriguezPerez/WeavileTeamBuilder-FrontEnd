export const getImgSrcFromBase64 = (imgField: string): string => {
    return `data:image/png;base64,${imgField}`;
}