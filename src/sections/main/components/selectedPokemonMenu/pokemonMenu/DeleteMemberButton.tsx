import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { PokemonTeamMember } from '../../../../../domain/teamMemberEntities';
import useWeavileStore from '../../../../../globalContext/WeavileStore';
import { convertMemberToNullMember } from '../../../../../globalHelpers/pokemonTeams/nonLoggedUsers';
import { useUpdateTeam } from '../../../../../globalHooks/pokemonTeams';



export const DeleteMemberButton = () => {

    /* No preguntes porque, pero intente ponerle estilos usando styled() 
    para separar el estilo del nodo html y no hubo manera de que mostrara el texto
    del botón, a pesar de que si era capaz de añadirle los estilos */
    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);
    const { updateTeamWrapper } = useUpdateTeam();

    const deleteEvent = (): void => {
        const deletedMember: PokemonTeamMember = convertMemberToNullMember(selectedMember);
        updateTeamWrapper(deletedMember);
        /* No preguntes porque, pero este objeto es necesario; no puedes cambiar directamente selectedTeam
        y luego pasárselo a la función que actualiza el contexto */
    }

    return (
        <div className='delete-button-div'>
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
