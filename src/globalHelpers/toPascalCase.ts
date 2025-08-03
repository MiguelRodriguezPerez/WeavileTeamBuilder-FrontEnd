/* Sobrecargas para evitar que se queje de argumentos que puedan o no ser undefined */

export function toPascalCase(text: string): string;
export function toPascalCase(text: undefined): undefined;
export function toPascalCase(text: string | undefined): string | undefined {
  if (text === undefined) return undefined;
  text = text.toLowerCase();
  text = text.replace(text.charAt(0), text.charAt(0).toUpperCase());
  return text;
}
