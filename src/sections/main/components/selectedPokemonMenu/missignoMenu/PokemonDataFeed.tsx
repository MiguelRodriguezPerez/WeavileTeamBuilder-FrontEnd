import { useEffect, useState } from "react";
import { PokemonData } from "../../../../../domain/dataEntities";
import { getSVPokemonsRequest } from "../../../../../api";

export const PokemonDataFeed = () => {

    const [ pokemonDataArr, setPokemonDataArr ] = useState<PokemonData[]>();

    useEffect(() => {
        const asyncWrapper =  async () => {
            const request = await getSVPokemonsRequest();
            if (request.status === 200) setPokemonDataArr(request.data);
        } 

        asyncWrapper();
    }, [])
    

    return (
        <section className="pokemon-data-feed">
            {
                pokemonDataArr?.map((pokemon) => (
                    <p key={pokemon.id}>{pokemon.name}</p>
                ))
            }
        </section>
    );
}