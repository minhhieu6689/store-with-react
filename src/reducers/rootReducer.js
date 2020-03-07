import { LOAD_USERS,ADD_USER } from '../actions/type'

const initState ={
    users:[],
    user:null
}

const rootReducer = (state = initState, action) =>{
    switch(action.type){
        case LOAD_USERS:
            return{
                ...state,
                users: action.payload
            };
        case ADD_USER:
            return{
                ...state,
                user: action.payload
                
            }
        default:
            return state;
    }
    
}

export default rootReducer
