import { useContext } from "react";
import { AbilityData } from "../../../../../../../domain/dataEntities";
import { AbilityCard } from "../elementCards";
import { SelectedPokemonDataContext } from "../../../../../context/pokemonData";
import { ElementHeader } from "../ElementHeader";

import '../../../../../styles/selectedMemberMenu/elementGrids/elementGrid.css'
import { WeavileLoading } from "../../../../../../../ui/components";

export const AbilityGrid = () => {

    const abilityList: AbilityData[] = useContext(SelectedPokemonDataContext)!.currentPokemonData!.ability_list;

    if (abilityList.length === 0) return <WeavileLoading />

    return (
        <>
            <ElementHeader elementName="Abilities" />
            <ul className="element-grid ability-grid">
                {
                    abilityList.map((ability) => (
                        <AbilityCard ability={ability} key={ability.id} />
                    ))
                }
            </ul>
        </>
    );
}