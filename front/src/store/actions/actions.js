import axios from "axios";
import {toast} from "react-toastify";

export const SET_EVENTS = 'SET_EVENTS';

export const setEvents = value => ({type: SET_EVENTS, payload: value});

export const fetchEvents = () => {
    return async dispatch => {
        try {
            const response = await axios.get('http://localhost:8001/events');
            dispatch(setEvents(response.data));
        } catch (e) {
            console.log(e)
        }
    };
};

export const createEvent = data => {
    return async () => {
        try {
            await axios.post('http://localhost:8001/events', data);
            toast.success('Event Created');
        } catch (e) {
            console.log(e)
        }
    };
};



