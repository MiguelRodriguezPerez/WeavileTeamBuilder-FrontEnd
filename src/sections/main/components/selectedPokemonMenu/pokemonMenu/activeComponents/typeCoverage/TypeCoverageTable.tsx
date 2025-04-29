import { PokemonTeamMember } from "../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../globalContext/WeavileStore";
import { toPascalCase } from "../../../../../../../globalHelpers";
import { getPokemonCoveredTypes } from "../../../../../../../globalHelpers/pokemonTypes/memberTypeCoverage";
import { TypeCoverageGrid } from "./TypeCoverageGrid";

import '../../../../../styles/selectedMemberMenu/typeCoverageTable/typeCoverageTable.css';


export const TypeCoverageTable = () => {

    const selectedPokemon: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);

    return (
        <section className="type-coverage-table">
            <h1>{toPascalCase(selectedPokemon.name!)} types covered </h1>
            <h4>{toPascalCase(selectedPokemon.name!)} moves are effective against: </h4>
            <TypeCoverageGrid typeList={getPokemonCoveredTypes(selectedPokemon)} />
        </section>
    );
}