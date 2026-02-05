import { useMemo } from "react";
import { useWindowSize } from "react-use";
import { PokemonTeamMember } from "../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../globalContext/WeavileStore";
import { useChooseSpriteToRender } from "../../../hooks/selectedTeamBanner/useChooseSpriteToRender";

import clsx from "clsx";
import styles from '../../../styles/selectedTeamBanner/selectedMember/bannerMemberSprite.module.css';

export const MemberSprite = ({ member }: { member: PokemonTeamMember }) => {

    const selectedMember = useWeavileStore(state => state.selectedPokemonMember)!;
    const { width } = useWindowSize();
    const { chooseSpriteToRender, getDefaultSprite } = useChooseSpriteToRender(member);
    const spriteToRender: string = useMemo(() => chooseSpriteToRender(), [selectedMember, width]);

    console.log(member);
    

    return (
        <div className={styles['selected-member-sprite']}>
            <img
                src={spriteToRender ? spriteToRender : getDefaultSprite() }
                className={clsx(
                    styles["heading-pokemon-sprite"],
                    member.team_index_id === selectedMember.team_index_id && styles["selected-member"],
                    !member.name && styles['missigno-sprite']
                )}
                /* TODO: Encontrar una solución seria */

                alt={member ? member.name + '.png' : 'missigno.png'} />
        </div>
    );

}