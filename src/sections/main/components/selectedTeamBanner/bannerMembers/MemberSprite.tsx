import { useWindowSize } from "react-use";
import { PokemonTeamMember } from "../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../globalContext/WeavileStore";
import { useChooseSpriteToRender } from "../../../hooks/selectedTeamBanner/useChooseSpriteToRender";
import { useMemo } from "react";

import styles from '../../../styles/selectedTeamBanner/selectedMember/bannerMemberSprite.module.css';
import clsx from "clsx";

export const MemberSprite = ({ member } : { member: PokemonTeamMember }) => {

    const selectedMember = useWeavileStore(state => state.selectedPokemonMember)!;
    const { width } = useWindowSize();
    const { chooseSpriteToRender, chooseHeightToRender, chooseWidthToRender } = useChooseSpriteToRender(member);
    const spriteToRender: string = useMemo(() => chooseSpriteToRender(),[selectedMember, width]);

    return (
        <div className={ styles['selected-member-sprite'] }>
            <img 
                src={ spriteToRender } 
                className={ clsx(
                        styles["heading-pokemon-sprite"],
                        member.id === selectedMember.id && styles["selected-member"]
                    ) }
                /* TODO: Encontrar una solución seria */
                style={ spriteToRender.includes('missignoPhone') ? { paddingBottom: '0px' } : undefined }
                height={ chooseHeightToRender() }
                width={ chooseWidthToRender() }

            alt= {member ? member.name + '.png' : 'missigno.png'} />
        </div>
    );

}