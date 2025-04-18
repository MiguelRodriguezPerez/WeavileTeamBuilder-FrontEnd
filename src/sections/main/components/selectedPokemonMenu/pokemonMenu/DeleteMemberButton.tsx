import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

import '../../../styles/selectedMemberMenu/teamMemberMenu/deleteMemberButton.css'

export const DeleteMemberButton = () => {
  
    return (
        <div className="delete-member-menu">
            <Button variant="contained" startIcon={<DeleteIcon/>}>Delete Pokemon</Button>
        </div>
    );
}