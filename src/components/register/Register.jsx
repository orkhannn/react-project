import React,  { useState, useContext }  from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css';
import AuthContext from '../../AuthContext';


function Register() {

    const {addBarber, addUser} = useContext(AuthContext);
    const [clientRegistration, setClientRegistration] = useState(false);
    let navigate = useNavigate()

    const handleClientRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const newUser = {
            email: email,
            password: password
        }
        addUser(newUser);

        e.target.email.value = '';
        e.target.password.value = '';
        navigate('/login', {replace: true});
    }

    const handleBarberRegister = (e) => {
        e.preventDefault();
        const fname = e.target.fname.value;
        const lname = e.target.lname.value;
        const email = e.target.email.value;
        const address = e.target.address.value;
        const price = e.target.price.value;
        const id = Math.floor(Math.random() * (100 - 11)) + 10;
        const newBarber = {
            id: id,
            fname: fname,
            lname: lname,
            email: email,
            bio: "",
            address: address,
            price: price,
            comments: [],
            booked: false
        };
        addBarber(newBarber);
        e.target.fname.value = "";
        e.target.lname.value = "";
        e.target.email.value = "";
        e.target.address.value = "";
        e.target.price.value = "";

        toast.success("Barber added successfully!")
        setClientRegistration(true);
    }

    return (
        <div className='register-form'>
            <ToastContainer/>
            <div className="form">
                <div className={`barber-image ${clientRegistration ? 'barber-image-left' : 'barber-image-right'}`}></div>
                <div className="container">
                    <div className="right-side">
                        <div className="wrapper">
                            <p className="client-switch-btn" onClick={() => setClientRegistration(true)}>I am a client</p>
                            <h5>Get discovered by more clients.</h5>
                            <form onSubmit={handleBarberRegister}>
                                <label htmlFor="fname">First name <span className="required">*</span></label><br></br>
                                <input type="text" id="fname" name="fname" required></input><br></br>
                                <label htmlFor="lname">Last name <span className="required">*</span></label><br></br>
                                <input type="text" id="lname" name="lname" required></input><br></br>
                                <label htmlFor="email">Email <span className="required">*</span></label><br></br>
                                <input type="email" id="email" name="email" required></input><br></br>
                                <label htmlFor="address">Address <span className="required">*</span></label><br></br>
                                <input type="text" id="address" name="address" required></input><br></br>
                                <label htmlFor="price">Price <span className="required">*</span></label><br></br>
                                <input type="number" id="price" name="price" min={0} required></input><br></br>
                                <input type="submit" value="Register"></input>
                            </form>
                        </div>
                    </div>
                    <div className="left-side">
                    <div className="wrapper">
                            <p className="barber-switch-btn" onClick={() => setClientRegistration(false)}>I am a barber</p>
                            <h5>Find talented barbers anywhere, anytime.</h5>
                            <form onSubmit={handleClientRegister}>
                                <label htmlFor="email">Email <span className="required">*</span></label><br></br>
                                <input type="email" id="email" name="email" required></input><br></br>
                                <label htmlFor="password">Password <span className="required">*</span></label><br></br>
                                <input type="password" id="password" name="password" required></input><br></br>
                                <input type="submit" value="Register"></input>
                            </form>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default Register
