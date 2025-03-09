import '../styles/selectedPokemon.css'
import { NoPokemonSelected } from './NoPokemonSelected';

// TODO: Recibir prop team
export const SelectedPokemon = () => {
    return (
        <div className='selected-pokemon'>
            <NoPokemonSelected/>
        </div>
        // <img src="/images/main/pokeballbackgrounddef.png" alt="" />
    );
}