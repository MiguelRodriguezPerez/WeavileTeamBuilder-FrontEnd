import { useWindowSize } from "react-use";
import { PokemonTeamMember } from "../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../globalContext/WeavileStore";

import styles from '../../../styles/selectedTeamBanner/selectedMember/bannerMemberSprite.module.css'

export const MemberSprite = ({ member } : { member: PokemonTeamMember }) => {

    const selectedMember = useWeavileStore(state => state.selectedPokemonMember)!;
    const { width } = useWindowSize();

    /* Para mostrar el sprite la debes convertir en una url temporal
    que pueda usar el atributo src de img */
    

    return (
        <div className={styles['selected-member-sprite']}>
            <img 
                src={
                    member.name !== null ? 
                        width > 700 ? `data:image/jpeg;base64,${ member.front_default_sprite }` : `data:image/jpeg;base64,${ member.pc_sprite }`
                        :
                        '/images/main/missignoTeamBanner.png'
                } 
                className={`${styles['heading-pokemon-sprite']} ${member.id === selectedMember.id ? styles['selected-pokemon-sprite'] : ''}`}
            alt= {member ? member.name + '.png' : 'missigno.png'} />

            {/* <img
                src={sprite ? `data:image/jpeg;base64,${sprite}` : "/images/main/missignoTeamBanner.png"}
                className={`heading-pokemon-sprite ${memberId === selectedMember.id ? 'member-selected' : ''}`}
            /> */}
        </div>
    );

}