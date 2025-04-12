import { useContext } from "react";
import { AbilityData } from "../../../../../../../domain/dataEntities";
import { AbilityCard } from "../elementCards";
import { SelectedPokemonDataContext } from "../../../../../context/pokemonData";

export const AbilityDataGrid = () => {

    const abilityList: AbilityData[] = useContext(SelectedPokemonDataContext)!.currentPokemonData.ability_list;

    return (
        <ul>
            {
                abilityList.map((ability) => (
                    <AbilityCard ability={ability} key={ability.id} />
                ))
            }
        </ul>
    );
}