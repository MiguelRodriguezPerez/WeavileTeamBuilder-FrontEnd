import { useContext } from "react";
import { MoveDto } from "../../../../../../../domain/dataEntities";
import { assignMoveTypeToPng, assignPokemonTypeToPng, toPascalCase } from "../../../../../../../globalHelpers";
import { SelectedMoveMemberContext } from "../../../../../context/selectedMemberMove";

import { PokemonTeamMember } from "../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../globalContext/WeavileStore";
import { useUpdateTeam } from "../../../../../../../globalHooks/pokemonTeams";

import styles from '../../../../../styles/selectedMemberMenu/elementCards/moveCard.module.css'

export const MoveCard = ({ moveProp }: { moveProp: MoveDto }) => {

    const { updateTeamWrapper } = useUpdateTeam();
    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember)!;
    const selectedMemberMove: number | undefined = useContext(SelectedMoveMemberContext)?.selectedMove;

    const onClickWrapper = (): void => {
        const moveListToUpdate: MoveDto[] = selectedMember.move_list;

        if (selectedMemberMove !== undefined) {
            moveListToUpdate[selectedMemberMove!] = moveProp;
        }
        /* Si el usuario no selecciono ningún input de movimiento, loopeara todos los movs.
        El primero que encuentre con un move.name sin definir se lo asignará. */
        else {
            for (let i = 0; i < moveListToUpdate.length; i++) {
                const move = moveListToUpdate[i];
                if (move === undefined || move === null) {
                    moveListToUpdate[i] = moveProp;
                    break;
                }
            }
        }

        updateTeamWrapper(
            {
                ...selectedMember,
                move_list: moveListToUpdate,
            }
        );
    }

    return (
        <li className={styles['move-card']} onClick={onClickWrapper}>
            <h3 className={styles['move-heading']}>{toPascalCase(moveProp.name)}</h3>
            <div className={styles['move-img']}>
                <img src={assignPokemonTypeToPng(moveProp.pokemon_type)}
                    alt={`${moveProp.pokemon_type.toString()}.png`} />
                <img src={assignMoveTypeToPng(moveProp.move_type)}
                    alt={`${moveProp.move_type.toString()}.png`} />
            </div>
            <div className={styles['move-values']}>
                <div>Accuracy</div>
                <div>PP</div>
                <div>Power</div>

                <div>{moveProp.accuracy}</div>
                <div>{moveProp.pp}</div>
                <div>{moveProp.power}</div>
            </div>
            <div className={styles['move-description']}>
                <p>{moveProp.description}</p>
            </div>
        </li>
    );
}