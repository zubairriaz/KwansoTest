import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    CREATE_TASK,
    LIST_TASKS,
} from './types';
import { USER_SERVER } from '../components/Config.js';

export function registerUser(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/register`,dataToSubmit,{headers:{"Access-Control-Allow-Origin": "*"}})
        .then(response => response.data);
    
    return {
        type: REGISTER_USER,
        payload: request
    }
}

export function loginUser(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/login`,dataToSubmit,{headers:{"Access-Control-Allow-Origin": "*"}})
                .then(response => response.data);

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function createTask(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/create-task`,dataToSubmit,{headers:{"Access-Control-Allow-Origin": "*","Authorization" : `Bearer ${localStorage.getItem("jwt")}`}})
    .then(response => response.data);

    return {
        type:CREATE_TASK ,
        payload: request
    }
}

export function listTasks(){
    const request = axios.get(`${USER_SERVER}/list-tasks`,{headers:{"Access-Control-Allow-Origin": "*","Authorization" : `Bearer ${localStorage.getItem("jwt")}`}})
    .then(response => response.data);

    return {
        type: LIST_TASKS,
        payload: request
    }
}

