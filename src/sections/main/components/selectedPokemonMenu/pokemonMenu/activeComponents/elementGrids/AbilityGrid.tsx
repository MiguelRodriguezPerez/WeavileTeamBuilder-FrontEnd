import { AbilityData } from "../../../../../../../domain/dataEntities";
import { AbilityCard } from "../elementCards";

export const AbilityDataGrid = ({ abilityList } : { abilityList: AbilityData[] }) => {
  
    return (
        <ul>
           {
                abilityList.map((ability) => (
                    <AbilityCard ability={ability} key={ability.id}/>
                ))
           } 
        </ul>
    );
}