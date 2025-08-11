import { useContext } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { MoveDto } from "../../../../../../../domain/dataEntities";
import { PokemonTeamMember } from "../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../globalContext/WeavileStore";
import { toPascalCase } from "../../../../../../../globalHelpers";
import { useUpdateTeam } from "../../../../../../../globalHooks/pokemonTeams";
import { SelectedMoveMemberContext } from "../../../../../context/selectedMemberMove";
import { SelectedComponentContext } from "../../../../../context/selectedMenuComponent/SelectedComponentContext";
import { MemberCardChildContext, MemberCardChildEnum } from "../../../../../context/memberCardChild";

import clsx from 'clsx';
import selectedStyle from '../../../../../../../globalStyles/selectedElement.module.css';
import styles from '../../../../../styles/selectedMemberMenu/memberCard/memberMoves.module.css';



export const MemberMoveInput = ({ moveName, moveIndex }:
    { moveName: string, moveIndex: number }) => {

    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);
    const { updateTeamWrapper } = useUpdateTeam();
    const { changeElementType } = useContext(SelectedComponentContext)!;
    const { selectedMove, changeSelectedMove } = useContext(SelectedMoveMemberContext)!;

    const { selectedChildEnum, setSelectedChildEnum } = useContext(MemberCardChildContext)!;

    /* Parece rídiculo, pero es necesario por si la lista de nodos se vuelve a montar con nuevos moveName,
    porque por la razón que sea useState no es capaz de hacerlo por si solo */
    const inputClickEvent = () => {
        changeSelectedMove(moveIndex);
        changeElementType('move');
        setSelectedChildEnum(MemberCardChildEnum.MemberMove);
    }

    const removeMove = () => {
        const updatedMoveList: (MoveDto | null)[] = [...selectedMember.move_list];
        updatedMoveList[moveIndex] = null;

        const updatedMember = {
            ...selectedMember,
            move_list: updatedMoveList
        }

        updateTeamWrapper(updatedMember);
    }

    return (
        <li className={styles['member-moves-li']}>
            <input type="text" readOnly
                value={ toPascalCase(moveName) }
                onClick={ inputClickEvent }
                className={
                    clsx (
                        selectedChildEnum === MemberCardChildEnum.MemberMove
                        && selectedMove === moveIndex
                        && selectedStyle['selected-element']
                    )
                }
            />
            <DeleteIcon
                onClick={removeMove}
                sx={{
                    marginTop: '5px',
                }}
            />
        </li>
    );
}