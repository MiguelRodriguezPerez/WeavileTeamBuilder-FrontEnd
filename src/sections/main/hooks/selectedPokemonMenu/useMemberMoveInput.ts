import { useContext, useEffect, useState } from "react";
import { PokemonTeamMember } from "../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../globalContext/WeavileStore";
import { SelectedMoveMemberContext } from "../../context/selectedMemberMove";
import { SelectedComponentContext } from "../../context/selectedMenuComponent/SelectedComponentContext";
import { useUpdateTeam } from "./useUpdateTeam";

import { toPascalCase } from "../../../../globalHelpers";

export const useMemberMoveInput = ({ moveName, moveIndex }: { moveName: string | null, moveIndex: number }) => {

    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);
    const { updateTeamWrapper } = useUpdateTeam();
    const changeSelectedMove = useContext(SelectedMoveMemberContext)!.changeSelectedMove;
    const changeElementType = useContext(SelectedComponentContext)!.changeElementType;
    const [moveNameState, setMoveNameState] = useState<string | null>(moveName);

    useEffect(() => {
        setMoveNameState(moveName && toPascalCase(moveName));
    }, [moveName]);

    const onClickInputEvent = () => {
        changeSelectedMove!(moveIndex);
        changeElementType('move');
    }

    const removeMove = () => {
        let updatedMember = selectedMember;
        updatedMember.move_list[moveIndex] = null;

        updateTeamWrapper(updatedMember);
        setMoveNameState(null);
    }

    return {
        moveNameState,
        onClickInputEvent,
        removeMove,
    }
}