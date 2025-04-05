import { WeavileHeader } from "../../../ui/components/WeavileHeader";
import { OptionBanner } from "../components/optionBanner/OptionBanner";
import { SelectedTeamMemberMenuWrapper } from "../components/selectedPokemonMenu/SelectedTeamMemberMenuWrapper";
import { SelectedTeamBanner } from "../components/selectedTeamBanner/SelectedTeamBanner";
import { PokemonDataProvider } from "../context/pokemonData/PokemonDataProvider";

export const MainPage = () => {
    return (
        <>
            <WeavileHeader />
            <SelectedTeamBanner />
            <OptionBanner />
            <PokemonDataProvider>
                <SelectedTeamMemberMenuWrapper />
            </PokemonDataProvider>

        </>
    );
}