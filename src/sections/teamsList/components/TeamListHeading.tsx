import '../styles/teamListHeading.css'
import '../../../globalStyles/blackFont.css'

export const TeamListHeading = () => {
  
    return (
        <header className='team-list-heading'>
            <h3>Current teams</h3>
            <div>
                <button className='weavile-button'>Create new team</button>
            </div>
        </header>
    );
}