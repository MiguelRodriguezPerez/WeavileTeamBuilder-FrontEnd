import { Slider } from "@mui/material";
import useWeavileStore from "../../../../../../../globalContext/WeavileStore";
import { PokemonTeamMember } from "../../../../../../../domain/teamMemberEntities";

export const EvsSliderWrapper = () => {

    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);

    
  
    return (
        <Slider 
            size="small"
            defaultValue={0}
            min={0}
            max={255}
            step={1}
        />

    );
}