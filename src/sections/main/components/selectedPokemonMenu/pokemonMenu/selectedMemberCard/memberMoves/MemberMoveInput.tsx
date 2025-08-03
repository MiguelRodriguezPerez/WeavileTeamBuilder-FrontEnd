import { useContext, useEffect, useState } from "react";
import { toPascalCase } from "../../../../../../../globalHelpers";
import { SelectedMoveMemberContext } from "../../../../../context/selectedMemberMove";
import DeleteIcon from '@mui/icons-material/Delete';
import { PokemonTeamMember } from "../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../globalContext/WeavileStore";
import { SelectedComponentContext } from "../../../../../context/selectedMenuComponent/SelectedComponentContext";
import { useUpdateTeam } from "../../../../../../../globalHooks/pokemonTeams";

import styles from '../../../../../styles/selectedMemberMenu/memberCard/memberMoves.module.css';
import { MoveDto } from "../../../../../../../domain/dataEntities";


export const MemberMoveInput = ({ moveName, moveIndex }:
    { moveName: string, moveIndex: number }) => {

    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);
    const { updateTeamWrapper } = useUpdateTeam();
    const changeSelectedComponent = useContext(SelectedComponentContext)!.changeElementType;
    const changeSelectedMove = useContext(SelectedMoveMemberContext)!.changeSelectedMove;

    /* Parece rídiculo, pero es necesario por si la lista de nodos se vuelve a montar con nuevos moveName,
    porque por la razón que sea useState no es capaz de hacerlo por si solo */
    const inputClickEvent = () => {
        changeSelectedMove!(moveIndex);
        changeSelectedComponent('move')
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
                value={toPascalCase(moveName)}
                onClick={inputClickEvent}
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