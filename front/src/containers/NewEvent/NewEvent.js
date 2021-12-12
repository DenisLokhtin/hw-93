import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {createEvent} from "../../store/actions/actions";

const NewEvent = (props) => {
    const dispatch = useDispatch();

    const [data, setData] = useState({
        text: '',
        title: '',
        date: '',
        duration: 1,
    });

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(createEvent());
    };

    return (
        <form onSubmit={onSubmit}>
            <p>
                <input
                    value={data.title}
                    onChange={(event => setData({...data, title: event.target.value}))}
                    type="text" placeholder="title"
                />
            </p>
            <p>
                <input
                    value={data.text}
                    onChange={(event => setData({...data, text: event.target.value}))}
                    type="text"
                    placeholder="text"
                />
            </p>
            <p>
                <label htmlFor="date">Event Date: </label>
                <input
                    value={data.date}
                    onChange={(event => setData({...data, date: event.target.value}))}
                    type="date"
                    id="date"
                    name="date"
                />
            </p>
            <p>
                <label htmlFor="duration">Event Duration (days): </label>
                <input
                    value={data.duration}
                    onChange={(event => setData({...data, duration: event.target.value}))}
                    type="number"
                    id="duration"
                    name="duration"
                    min='1'
                />
            </p>
            <button>Create</button>
        </form>
    )
};

export default NewEvent;