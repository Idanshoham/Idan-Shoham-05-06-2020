import axios from 'axios';
import { USER_DATA, USER_ERROR } from './types';

export const getUserDetailsByToken = userToken => async dispatch => {
    try {
        const response = await axios.post(
            'http://localhost:3090/getUserDetailsById', 
            { userToken }
        );

        dispatch({ 
            type: USER_DATA, 
            payload: response.data.user 
        });
        return response;
    } catch (e) {
        dispatch({ 
            type: USER_ERROR, 
            payload: 'invalid Username' 
        });
    };
}

export const getUserDetails = username => async dispatch => {
    try {
        const response = await axios.post(
            'http://localhost:3090/getUserDetails', 
            { username }
        );

        dispatch({ 
            type: USER_DATA, 
            payload: response.data.user 
        });
        return response;
    } catch (e) {
        dispatch({ 
            type: USER_ERROR, 
            payload: 'invalid Username' 
        });
    };
}

export const editUserDetails = userDetails => async dispatch => {
    try {
        const response = await axios.post(
            'http://localhost:3090/editUserDetails', 
            userDetails
        );

        dispatch({ 
            type: USER_DATA, 
            payload: response.data.user 
        });
        return response;
    } catch (e) {
        dispatch({ 
            type: USER_ERROR, 
            payload: 'invalid Username' 
        });
    };
}
