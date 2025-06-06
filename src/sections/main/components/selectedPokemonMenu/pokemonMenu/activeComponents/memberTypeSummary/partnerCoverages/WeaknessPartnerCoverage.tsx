import { useEffect, useState } from "react";
import { PokemonType } from "../../../../../../../../domain/enums";
import { PokemonTeam, PokemonTeamMember } from "../../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../../globalContext/WeavileStore";
import { assignPokemonTypeToPng } from "../../../../../../../../globalHelpers";
import { getWeaknessCoveredByTeamMembers } from "../../../../../../helpers/teamTypeCoverages/getWeaknessCoveredByTeamMembers";

export const WeaknessPartnerCoverage = () => {

    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);
    const selectedTeam: PokemonTeam = useWeavileStore(state => state.selectedPokemonTeam!);
    const [mapToRender, setMapToRender] = useState<Map<PokemonTeamMember, PokemonType[]>>();

    useEffect(() => {
        setMapToRender(getWeaknessCoveredByTeamMembers(selectedMember, selectedTeam));
        console.log(mapToRender);

    }, [selectedMember, selectedTeam]);

    return (
        <section>
            <h4> {selectedMember.name} weakness are covered by: </h4>
            <ul>
                {
                    mapToRender &&
                    [...mapToRender.entries()].map(([member, types]) => (
                        <li key={member.name}>
                            <img src={`data:image/jpeg;base64,${member.pc_sprite}`} />
                            <ul>
                                {
                                    types.map((type) => (<img key={type} src={assignPokemonTypeToPng(type)} />))
                                }
                            </ul>
                        </li>
                    ))
                }
            </ul>
        </section>
    );
}