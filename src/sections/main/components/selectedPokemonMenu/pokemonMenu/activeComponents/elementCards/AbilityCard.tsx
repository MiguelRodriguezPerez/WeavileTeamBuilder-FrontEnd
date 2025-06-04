import { AbilityData } from "../../../../../../../domain/dataEntities";
import { PokemonTeamMember } from "../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../globalContext/WeavileStore";
import { toPascalCase } from "../../../../../../../globalHelpers";
import { useUpdateTeam } from "../../../../../../../globalHooks/pokemonTeams";



import '../../../../../styles/selectedMemberMenu/elementCards/abilityCard.css'

export const AbilityCard = ({ abilityProp }: { abilityProp: AbilityData }) => {

    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);

    const { updateTeamWrapper } = useUpdateTeam();

    const changeAbilityEvent = () => {
        if (selectedMember.ability!.name !== abilityProp.name) {
            const updatedMember: PokemonTeamMember = {
                ...selectedMember,
                ability: abilityProp
            }

            updateTeamWrapper(updatedMember);
        }
    }

    return (
        <li key={abilityProp.id} className="ability-card" onClick={changeAbilityEvent}>
            <h4>{toPascalCase(abilityProp.name)}</h4>
            <p>{abilityProp.description}</p>
        </li>
    );
}