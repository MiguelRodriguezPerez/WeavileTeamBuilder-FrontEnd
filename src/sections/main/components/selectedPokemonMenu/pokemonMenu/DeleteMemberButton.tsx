import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export const DeleteMemberButton = () => {

    /* No preguntes porque, pero intente ponerle estilos usando styled() 
    para separar el estilo del nodo html y no hubo manera de que mostrara el texto
    del botón, a pesar de que si era capaz de añadirle los estilos */

    return (
        <div>
            <Button
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
