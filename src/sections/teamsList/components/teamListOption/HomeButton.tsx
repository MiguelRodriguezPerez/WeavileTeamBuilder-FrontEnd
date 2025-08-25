import { useNavigate } from "react-router";

import styles from '../../../../globalStyles/buttons.module.css'

export const HomeButton = () => {

    const navigate = useNavigate();

    return (
        <div>
            <button 
                className={styles['weavile-button']}
                onClick={ () => navigate('/') }
                style={{ padding: '8px 35px'}}
                >{ 'Home' }</button>
        </div>
    );
}