import { NatureDto } from "../../../../domain/teamMemberEntities";

export const getNatureTextDisplay = (nature: NatureDto): string => {
    if (nature.increased_stat === '') return nature.name
    else return nature.name + ' (+' + nature.increased_stat + ' , -' + nature.decreased_stat + ')';
}