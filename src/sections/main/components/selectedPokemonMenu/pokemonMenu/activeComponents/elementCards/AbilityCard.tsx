import { AbilityData } from "../../../../../../../domain/dataEntities";

export const AbilityCard = ({ ability }: { ability: AbilityData }) => {

    return (
        <li key={ability.id}>
            <h4>{ability.name}</h4>
            <p>{ability.description}</p>
        </li>
    );
}