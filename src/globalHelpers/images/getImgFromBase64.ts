export function getImgFromBase64(arg: string): string;
export function getImgFromBase64(arg: string | null): string | null {
  return arg ? `data:image/jpeg;base64,${arg}` : arg;
}