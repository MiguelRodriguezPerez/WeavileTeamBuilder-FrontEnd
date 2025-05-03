import { PokemonTeamMember } from "../../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../../globalContext/WeavileStore";
import { getMemberInmunities, getMemberNeutralities, getMemberResistances, getMemberWeakness } from "../../../../../../../../globalHelpers/pokemonTypes/memberTypeInteractions";

import '../../../../../../styles/selectedMemberMenu/typeCoverageTable/typeCoverageTableChildren/typeSummarySection.css';
import { MemberTypeGrid } from "./MemberTypeGrid";

export const TypeSummary = () => {

    const selectedPokemon: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);
    const pokemonName = selectedPokemon.name!;
    const pokemonTypes = selectedPokemon.type_list!;

    return (
        <section className="type-summary-section">
            <h4>Member type summary: </h4>
            <MemberTypeGrid paragraph={pokemonName + ' is weak against'}
                typeList={ getMemberWeakness(pokemonTypes) }/>
            <MemberTypeGrid paragraph={pokemonName + ' resists'}
                typeList={ getMemberResistances(pokemonTypes) }/>
            <MemberTypeGrid paragraph={pokemonName + ' is neutral against'}
                typeList={ getMemberNeutralities(pokemonTypes) }/>
            {
                getMemberInmunities(pokemonTypes).length > 0
                && <MemberTypeGrid paragraph={pokemonName + ' is inmune to '}
                typeList={ getMemberInmunities(pokemonTypes) }/>
            }
        </section>
    );
}