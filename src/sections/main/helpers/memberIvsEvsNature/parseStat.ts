import { toPascalCase } from "../../../../globalHelpers"

export const parseStat = (stat: string) => {
    stat = stat.replace('base_','');

    let stringArr = stat.split('_');
    stringArr = stringArr.map(stat => (stat = toPascalCase(stat)))

    return stringArr.join().replace(',', ' ');
}