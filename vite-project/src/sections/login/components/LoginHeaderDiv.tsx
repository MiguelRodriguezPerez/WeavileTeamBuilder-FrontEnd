import { Button } from "@mui/material";

import '../styles/loginHeaderDiv.css'

export const LoginHeaderDiv = () => {
    // TODO: Redirect login

    return (
        <div className="login-header-div">
           <Button variant="contained">Login</Button>
           <Button variant="outlined">Create account</Button>
        </div>
    );
}