import { getNatureByNameRequest } from "../api/requestNatures/getNatureByNameRequest";
import { PokemonDataDTO } from "../domain/dataEntities";
import { PokemonType } from "../domain/enums";
import { PokemonTeamMember } from "../domain/teamMemberEntities";


export const convertPokemonDataToTeamMember = async (data: PokemonDataDTO, position: number): Promise<PokemonTeamMember> => {

    return {
        id: position,
        name: data.name,

        front_default_sprite: data.front_default_sprite,
        pc_sprite: data.pc_sprite,

        base_hp: data.base_hp,
        base_attack: data.base_attack,
        base_defense: data.base_defense,
        base_special_attack: data.base_special_attack,
        base_special_defense: data.base_special_defense,
        base_speed: data.base_speed,

        hp_ev: 0,
        attack_ev: 0,
        defense_ev: 0,
        special_attack_ev: 0,
        special_defense_ev: 0,
        speed_ev: 0,

        hp_iv: 0,
        attack_iv: 0,
        defense_iv: 0,
        special_attack_iv: 0,
        special_defense_iv: 0,
        speed_iv: 0,

        move_list: data.moves,
        ability: data.ability_list[0],
        item: undefined,
        type_list: data.type_list,
        tera_type: PokemonType.NORMAL,
        nature: (await getNatureByNameRequest('hardy')).data,
    };
};
