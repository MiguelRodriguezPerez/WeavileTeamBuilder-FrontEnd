import { useNavigate } from "react-router";

import styles from '../../../../globalStyles/buttons.module.css'

export const HomeButton = () => {

    const navigate = useNavigate();

    return (
        <button className={styles['weavile-button']}
            onClick={ () => navigate('/') }>{ 'Home' }</button>
    );
}