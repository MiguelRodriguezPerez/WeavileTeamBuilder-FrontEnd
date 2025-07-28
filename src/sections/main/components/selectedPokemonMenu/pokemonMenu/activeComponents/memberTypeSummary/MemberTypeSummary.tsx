import { PokemonTeamMember } from "../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../globalContext/WeavileStore";
import { toPascalCase } from "../../../../../../../globalHelpers";
import { MoveCoverage, TypeSummary } from "./";
import { PartnerCoverages } from "./partnerCoverages";

import styles from '../../../../../styles/selectedMemberMenu/typeCoverageTable/typeCoverageTable.module.css';

export const MemberTypeSummary = () => {

    const selectedPokemon: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);

    return (
        <section className={ styles['type-coverage-table'] }>
            <h3>{ toPascalCase(selectedPokemon.name!) } type summary</h3>
            <MoveCoverage />
            <TypeSummary />
            <PartnerCoverages/>
        </section>
    );
}