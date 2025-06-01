import { useLocation, useNavigate } from "react-router";

import '../../../../globalStyles/blackFont.css';
import '../../../../globalStyles/buttons.css';

export const OptionButton = () => {

    const { pathname } = useLocation();
    const navigate = useNavigate();
    const buttonText: string = (pathname === '/teamsList') ? 'Home' : 'Change Team';

    const buttonEvent = (): void => {
        (pathname === '/teamsList') ? navigate('/') : navigate('/teamsList');
    }

    return (
        <button className='weavile-button black-font' 
            onClick={ buttonEvent }>{ buttonText }</button>
    );
}