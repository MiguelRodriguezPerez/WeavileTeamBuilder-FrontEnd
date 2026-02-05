export const createNullMember = (team_index_id: number) => {
    return  {
            team_index_id: team_index_id, //Haz que se base en la posición del array
            pokemon_data_id: null, 
            name: null,
    
            front_default_sprite: null, // Sospechoso de fallar
            pc_sprite: null, // Sospechoso de fallar
    
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
            speed_iv: 0,
    
            /* Al borrar movimientos en el cliente tienes que permitir 
            que los elementos del array puedan ser null */
            move_list: [],
            ability: null,
            item: null,
            type_list: [],
            tera_type: null,
            nature: {
                decreased_stat: "",
                id: 1,
                increased_stat: "",
                name: "hardy"
            },
        }
}