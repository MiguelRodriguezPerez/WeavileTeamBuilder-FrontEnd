import { WeavileHeader } from "../../../ui/components/WeavileHeader";
import { OptionBanner } from "../components/optionBanner/OptionBanner";
import { SelectedTeamBanner } from "../components/selectedTeamBanner/SelectedTeamBanner";
import { SelectedPokemonDataProvider } from "../context/pokemonData/SelectedPokemonDataProvider";

export const MainPage = () => {
    return (
        <>
            <WeavileHeader/>
            <SelectedPokemonDataProvider>                
                <SelectedTeamBanner/>
                <OptionBanner/>
            </SelectedPokemonDataProvider>
        </>
    );
}