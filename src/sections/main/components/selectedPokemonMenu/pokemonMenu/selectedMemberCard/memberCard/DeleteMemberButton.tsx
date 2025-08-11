import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { useQueryClient } from '@tanstack/react-query';
import { PokemonTeamMember } from '../../../../../../../domain/teamMemberEntities';
import useWeavileStore from '../../../../../../../globalContext/WeavileStore';
import { convertMemberToNullMember } from '../../../../../../../globalHelpers/pokemonTeams/nonLoggedUsers';
import { useUpdateTeam } from '../../../../../../../globalHooks/pokemonTeams';

import styles from '../../../../../styles/selectedMemberMenu/memberCard/deleteButtonDiv.module.css';

export const DeleteMemberButton = () => {

    /* No preguntes porque, pero intente ponerle estilos usando styled() 
    para separar el estilo del nodo html y no hubo manera de que mostrara el texto
    del botón, a pesar de que si era capaz de añadirle los estilos */
    const selectedMember: PokemonTeamMember = useWeavileStore(state => state.selectedPokemonMember!);
    const { updateTeamWrapper } = useUpdateTeam();
    const queryClient = useQueryClient();

    const deleteEvent = (): void => {
        const deletedMember: PokemonTeamMember = convertMemberToNullMember(selectedMember);
        queryClient.removeQueries(
            {
                queryKey:[ 'pokemon', selectedMember.name ]
            }
        );
        
        updateTeamWrapper(deletedMember);
        
    }

    return (
        <div className={ styles['delete-button-div'] }>
            <Button
                onClick={deleteEvent}
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
                    justifySelf: 'center'
                }}
            >
                Delete Pokemon
            </Button>
        </div>
    );
}
