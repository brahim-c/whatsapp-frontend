import React from 'react';
import { auth, provider } from '../firebase/firebase';
import { useStateValue } from '../stateProvider/stateProvider';

import './login.styles.css';

function Login() {

    const [{ }, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider).then(result =>
            dispatch({
                type: 'SET_USER',
                user: result.user,
            })).catch(error =>
            alert(error.message));
    }

    return (
        <div className='login'>
            <div className="login__container">
           
            
            
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/766px-WhatsApp.svg.png" alt="" />
            <button onClick={signIn} className='login__button'>Login with Google</button>
        </div>
        </div>
    )
}

export default Login;
