import React, {useContext} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import './Nav.css';
import AuthContext from '../../AuthContext';

function Nav() {
    const {logOut, isRegistered} = useContext(AuthContext);
    let navigate = useNavigate()

    const handleClick = () => {
        if(isRegistered()) {
            logOut();
            toast.success("You are logged out")
        } else {
           navigate('/')
        }
    }

    return(
        <div className="nav-container">
            <ToastContainer></ToastContainer>
            <div className="nav">
                <button className='logout-btn' onClick={handleClick}>{isRegistered() ? "Delete Account" : "Register"}</button>
            </div>
        </div>
        
    )

};

export default Nav;