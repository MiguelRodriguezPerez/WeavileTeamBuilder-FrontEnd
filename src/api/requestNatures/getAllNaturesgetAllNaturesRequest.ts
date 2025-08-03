import { AxiosResponse } from "axios";
import { NatureDto } from "../../domain/teamMemberEntities";
import { natureDataApi } from "./natureDataApi";

export const getAllNaturesRequest = async (): Promise<AxiosResponse<NatureDto[]>> => {

    const resultado = await natureDataApi.get('/getAllNatures');
    return resultado;

}