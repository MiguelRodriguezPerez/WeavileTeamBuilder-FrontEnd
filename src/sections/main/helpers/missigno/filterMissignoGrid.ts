import { MissignoDto } from "../../components/selectedPokemonMenu/missignoMenu/MissignoDTO";

export const filterMissignoGrid = (originalArray: MissignoDto[], search: string): MissignoDto[] => {
    if (search.trim() === '') return originalArray;
    else
        return originalArray.filter(pokemon =>
            pokemon.name.toLowerCase().includes(search.toLowerCase()));
}