import { WeavileHeader } from "../../../ui/components/WeavileHeader";
import { SelectedTeamBanner } from "../components/SelectedTeamBanner";
import { SelectedPokemonDataProvider } from "../context/pokemonData/SelectedPokemonDataProvider";

export const MainPage = () => {
    return (
        <>
            <WeavileHeader/>
            <SelectedPokemonDataProvider>                
                <SelectedTeamBanner/>
            </SelectedPokemonDataProvider>
        </>
    );
}