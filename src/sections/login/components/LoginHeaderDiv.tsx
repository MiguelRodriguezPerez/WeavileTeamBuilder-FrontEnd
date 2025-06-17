
import styles from '../styles/loginHeaderDiv.module.css';
import buttonStyles from'../../../globalStyles/buttons.module.css';

export const LoginHeaderDiv = () => {
    // TODO: Redirect login

    return (
        <div className={ styles['login-header-div'] }>
           <button className={ buttonStyles['weavile-button'] }>Login</button>
           <button className={ buttonStyles['weavile-button-outlined'] }>Create account</button>
        </div>
    );
}