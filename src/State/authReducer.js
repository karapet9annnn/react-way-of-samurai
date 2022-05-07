import { stopSubmit } from 'redux-form';
import { api } from './../api/api'

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.data,
            }
        }
        default: return state;
    }
}
//setUserData
export const setAuthUserData = (userId, login, email, isAuth) => ({ type: SET_AUTH_USER_DATA, data: { userId, login, email, isAuth } })

//getUserData
export const authThunk = () => {
    return async (dispatch) => {
        let data = await api.auth()
        if (data.resultCode === 0) {
            let { id, login, email } = data.data
            dispatch(setAuthUserData(id, login, email, true))
        }
    }

}


export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        let data = await api.login(email, password, rememberMe)
        if (data.resultCode === 0) {
            dispatch(authThunk())
        } else {
            dispatch(stopSubmit('login', { _error: data.messages }))
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        let data = await api.logout()

        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }
}

// export const authThunk = () => (dispatch) => {
//     api.auth().then(data => {
//                     if(data.resultCode === 0){
//                               let {id,login,email} = data.data
//                               dispatch(setAuthUserData(id,login,email))
//                             }
//                   })
// }


