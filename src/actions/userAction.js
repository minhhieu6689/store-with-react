import { LOAD_USERS, ADD_USER } from './type'
import Cookies from 'js-cookie';
import axios from 'axios'

export const loadUser = () => dispatch => {
    let token = Cookies.get('token');
    let config = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
    axios.get(
        'https://localhost:44379/api/Users',
        config
    )
        .then(response => {
            dispatch({
                type: LOAD_USERS,
                payload: response.data
            })
        })
        .catch()
}

export const addUser = (email, password) => dispatch => {
    let token = Cookies.get('token');
    let config = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
    axios.post(
        'https://localhost:44379/api/Users/Register',
        {
            Email: email,
            PasswordHash: password
        },
        config
    )
        .then((response) => {
            console.log('from AddUser');
            console.log(response);
            dispatch({
                type: ADD_USER,
                payload: response.data
            })
        })
        .catch()
}