import { PokemonTeamMember } from "../../../../domain/teamMemberEntities"

export const convertMemberToNullMember = (member: PokemonTeamMember):PokemonTeamMember => {
    
    const nullMember: PokemonTeamMember = {
        id: 1,
        name: null,
        front_default_sprite: null,
        pc_sprite: null,
        ability: null,
        item: null,
        move_list: [],
        nature: null,
        tera_type: null,
        type_list: null,
        base_hp: 0,
        base_attack: 0,
        base_defense: 0,
        base_special_attack: 0,
        base_special_defense: 0,
        base_speed: 0,
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
        speed_iv: 0
    }

    return {
        ...nullMember,
        id: member.id
    }
}