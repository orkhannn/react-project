import React, {useContext} from "react";
import { useNavigate } from 'react-router-dom'
import './Barber.css';
import AuthContext from '../../AuthContext';

function Barber({barber}) {
    const {currentBarber ,changeCurrentBarber} = useContext(AuthContext);
    let navigate = useNavigate()

    const handleClick = () => {
        changeCurrentBarber(barber);
        console.log(currentBarber);
        navigate('/barber-details')
    }

    return (
            <div className="barber-container">
                <h4>{barber.fname + ' ' + barber.lname }</h4>
                {/* <p className="bio">{barber.bio}</p> */}
                <p className="address">{barber.address}</p>
                <p className="price">${barber.price}</p>
                <button className="profile-btn" onClick={handleClick}>View profile</button>
            </div>
    )
}

export default Barber