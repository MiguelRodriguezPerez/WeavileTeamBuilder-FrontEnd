import { AxiosResponse } from "axios";
import { ItemDto } from "../../domain/dataEntities";
import { itemDataApi } from "./itemDataApi";

export const getAllItemsRequest = async (): Promise<AxiosResponse<ItemDto[]>> => {
    const resultado = await itemDataApi.get('/allItems');
    return resultado;
}