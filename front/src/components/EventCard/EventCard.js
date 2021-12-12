import React from 'react';
import './EventCard.css'
import {useSelector} from "react-redux";

const EventCard = (props) => {
    const user = useSelector(state => state.users.user);
    const event = useSelector(state => state.reducer.events);

    const printEdit = () => {
        if (user === event.author) {
            return (
                <div className='edit'>
                    <span>edit</span> or <span>delete</span>
                </div>
            )
        }
    };

    return (
        <div className="eventCard">
            <h3>Title</h3>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid amet doloremque earum eos error, eum omnis voluptas. Dolorem, minus!</span>
            <div>
                <p>Date: 13.12.21</p>
                <p>Duration: 5 days</p>
            </div>
            {printEdit()}
        </div>
    )
};

export default EventCard;