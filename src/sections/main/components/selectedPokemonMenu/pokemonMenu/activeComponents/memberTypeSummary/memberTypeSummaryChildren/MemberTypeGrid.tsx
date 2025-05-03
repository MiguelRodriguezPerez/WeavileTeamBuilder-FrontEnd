import { PokemonType } from "../../../../../../../../domain/enums";
import { PokemonTeamMember } from "../../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../../globalContext/WeavileStore";
import { getMemberWeakness } from "../../../../../../../../globalHelpers/pokemonTypes/memberTypeInteractions";
import { TypeGrid } from "../TypeGrid";

export const MemberTypeGrid = ( { paragraph, typeList } : { paragraph: string, typeList: PokemonType[]}) => {

    const selectedPokemon: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);

    return (
        <div>
            <p>{paragraph}</p>
            <TypeGrid typeList={typeList} />
        </div>
    );
}