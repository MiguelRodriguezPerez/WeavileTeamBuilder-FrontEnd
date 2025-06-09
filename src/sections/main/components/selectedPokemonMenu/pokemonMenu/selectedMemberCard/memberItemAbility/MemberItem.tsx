import { useContext } from "react";
import useWeavileStore from "../../../../../../../globalContext/WeavileStore";
import { toPascalCase } from "../../../../../../../globalHelpers";
import { SelectedComponentContext } from "../../../../../context/selectedMenuComponent/SelectedComponentContext";

import cardStyle from '../../../../../styles/selectedMemberMenu/memberCard/memberCard.module.css';
import itemStyle from '../../../../../styles/selectedMemberMenu/memberCard/memberItemAbility/memberItemAbilityCard.module.css';


export const MemberItem = () => {

    const changeElementType = useContext(SelectedComponentContext)!.changeElementType;
    const { item } = useWeavileStore(state => state.selectedPokemonMember!);

    return (
        <div className={itemStyle['member-item']}>
            <p>Item</p>
            <p onClick={ () => changeElementType('item') } className={cardStyle['member-card']}>
                {item ? toPascalCase(item.name) : 'No item'}
            </p>
        </div>
    );
}