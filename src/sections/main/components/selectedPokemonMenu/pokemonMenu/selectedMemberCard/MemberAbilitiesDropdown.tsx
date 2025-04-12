import { MenuItem, Select } from "@mui/material";
import { PokemonTeamMember } from "../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../globalContext/WeavileStore";
import { SelectedPokemonDataContext } from "../../../../context/pokemonData";
import { useContext } from "react";

export const MemberAbilitiesDropdown = () => {

    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);
    // ?????
    const currentPokemonData = useContext(SelectedPokemonDataContext)?.currentPokemonData;

    console.log(currentPokemonData);
    

    return (
        <Select label='Abilities' value={selectedMember.ability}>
            {
                currentPokemonData?.ability_list?.map((ability) => (
                    <MenuItem value={ability.name} key={ability.id} />
                ))
            }
        </Select>
    );
}