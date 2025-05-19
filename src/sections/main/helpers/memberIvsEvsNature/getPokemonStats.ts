import { PokemonDataDTO } from "../../../../domain/dataEntities";

export const getPokemonStats = (data: PokemonDataDTO) => {
 
    return {
        HP: data.base_hp,
        Atk: data.base_attack,
        Def: data.base_defense,
        SpA: data.base_special_attack,
        SpDef: data.base_special_defense,
        Speed: data.base_speed,
      };
}
