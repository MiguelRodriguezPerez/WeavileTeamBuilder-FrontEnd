import { useEffect, useState } from "react";
import { AbilityData, ItemData, MoveData } from "../../../../../../domain/dataEntities";
import { ElementGridProps } from "./ElementGridProps";

export const ElementGrid = ({ dataPromise, cardComponent } : ElementGridProps) => {

    const [ currentCollection, setCurrentCollection ] = useState<ItemData[] | MoveData[] | AbilityData[] | undefined>(undefined);
    // const currentPokemonData: PokemonDataDTO = useContext(SelectedPokemonContext)!.currentPokemonData!;
    
    useEffect(() => {
        dataPromise.then((response) => {
            setCurrentCollection(response.data)
        })
    },[dataPromise,cardComponent]);
  
    return (
        <ul>
            {
                currentCollection!.map((currentThing) => (
                    // TODO: Componentes cartas. Actualizar ElementGridProps
                ))
            }
        </ul>
    );
}