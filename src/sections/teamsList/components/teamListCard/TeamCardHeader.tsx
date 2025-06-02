
import '../../styles/teamCard/teamCardHeader.css'

export const TeamCardHeader = ({ teamName } : { teamName: string }) => {
  
    return (
        <div className="team-card-header">
           <h4 className='team-name'>{ teamName }</h4>
           <img src="/images/teamsList/trashIcon.png" alt="deleteTeam.png" /> 
        </div>
    );
}