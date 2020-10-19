import {
    LOGIN_USER,
    REGISTER_USER,
    CREATE_TASK,
    LIST_TASKS,
} from '../_actions/types';
 

export default function(state={},action){
    switch(action.type){
        case REGISTER_USER:
            return {...state, register: action.payload }
        case LOGIN_USER:
            console.log(action)
            return { ...state, loginSucces: action.payload.jwt ? true : false  }
        case CREATE_TASK:
            return {...state, userData: action.payload }
        case LIST_TASKS:
            return {...state, ...action.payload  }
        default:
            return state;
    }
}