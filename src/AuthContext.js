import { createContext, useState } from "react";
import barbersList from './data'



const AuthContext = createContext();

export function AuthProvider({children}){

    const [barbers, setBarbers] = useState(barbersList);
    const [user, setUser] = useState(null);
    const [currentBarber, setCurrentBarber] = useState({
        id: 0,
        fname: '',
        lname: '',
        email: '',
        bio: "",
        address: '',
        price: '',
        comments: [],
        booked: false,
    })

    const isRegistered = () =>
     {
        return !(user === null);
    }

    const logOut = () => {
        setUser(null);
    }

    const bookBarber = (id) => {
        const copiedArray = Array.from(barbers);
        copiedArray.forEach(b => {
            if(b.id == id) {
                b.booked = true;
            }
        });
        setBarbers(copiedArray);
    }

    const addReview = (id, review, name) => {

        let comment = {
            costumer: name,
            comment: review
        }
         const copiedArray = Array.from(barbers)
         copiedArray.forEach(b => {
             if(b.id == id) {
                 b.comments.push(comment);
                 console.log(b);
             }
         });
        setBarbers(copiedArray);
    }

    const changeCurrentBarber = (barber) => {
        setCurrentBarber(barber);
    }

    const addBarber = (newBarber) => {
        setBarbers((prevState) => [...prevState, newBarber]);
    }

    const addUser = (newUser) => {
        setUser(newUser);
    }

    const removeUser = () => {
        setUser(null);
    }

    const checkUser = (email, password) => {
        if(user === null){
            return false;
        }
        else if (user.email != email || user.password != password){
            return false;
        }
        else return true;
    }

    return(
        <AuthContext.Provider value={{barbers, addBarber, user,
        addUser, removeUser, checkUser, currentBarber, changeCurrentBarber, addReview, bookBarber, isRegistered, logOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;