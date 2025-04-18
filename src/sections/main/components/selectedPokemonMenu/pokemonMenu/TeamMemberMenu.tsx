import { SelectedPokemonDataProvider } from '../../../context/pokemonData/SelectedPokemonDataProvider';
import { SelectedComponentProvider } from "../../../context/selectedMember/SelectedComponentProvider";
import { RenderActiveElementGrid } from "./activeComponents/RenderActiveElementGrid";
import { MemberCard } from "./selectedMemberCard";
import { DeleteMemberButton } from './DeleteMemberButton';

import '../../../styles/selectedMemberMenu/teamMemberMenu/teamMemberMenu.css'


export const TeamMemberMenu = () => {

    return (
        // Contexto para los datos del pokemón seleccionado
        <SelectedPokemonDataProvider>
            {/* Contexto para cambiar el componente activo (MoveGrid, ItemGrid ...) */}
            <SelectedComponentProvider>
                <section className='team-member-menu'>
                    <MemberCard />
                    {/* Por la razón que sea no puedes montar el componente directamente aquí, 
                    hay que hacerlo en uno aparte */}
                    <RenderActiveElementGrid />
                    <DeleteMemberButton/>
                </section>
            </SelectedComponentProvider>
        </SelectedPokemonDataProvider>
    );
}