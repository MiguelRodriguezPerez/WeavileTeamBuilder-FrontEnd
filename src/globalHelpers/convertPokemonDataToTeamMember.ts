import { NatureApiFactory } from '../../api/requests/natureApi';
import { PokemonDataDto } from "../domain/dataEntities";
import { PokemonTeamMember } from "../domain/teamMemberEntities";


export const convertPokemonDataToTeamMember = async (data: PokemonDataDto, position: number): Promise<PokemonTeamMember> => {

    const natureApi = NatureApiFactory();

    return {
        pokemon_data_id: data.id,
        team_index_id: position,
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

        hp_iv: 31,
        attack_iv: 31,
        defense_iv: 31,
        special_attack_iv: 31,
        special_defense_iv: 31,
        speed_iv: 31,

        move_list: [],
        ability: data.ability_list[0],
        item: null,
        type_list: data.type_list,
        tera_type: null,
        nature: (await natureApi.getNatureByName('hardy')).data,
    };
};
