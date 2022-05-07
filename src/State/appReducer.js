import {authThunk} from './authReducer'
const SET_INITIALIZATION = 'SET_INITIALIZATION';


let initialState = {
 initializated : false
}

export const setInitialization = () => ({type : SET_INITIALIZATION})

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZATION: {
            return {
                ...state,
                initializated : true
            }
        }
        default: return state;
    }
}

export const appInitialization = () => {
    return (dispatch) => {
        let promise = dispatch(authThunk())
        Promise.all([promise])
        .then(() => {
            dispatch(setInitialization())
        })
    }
    
} 



