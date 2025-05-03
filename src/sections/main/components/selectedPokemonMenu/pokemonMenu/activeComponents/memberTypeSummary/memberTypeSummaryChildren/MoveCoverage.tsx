import { PokemonTeamMember } from "../../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../../globalContext/WeavileStore";
import { getPokemonCoveredTypes } from "../../../../../../../../globalHelpers/pokemonTypes/memberTypeCoverage";
import { TypeGrid } from "../TypeGrid";

import '../../../../../../styles/selectedMemberMenu/typeCoverageTable/typeCoverageTableChildren/moveCoverageSection.css';

export const MoveCoverage = () => {

    const selectedPokemon: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);

    return (
        <section className="move-coverage-section">
            <h4>Member move coverage</h4>
            <p>{selectedPokemon.name! + ' moves are effective against'}</p>
            <TypeGrid typeList={getPokemonCoveredTypes(selectedPokemon)} />
        </section>
    );
}