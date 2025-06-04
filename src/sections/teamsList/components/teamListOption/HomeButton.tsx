import { useNavigate } from "react-router";

import '../../../../globalStyles/buttons.css';

export const HomeButton = () => {

    const navigate = useNavigate();

    return (
        <button className='weavile-button' 
            onClick={ () => navigate('/') }>{ 'Home' }</button>
    );
}