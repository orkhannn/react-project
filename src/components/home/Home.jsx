import React, {useContext}  from "react";
import Barber from '../barber/Barber'
import Nav from '../nav/Nav'
import './Home.css'
import AuthContext from '../../AuthContext';


function Home() {
    const {barbers} = useContext(AuthContext);

    const barberList = barbers.map((barber) => <Barber key={barber.id} barber={barber}></Barber>)

    return (
        <>
        <Nav></Nav>
        <div className="home-wrapper">
            <p>
            Find your trusted barber or discover talented barbers in your area. <br />
             We make it easy for you to browse through our growing community of barbers.
            </p>
            <h5>Barbers</h5>
            <div className="barber-list">
                {barberList} 
            </div>
        </div>
        </>   
    )
}

export default Home