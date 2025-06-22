import { useNavigate } from "react-router";

import buttonStyle from '../../../../globalStyles/buttons.module.css';

export const ChangeTeamButton = () => {

    const navigate = useNavigate();

    return (
        <div>
            <button className={buttonStyle['weavile-button']}
                onClick={() => navigate('/teamsList')}>{'Change Team'}</button>
        </div>
    );
}