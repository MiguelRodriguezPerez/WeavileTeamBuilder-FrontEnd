import { AxiosResponse } from "axios";
import { NatureData } from "../../domain/teamMemberEntities";
import { natureDataApi } from "./natureDataApi";

export const getAllNaturesRequest = async (): Promise<AxiosResponse<NatureData[]>> => {
 
    const resultado = await natureDataApi.get('/getAllNatures')   ;
    return resultado;
    
}