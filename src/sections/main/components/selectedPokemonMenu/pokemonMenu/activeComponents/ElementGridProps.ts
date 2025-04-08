import { AxiosResponse } from "axios";
import { AbilityData, ItemData, MoveData } from "../../../../../../domain/dataEntities";

/* Necesitas este elemento para ElementGrid porque la alternativa sería declarar
estos tipos a bocajarro a lo largo del componente ElementGrid */

export type ElementGridProps = {
    dataPromise: Promise<AxiosResponse<ItemData[] | MoveData[] | AbilityData[]>>;
    cardComponent: (item: ItemData | MoveData | AbilityData) => React.ReactNode;
};