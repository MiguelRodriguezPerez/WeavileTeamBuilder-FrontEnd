
import { useContext } from "react";
import { PokemonTeamMember } from "../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../globalContext/WeavileStore";
import { toPascalCase } from "../../../../../../../globalHelpers";
import { SelectedComponentContext } from "../../../../../context/selectedMenuComponent/SelectedComponentContext";

import { MemberCardChildContext, MemberCardChildEnum } from "../../../../../context/memberCardChild";

import abilityStyle from '../../../../../styles/selectedMemberMenu/memberCard/memberItemAbility/memberItemAbilityCard.module.css';
import cardStyle from '../../../../../styles/selectedMemberMenu/memberCard/memberCard.module.css';
import selectedStyle from '../../../../../../../globalStyles/selectedElement.module.css'

import clsx from 'clsx';

export const MemberAbility = () => {

    const changeElementType = useContext(SelectedComponentContext)!.changeElementType;
    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);
    const { selectedChildEnum, setSelectedChildEnum } = useContext(MemberCardChildContext)!;

    const onClickWrapper = (): void => {
        changeElementType('ability');
        setSelectedChildEnum(MemberCardChildEnum.MemberAbility);
    }



    return (
        <div className={ abilityStyle['member-ability'] }>
            <p>Ability</p>
            <p className={ 
                clsx (
                    cardStyle['member-card'],
                    selectedChildEnum === MemberCardChildEnum.MemberAbility && selectedStyle['selected-element']
                )
            }
                onClick={ onClickWrapper }>{toPascalCase(selectedMember.ability!.name)}</p>
        </div>
    );
}