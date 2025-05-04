import { PokemonType } from "../../../../../../../../domain/enums";
import { PokemonTeamMember } from "../../../../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../../../../globalContext/WeavileStore";
import { assignPokemonTypeToPng } from "../../../../../../../../globalHelpers";
import { getMemberWeakness } from '../../../../../../../../globalHelpers/pokemonTypes/memberTypeInteractions/getMemberWeakness';
import { useWeaknessTypeGrid } from "../../../../../../hooks/selectedPokemonMenu";

export const WeaknessTypeGrid = ({ pokemonName } : { pokemonName: string }) => {

    const { type_list : memberTypeList }: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);
    const { getCoveredWeakness } = useWeaknessTypeGrid();

    // Terminar
  
    return (
        <>
            <div className="type-summary-div">
                <p>{ pokemonName + ' is weak against' }</p>
                <ul className='type-coverage-grid'>
                    {
                        getMemberWeakness(memberTypeList!).map((type) => (
                            <li key={type} >
                                {/* No puedes aplicar una sombra a una imagen directamete porque el nodo de la imagen
                                es rectangular y la sombra se aplicaría al rectangulo.
                                
                                En su lugar, tienes que encerrar la imagen en un div y aplicar la sombra a la imagen,
                                además de asegurar que la imagen ocupe todo el div y este con display block 
                                para asegurar que la sombra se aplique correctamente*/}
                                <div className={getCoveredWeakness().includes(type) ? 
                                            'type-is-covered'
                                            :
                                            ''
                                        }>
                                    <img src={assignPokemonTypeToPng(type)}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        display: 'block' // evita espacio debajo de img
                                      }}/>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
}