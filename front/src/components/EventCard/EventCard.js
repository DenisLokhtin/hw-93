import React from 'react';
import './EventCard.css'
import {useSelector} from "react-redux";

const EventCard = (props) => {
    const user = useSelector(state => state.users.user);
    const event = useSelector(state => state.reducer.events[0]);

    console.log(event.author)

    const userCheck = () => {
        if (user !== null) {
            return user.username;
        } else {
            return ''
        }
    };

    const printEdit = () => {
        if (userCheck() === event.author) {
            return (
                <div className='edit'>
                    <span>edit</span> or <span>delete</span>
                </div>
            )
        }
    };

    return (
        <div className="eventCard">
            <h3>{props.title}</h3>
            <span>{props.text}</span>
            <div>
                <p>Date: {props.date}</p>
                <p>Duration: {props.duration}</p>
                <p>Author: {props.author}</p>
            </div>
            {printEdit()}
        </div>
    )
};

export default EventCard;