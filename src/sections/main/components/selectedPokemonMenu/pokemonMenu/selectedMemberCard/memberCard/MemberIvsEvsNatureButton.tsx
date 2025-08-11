import { useContext } from 'react';
import { MemberCardChildContext } from '../../../../../context/memberCardChild';
import { SelectedComponentContext } from '../../../../../context/selectedMenuComponent/SelectedComponentContext';

import clsx from 'clsx';
import styles from '../../../../../styles/selectedMemberMenu/memberCard/memberTypeCoverageIvsEvsNatureDiv.module.css';

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
