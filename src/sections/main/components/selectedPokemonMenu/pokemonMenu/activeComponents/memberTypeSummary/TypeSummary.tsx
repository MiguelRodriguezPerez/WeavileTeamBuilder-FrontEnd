import { PokemonTeamMember } from "../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../globalContext/WeavileStore";
import { getMemberInmunities, getMemberNeutralities, getMemberResistances } from "../../../../../../../globalHelpers/pokemonTypes/memberTypeInteractions";
import { MemberTypeGrid } from "./MemberTypeGrid";
import { WeaknessTypeGrid } from "./WeaknessTypeGrid";

import styles from '../../../../../styles/selectedMemberMenu/typeCoverageTable/typeCoverageTableChildren/typeSummarySection.module.css';
import { getPokemonTypeEnumFromEntity } from "../../../../../../../globalHelpers/pokemonTypes/memberTypeCoverage";

export const TypeSummary = () => {

    const selectedPokemon: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);
    const pokemonName = selectedPokemon.name!;
    const memberTypes = selectedPokemon.type_list!;

    return (
        <section className={ styles['type-summary-section'] }>
            <h4>Member type summary: </h4>
            <WeaknessTypeGrid pokemonName={ selectedPokemon.name! } />
            <MemberTypeGrid paragraph={pokemonName + ' resists'}
                typeList={getMemberResistances(memberTypes)} />
            <MemberTypeGrid paragraph={pokemonName + ' is neutral against'}
                typeList={getMemberNeutralities(memberTypes)} />
            {
                getMemberInmunities(memberTypes).length > 0
                && <MemberTypeGrid paragraph={pokemonName + ' is inmune to '}
                    typeList={getMemberInmunities(memberTypes)} />
            }
        </section>
    );
}