import { PokemonTeamMember } from "../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../globalContext/WeavileStore";
import { getPokemonCoveredTypes } from "../../../../../../../globalHelpers/pokemonTypes/memberTypeCoverage";
import { PokemonTypeGrid } from "./PokemonTypeGrid";

import styles from '../../../../../styles/selectedMemberMenu/typeCoverageTable/typeCoverageTableChildren/moveCoverageSection.module.css';
import { MemberTypesCoveredGrid } from "./MemberTypesCoveredGrid";

export const MoveCoverage = () => {

    const selectedPokemon: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);

    return (
        <section className={ styles['move-coverage-section'] }>
            <div className={ styles['move-coverage-paragraph'] }>
                <h4>Member move coverage</h4>
                <p>{ selectedPokemon.name! + ' moves are effective against' }</p>
            </div>
            <MemberTypesCoveredGrid typeList={ getPokemonCoveredTypes(selectedPokemon) } />
        </section>
    );
}