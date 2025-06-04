import { useNavigate } from "react-router";

import '../../../../globalStyles/buttons.css';

export const OptionButton = () => {

    const navigate = useNavigate();

    return (
        <button className='weavile-button' 
            onClick={ () => navigate('/teamsList') }>{ 'Change Team' }</button>
    );
}