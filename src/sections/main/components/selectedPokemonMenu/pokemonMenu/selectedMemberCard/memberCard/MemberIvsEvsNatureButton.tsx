import { useContext } from 'react';
import { SelectedComponentContext } from '../../../../../context/selectedMenuComponent/SelectedComponentContext';
import { MemberCardChildContext, MemberCardChildEnum } from '../../../../../context/memberCardChild';

import styles from '../../../../../styles/selectedMemberMenu/memberCard/memberTypeCoverageIvsEvsNatureDiv.module.css';
import selectedStyle from '../../../../../../../globalStyles/selectedElement.module.css';
import clsx from 'clsx';

export const MemberIvsEvsNatureButton = () => {

  const { changeElementType } = useContext(SelectedComponentContext)!;
  const { setSelectedChildEnum } = useContext(MemberCardChildContext)!;

  const onClickWrapper = (): void => {
    changeElementType('memberIvsEvsNature');
    setSelectedChildEnum(null);
  };

  return (
    <button
      onClick={onClickWrapper}
      className={clsx(
        styles['member-card-button'],
        styles['member-ivs-evs-nature']
      )}
    >
      Ivs/Evs/Nature
    </button>
  );
};
