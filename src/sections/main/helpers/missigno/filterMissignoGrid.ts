import { MissignoDTO } from "../../components/selectedPokemonMenu/missignoMenu/MissignoDTO";

export const filterMissignoGrid = (originalArray: MissignoDTO[], search: string): MissignoDTO[] => {

        console.log(originalArray);
        
        if (search.trim() === '') return originalArray;
        else 
            return originalArray.filter(pokemon =>
                pokemon.name.toLowerCase().includes(search.toLowerCase()));
}