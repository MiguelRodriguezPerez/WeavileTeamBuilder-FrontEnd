import { useEffect, useState } from "react";
import { PokemonType } from "../../../../../../../../domain/enums";
import { PokemonTeam, PokemonTeamMember } from "../../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../../globalContext/WeavileStore";
import { assignPokemonTypeToPng } from "../../../../../../../../globalHelpers";
import { getWeaknessCoveredToTeamMembers } from "../../../../../../helpers/teamTypeCoverages/getWeaknessCoveredToTeamMembers";

import '../../../../../../styles/selectedMemberMenu/typeCoverageTable/typeCoverageTableChildren/partnerTypeCoverage.css';



export const ResistancesPartnerCoverage = () => {

    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);
    const selectedTeam: PokemonTeam = useWeavileStore(state => state.selectedPokemonTeam!);
    const [mapToRender, setMapToRender] = useState<Map<PokemonTeamMember, PokemonType[]>>();

    useEffect(() => {
        setMapToRender(getWeaknessCoveredToTeamMembers(selectedMember, selectedTeam));
        console.log(mapToRender);

    }, [selectedMember, selectedTeam]);

    return (
       <section className="partner-coverages">
            <h4>{selectedMember.name} is covering </h4>
            <ul className="partner-coverage-list">
            {
                mapToRender &&
                [...mapToRender.entries()].map(([member, types]) => (
                <li key={member.name} className="partner-coverage-entry">
                    <img src={`data:image/jpeg;base64,${member.pc_sprite}`}/>
                    <ul className="partner-coverage-types">
                        {
                            types.map((type) => ( <img key={type} src={assignPokemonTypeToPng(type)} />))
                        }
                    </ul>
                </li>
                ))
            }
            </ul>
        </section>
    );
}
