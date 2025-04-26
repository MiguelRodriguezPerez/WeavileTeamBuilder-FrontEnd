import { useContext } from "react";
import { AbilityData } from "../../../../../../../domain/dataEntities";
import { SelectedPokemonDataContext } from "../../../../../context/pokemonData";
import { AbilityCard } from "../elementCards";

import { WeavileLoading } from "../../../../../../../ui/components";
import '../../../../../styles/selectedMemberMenu/elementGrids/elementGrid.css';

export const AbilityGrid = () => {

    const abilityList: AbilityData[] = useContext(SelectedPokemonDataContext)!.currentPokemonData!.ability_list;

    if (abilityList.length === 0) return <WeavileLoading />

    return (
        <>
            <ul className="element-grid ability-grid">
                {
                    abilityList.map((ability) => (
                        <AbilityCard abilityProp={ability} key={ability.id} />
                    ))
                }
            </ul>
        </>
    );
}