import { useEffect, useState } from "react";
import { MissignoDTO } from "../../components/selectedPokemonMenu/missignoMenu/MissignoDTO";

export const useSearchByName = (pokemonName:string, originalDTOArray: MissignoDTO[]) => {
    
    const [filteredArr, setFilteredArr] = useState<MissignoDTO[]>(originalDTOArray);

    useEffect(() => {
        
        if (pokemonName.trim() === '') setFilteredArr(originalDTOArray);
        else {
            const filtered = originalDTOArray.filter(pokemon =>
                pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
            );
            setFilteredArr(filtered);
        }
    },[pokemonName,originalDTOArray])
    /* Tienes que poner como dependencia el array de dto porque este hook recibe dicho array antes de que
    su promesa asíncrona se resuelva y por tanto se llama la primera vez a este hook con valores vacíos */

    return {
        filteredArr
    }
}

