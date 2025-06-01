import { PokemonTeamMember } from "../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../globalContext/WeavileStore";
import { toPascalCase } from "../../../../../../../globalHelpers";
import { MoveCoverage, TypeSummary } from "./memberTypeSummaryChildren";

import '../../../../../styles/selectedMemberMenu/typeCoverageTable/typeCoverageTable.css';



export const MemberTypeSummary = () => {

    const selectedPokemon: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);

    return (
        <section className="type-coverage-table">
            <h3>{ toPascalCase(selectedPokemon.name!) } type summary</h3>
            <MoveCoverage/>
            <TypeSummary/>
            <MoveCoverage/>
            {/* Funciona porque type-coverage-table grid-row 1/6 */}
        </section>
    );
}