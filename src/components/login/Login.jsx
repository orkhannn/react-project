import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import './Login.css';
import AuthContext from '../../AuthContext';

function Login() {

    const {checkUser} = useContext(AuthContext);
    let navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        if(checkUser(email, password)){
            navigate('/home', {replace: true});
        }
        else {
            toast.error('email or the password is incorrect!')
        }
    }

    return (
        <div className="login">
            <ToastContainer/>
            <div className="wrapper">
                <p className="to-signup" onClick={() => navigate('/')}>Back to signup</p>
                <h5> Whether you're going to see your usual barber <br /> or need to look clean on vacation, <br /> we make the process super simple.</h5>
                <form onSubmit={handleLogin}>
                    <label htmlFor="email">Email <span className="required">*</span></label><br></br>
                    <input type="email" id="email" name="email" required></input><br></br>
                    <label htmlFor="password">Password <span className="required">*</span></label><br></br>
                    <input type="password" id="password" name="password" required></input><br></br>
                    <input type="submit" value="Register"></input>
                </form>
            </div>
        </div>
    )
}

export default Login