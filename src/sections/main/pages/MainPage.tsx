import { WeavileHeader } from "../../../ui/components/WeavileHeader";
import { OptionBanner } from "../components/optionBanner/OptionBanner";
import { SelectedTeamMemberMenuWrapper } from "../components/selectedPokemonMenu/SelectedTeamMemberMenuWrapper";
import { SelectedTeamBanner } from "../components/selectedTeamBanner/SelectedTeamBanner";
import { SelectedPokemonDataProvider } from "../context/pokemonData/SelectedPokemonDataProvider";

export const MainPage = () => {
    return (
        <>
            <WeavileHeader />
            <SelectedTeamBanner />
            <OptionBanner />
            <SelectedPokemonDataProvider>
                <SelectedTeamMemberMenuWrapper />
            </SelectedPokemonDataProvider>

        </>
    );
}