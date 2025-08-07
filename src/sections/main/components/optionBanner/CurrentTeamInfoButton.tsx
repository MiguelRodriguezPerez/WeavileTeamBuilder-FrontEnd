import { useLocation, useNavigate } from "react-router";

import buttonStyle from '../../../../globalStyles/buttons.module.css';

export const CurrentTeamInfoButton = () => {

    const navigate = useNavigate();
    const { pathname } = useLocation();

    return (
        <div>
            {
                pathname === '/currentTeamInfo' ?
                    <button className={ buttonStyle['weavile-button-outlined'] }
                    onClick={() => navigate('/')}>{'Home'}</button>
                :
                    <button className={ buttonStyle['weavile-button-outlined'] }
                    onClick={() => navigate('/currentTeamInfo')}>{'Member List'}</button>
            }
        </div>
    );
}