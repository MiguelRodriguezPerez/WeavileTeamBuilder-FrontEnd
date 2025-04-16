import { AbilityData } from "../../../../../../../domain/dataEntities";
import { toPascalCase } from "../../../../../../../globalHelpers";
import '../../../../../styles/selectedMemberMenu/elementCards/abilityCard.css'

export const AbilityCard = ({ ability }: { ability: AbilityData }) => {

    return (
        <li key={ability.id} className="ability-card">
            <h4>{toPascalCase(ability.name)}</h4>
            <p>{ability.description}</p>
        </li>
    );
}