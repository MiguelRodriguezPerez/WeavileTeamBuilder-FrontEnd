import { useContext } from "react";
import { AbilityData } from "../../../../../../../domain/dataEntities";
import { SelectedPokemonDataContext } from "../../../../../context/pokemonData";
import { AbilityCard } from "../elementCards";
import { WeavileLoading } from "../../../../../../../ui/components";

import styles from '../../../../../styles/selectedMemberMenu/elementGrids/elementGrid.module.css';
import { ElementHeader } from "../ElementHeader";

export const AbilityGrid = () => {

    const abilityList: AbilityData[] = useContext(SelectedPokemonDataContext)!.currentPokemonData!.ability_list;

    if (abilityList.length === 0) return <WeavileLoading />

    return (
        <div>
            <ElementHeader elementName="Abilities"/>
            <ul className={ styles['element-grid'] }>
                {
                    abilityList.map((ability) => (
                        <AbilityCard abilityProp={ability} key={ability.id} />
                    ))
                }
            </ul>
        </div>
    );
}