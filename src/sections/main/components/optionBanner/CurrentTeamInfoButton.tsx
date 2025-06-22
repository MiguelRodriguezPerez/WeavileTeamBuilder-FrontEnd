import { useNavigate } from "react-router";

import buttonStyle from '../../../../globalStyles/buttons.module.css';

export const CurrentTeamInfoButton = () => {

    const navigate = useNavigate();

    return (
        <div>
            <button className={ buttonStyle['weavile-button-outlined'] }
                onClick={() => navigate('/currentTeamInfo')}>{'Member List'}</button>
        </div>
    );
}