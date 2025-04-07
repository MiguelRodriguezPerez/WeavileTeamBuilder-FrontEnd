import { MenuItem, Select } from "@mui/material";
import { PokemonTeamMember } from "../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../globalContext/WeavileStore";
import { SelectedPokemonContext } from "../../../../context/pokemonData";
import { useContext } from "react";

export const MemberAbilitiesDropdown = () => {

    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);
    // ?????
    const currentPokemonData = useContext(SelectedPokemonContext)!.currentPokemonData!;

    return (
        <Select label='Abilities' value={selectedMember.ability}>
                {
                    currentPokemonData.ability_list.map((ability) => (
                        <MenuItem value={ability.name} key={ability.id}/>
                    ))
                }
        </Select>
    );
}