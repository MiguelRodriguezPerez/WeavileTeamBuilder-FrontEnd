import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import useWeavileStore from '../../../../../globalContext/WeavileStore';
import { PokemonTeam, PokemonTeamMember } from '../../../../../domain/teamMemberEntities';
import { convertMemberToNullMember, updateStoredTeam } from '../../../helpers/nonLoggedUser';

export const DeleteMemberButton = () => {

    /* No preguntes porque, pero intente ponerle estilos usando styled() 
    para separar el estilo del nodo html y no hubo manera de que mostrara el texto
    del botón, a pesar de que si era capaz de añadirle los estilos */

    const changeSelectedPokemon = useWeavileStore(state => state.changeSelectedPokemon)
    const changeSelectedTeam = useWeavileStore(state => state.changeSelectedTeam)
    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember)!;
    const selectedTeam: PokemonTeam = useWeavileStore(state => state.selectedPokemonTeam)!;

    const deleteEvent = () => {
        const deletedMember: PokemonTeamMember = convertMemberToNullMember(selectedMember);
        selectedTeam.teamMembers[deletedMember.id] = deletedMember;
        /* No preguntes porque, pero este objeto es necesario; no puedes cambiar directamente selectedTeam
        y luego pasárselo a la función que actualiza el contexto */
        const updatedTeam: PokemonTeam = {
            id : selectedTeam!.id,
            name: selectedTeam!.name,
            teamMembers: selectedTeam.teamMembers,
            teamType: selectedTeam!.teamType,
        }

        updateStoredTeam(updatedTeam);
        changeSelectedTeam(updatedTeam);
        changeSelectedPokemon(deletedMember);
    }

    return (
        <div>
            <Button
                onClick={ deleteEvent }
                startIcon={<DeleteIcon />}
                sx={{
                    backgroundColor: '#da2c1f',
                    textTransform: 'none',
                    color: '#ffffff',
                    padding: '10px 50px',
                    fontSize: '0.95rem',
                    borderRadius: '12px',
                    margin: '0%',
                    display: 'flex',
                    justifySelf:'center'
                }}
            >
                Delete Pokemon
            </Button>
        </div>
    );
}
