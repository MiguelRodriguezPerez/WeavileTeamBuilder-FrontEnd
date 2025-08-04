import { useContext } from "react";
import useWeavileStore from "../../../../../../../globalContext/WeavileStore";
import { toPascalCase } from "../../../../../../../globalHelpers";
import { SelectedComponentContext } from "../../../../../context/selectedMenuComponent/SelectedComponentContext";
import { MemberCardChildContext, MemberCardChildEnum } from "../../../../../context/memberCardChild";

import cardStyle from '../../../../../styles/selectedMemberMenu/memberCard/memberCard.module.css';
import itemStyle from '../../../../../styles/selectedMemberMenu/memberCard/memberItemAbility/memberItemAbilityCard.module.css';
import selectedStyle from '../../../../../../../globalStyles/selectedElement.module.css';
import clsx from 'clsx';

export const MemberItem = () => {

  const changeElementType = useContext(SelectedComponentContext)!.changeElementType;
  const { item } = useWeavileStore(state => state.selectedPokemonMember!);
  const { selectedChildEnum, setSelectedChildEnum } = useContext(MemberCardChildContext)!;

  const onClickWrapper = (): void => {
    changeElementType('item');
    setSelectedChildEnum(MemberCardChildEnum.MemberItem);
  };

  return (
    <div className={itemStyle['member-item']}>
      <p>Item</p>
      <p onClick={ onClickWrapper }
            className={
                clsx (
                cardStyle['member-card'],
                selectedChildEnum === MemberCardChildEnum.MemberItem && selectedStyle['selected-element']
            )
        }
      >
        { item ? toPascalCase(item.name) : 'No item' }
      </p>
    </div>
  );
};
