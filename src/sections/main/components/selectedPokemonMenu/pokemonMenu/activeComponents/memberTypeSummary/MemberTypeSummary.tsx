import { PokemonTeamMember } from "../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../globalContext/WeavileStore";
import { toPascalCase } from "../../../../../../../globalHelpers";
import { getPokemonCoveredTypes } from "../../../../../../../globalHelpers/pokemonTypes/memberTypeCoverage";
import { MemberTypeGrid } from "./MemberTypeGrid";

import '../../../../../styles/selectedMemberMenu/typeCoverageTable/typeCoverageTable.css';
import { getMemberWeakness } from "../../../../../../../globalHelpers/pokemonTypes/memberTypeInteractions";


export const MemberTypeSummary = () => {

    const selectedPokemon: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);
    const pokemonName = selectedPokemon.name!;
    const pokemonTypes = selectedPokemon.type_list!;

    return (
        <section className="type-coverage-table">
            <h1>{toPascalCase(pokemonName)} types covered </h1>
            <h4>Member move coverage: </h4>
            <MemberTypeGrid heading={pokemonName + ' moves are effective against'}
                typeList={getPokemonCoveredTypes(selectedPokemon)} />
            <h4>Member type summary: </h4>
            {/* ... */}
            <MemberTypeGrid heading={pokemonName + ' is weak against: '}
                typeList={ getMemberWeakness(pokemonTypes) } />
            <MemberTypeGrid heading={pokemonName + ' resists: '}
                typeList={ getMemberWeakness(pokemonTypes) } />
            
            
            <h4>Member team summary</h4>
            {/* ... */}
        </section>
    );
}