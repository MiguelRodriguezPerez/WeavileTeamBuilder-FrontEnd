import { useEffect, useState } from "react";
import { PokemonTypeEnum } from "../../../../../../../../domain/enums";
import { PokemonTeam, PokemonTeamMember } from "../../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../../globalContext/WeavileStore";
import { assignPokemonTypeEnumToPng, assignPokemonTypeToPng } from "../../../../../../../../globalHelpers";
import { getWeaknessCoveredToTeamMembers } from "../../../../../../helpers/teamTypeCoverages/getWeaknessCoveredToTeamMembers";

import styles from '../../../../../../styles/selectedMemberMenu/typeCoverageTable/typeCoverageTableChildren/partnerTypeCoverage.module.css';



export const ResistancesPartnerCoverage = () => {

    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);
    const selectedTeam: PokemonTeam = useWeavileStore(state => state.selectedPokemonTeam!);
    const [mapToRender, setMapToRender] = useState<Map<PokemonTeamMember, PokemonTypeEnum[]>>();
    console.log(getWeaknessCoveredToTeamMembers(selectedMember, selectedTeam));
    

    useEffect(() => {
        setMapToRender(getWeaknessCoveredToTeamMembers(selectedMember, selectedTeam));
    }, [selectedMember, selectedTeam]);

    return (
        <section className={styles['partner-coverages']}>
            <h4>{selectedMember.name} is covering </h4>
            <ul className={styles['partner-coverage-list']}>
                {
                    mapToRender &&
                    [...mapToRender.entries()].map(([member, types]) => (
                        <li key={member.name} className={styles['partner-coverage-entry']}>
                            <img src={`data:image/jpeg;base64,${member.pc_sprite}`} />
                            <ul className={styles['partner-coverage-types']}>
                                {
                                    types.map((type, index) => (<img key={index} src={assignPokemonTypeEnumToPng(type)} />))
                                }
                            </ul>
                        </li>
                    ))
                }
            </ul>
        </section>
    );
}
