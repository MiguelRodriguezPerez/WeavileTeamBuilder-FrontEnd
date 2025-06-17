import { CreateNewTeamButton } from './CreateNewTeamButton';

import styles from '../../styles/teamListHeading.module.css'

export const TeamListHeading = () => {
  
    return (
        <header className={ styles['team-list-heading'] }>
            <h3>Current teams</h3>
            <div>
                <CreateNewTeamButton/>
            </div>
        </header>
    );
}