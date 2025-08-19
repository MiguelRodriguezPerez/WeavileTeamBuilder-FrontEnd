/* <T extends { name: string }> indica que será un genérico que siempre tendra el campo name */

export const sortAlphabetically = <T extends { name: string }> (arrObject: T[]): T[] => {
    // , 'es', { sensitivity: 'base'} Ignora mayúsculas y minúsculas
    return arrObject.sort((a, b) => a.name.localeCompare(b.name, 'es', { sensitivity: 'base'} ));
};
