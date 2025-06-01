import { SelectedPokemonDataProvider } from '../../../context/pokemonData/SelectedPokemonDataProvider';
import { SelectedComponentProvider } from "../../../context/selectedMenuComponent/SelectedComponentProvider";
import { RenderActiveElementGrid } from "./activeComponents/RenderActiveElementGrid";
import { MemberCard } from "./selectedMemberCard";
import { DeleteMemberButton } from './DeleteMemberButton';
import { SelectedMoveMemberProvider } from '../../../context/selectedMemberMove';

import '../../../styles/selectedMemberMenu/teamMemberMenu/teamMemberMenu.css'


export const TeamMemberMenu = () => {
    

    return (
        // Contexto para los datos del pokemón seleccionado
        <SelectedPokemonDataProvider>
            {/* Contexto para cambiar el componente activo (MoveGrid, ItemGrid ...) */}
            <SelectedComponentProvider>
                {/* Contexto para cambiar el índice del movimiento que selecciono el usuario */}
                <SelectedMoveMemberProvider>
                    <section className='team-member-menu'>
                        <MemberCard />
                        {/* No puedes usar un valor del contexto antes de que el contexto se renderice
                        por eso necesitas RenderActiveElementGrid*/}
                        <RenderActiveElementGrid />
                        <DeleteMemberButton />
                    </section>
                </SelectedMoveMemberProvider>
            </SelectedComponentProvider>
        </SelectedPokemonDataProvider>
    );
}