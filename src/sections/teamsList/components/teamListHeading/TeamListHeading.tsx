import '../../styles/teamListHeading.css'
import { CreateNewTeamButton } from './CreateNewTeamButton';


export const TeamListHeading = () => {
  
    return (
        <header className='team-list-heading'>
            <h3>Current teams</h3>
            <div>
                <CreateNewTeamButton/>
            </div>
        </header>
    );
}