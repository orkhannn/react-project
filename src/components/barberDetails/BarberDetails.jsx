import React, {useContext} from "react";
import './BarberDetails.css';
import { ToastContainer, toast } from 'react-toastify';
import Nav from '../nav/Nav'

import AuthContext from '../../AuthContext';
        


function BarberDetails() {
    const {currentBarber, addReview, bookBarber, isRegistered} = useContext(AuthContext);

    const comments = currentBarber.comments.map(((comment, index) => (
        <div key={index}>
            <p className="commenter">
            {comment.costumer}
            </p>
            <p className="comment">
                "{comment.comment}"
            </p>
        </div>
        
    )))

    const handleClick = () => {
        if(!currentBarber.booked && isRegistered()){
            bookBarber(currentBarber.id);
            toast.success("Booked");
        } else if (currentBarber.booked && isRegistered()) {
            toast.warning("Already booked");
        }
        else if(!isRegistered()){
            toast.warning("You can't book a barber without an account");
        }
        
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const review = e.target.review.value;
        
        if(!currentBarber.booked) {
            toast.error("You can't leave a review on a barber you haven't booked yet")
        } else {
            addReview(currentBarber.id, review, 'You');
            toast.success("Review posted!");
            e.target.review.value = '';
        }
    }

    return(
        <>
         <ToastContainer/>
         <Nav></Nav>
            <div className="barber-info">
                <h4>{currentBarber.fname + ' ' + currentBarber.lname }</h4>
                <p className="bio">{currentBarber.bio}</p>
                <p className="address">{currentBarber.address}</p>
                <p className="price">${currentBarber.price}</p>
                <button className="book-btn" onClick={handleClick}>{currentBarber.booked? "Booked" : "Book"}</button>
            </div>
            <div className="reviews">
                <p>Reviews:</p>
                <div className="comments">
                    {comments}
                </div>
                <div className="add-review">
                    <form onSubmit={handleSubmit}>
                        <textarea name="review" cols="30" rows="10" placeholder="Leave a review..." required></textarea><br></br>
                        <input className="review-post" type="submit" value="Post" />
                    </form>      
                </div>
            </div>
        </>
    )

}

export default BarberDetails