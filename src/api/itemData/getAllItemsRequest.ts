import { AxiosResponse } from "axios";
import { ItemData } from "../../domain/dataEntities";
import { itemDataApi } from "./itemDataApi";

export const getAllItemsRequest = async (): Promise<AxiosResponse<ItemData[]>> => {
    const resultado = await itemDataApi.get('/allItems');
    return resultado;
}