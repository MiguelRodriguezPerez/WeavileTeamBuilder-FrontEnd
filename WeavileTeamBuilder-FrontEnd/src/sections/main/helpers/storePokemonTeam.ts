import { PokemonTeam } from "../../../domain/teamMemberEntities/PokemonTeam";

export const storePokemonTeam = (pokemonTeam: PokemonTeam): void => {

    for(let i: number = 0; i < 15; i++) {
        if(localStorage.getItem(`e${i}`) === null) localStorage.setItem(`e${i}`, JSON.stringify(pokemonTeam));
    }

    throw new Error("Already stored 15 teams");
}