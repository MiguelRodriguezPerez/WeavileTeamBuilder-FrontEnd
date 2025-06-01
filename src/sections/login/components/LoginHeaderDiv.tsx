
import '../styles/loginHeaderDiv.css';
import '../../../globalStyles/buttons.css';

export const LoginHeaderDiv = () => {
    // TODO: Redirect login

    return (
        <div className="login-header-div">
           <button className='weavile-button'>Login</button>
           <button className='weavile-button weavile-button-outlined'>Create account</button>
        </div>
    );
}