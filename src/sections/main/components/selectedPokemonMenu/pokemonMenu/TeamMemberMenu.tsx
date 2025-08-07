import { SelectedPokemonDataProvider } from '../../../context/pokemonData/SelectedPokemonDataProvider';
import { SelectedComponentProvider } from "../../../context/selectedMenuComponent/SelectedComponentProvider";
import { RenderActiveElementGrid } from "./activeComponents/RenderActiveElementGrid";

import { DeleteMemberButton } from './selectedMemberCard/memberCard/DeleteMemberButton';
import { SelectedMoveMemberProvider } from '../../../context/selectedMemberMove';
import { MemberCard } from './selectedMemberCard/memberCard';

import styles from '../../../styles/selectedMemberMenu/teamMemberMenu.module.css'
import { MemberCardChildProvider } from '../../../context/memberCardChild';


export const TeamMemberMenu = () => {


    return (
        // Contexto para los datos del pokemón seleccionado
        <SelectedPokemonDataProvider>
            {/* Contexto para cambiar el componente activo (MoveGrid, ItemGrid ...) */}
            <SelectedComponentProvider>
                {/* Contexto para cambiar el índice del movimiento que selecciono el usuario */}
                <SelectedMoveMemberProvider>
                    <section className={ styles['team-member-menu'] }>
                        {/* Contexto para aplicar la sombra azul al campo del pokemón seleccionado */}
                        <MemberCardChildProvider>
                            <MemberCard />
                        </MemberCardChildProvider>
                        {/* No puedes usar un valor del contexto antes de que el contexto se renderice
                        por eso necesitas RenderActiveElementGrid*/}
                        <RenderActiveElementGrid />
                    </section>
                </SelectedMoveMemberProvider>
            </SelectedComponentProvider>
        </SelectedPokemonDataProvider>
    );
}