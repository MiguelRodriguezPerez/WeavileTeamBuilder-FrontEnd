import { useContext } from "react";
import { PokemonTeamMember } from "../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../globalContext/WeavileStore";
import { toPascalCase } from "../../../../../../../globalHelpers";
import { SelectedComponentContext } from "../../../../../context/selectedMenuComponent/SelectedComponentContext";

import cardStyle from '../../../../../styles/selectedMemberMenu/memberCard/memberCard.module.css';
import abilityStyle from '../../../../../styles/selectedMemberMenu/memberCard/memberItemAbility/memberItemAbilityCard.module.css';

export const MemberAbility = () => {

    const changeElementType = useContext(SelectedComponentContext)!.changeElementType;
    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);

    return (
        <div className={abilityStyle['member-ability']}>
            <p>Ability</p>
            <p className={ cardStyle['member-card'] }
                onClick={() => changeElementType('ability') }>{toPascalCase(selectedMember.ability!.name)}</p>
        </div>
    );
}