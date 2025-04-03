import { toPascalCase } from "./toPascalCase";

export const parseAbility = (abilityName: string): string => {
    const arrString = abilityName.split('-');

    let resultado = '';

    arrString.forEach(element => {
        resultado = resultado + toPascalCase(element) + ' ';
    });

    return resultado;
}