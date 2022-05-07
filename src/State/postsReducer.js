import { api } from './../api/api'

const ADD_POST = 'project/posts/ADD_POST';
const SET_PROFILE = 'project/posts/SET_PROFILE';
const SET_STATUS = 'project/posts/SET_STATUS'
const DELETE_POST = 'project/posts/DELETE_POST'

let initialState = {
    postsData: [
        { post: 'Kren hello', likes: 32, id: 1 },
        { post: 'Nike hello', likes: 32, id: 2 },
        { post: 'Sj hello', likes: 32, id: 3 },
        { post: 'Jake hello', likes: 32, id: 4 }
    ],
    profile: null,
    status: '',
}
export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                post: action.newPost,
                likes: 0,
                id: 5
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
            }
            // let newState = {...state}
            // newState.postsData = [...state.postsData]
            // newState.postsData.push(newPost)
            // newState.text = ''
            // return newState
        }
        case SET_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }

        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }

        }
        case DELETE_POST: {
            return {
                ...state,
                postsData: state.postsData.filter(post => {
                    return post.id != action.postId
                })
            }
        }

        default: return state;
    }
}

export const addPost = (newPost) => ({ type: ADD_POST, newPost })
export const setProfileAC = (profile) => ({ type: SET_PROFILE, profile })
export const setStatusAC = (status) => ({ type: SET_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })



////////THUNK
export const setProfileThunk = (userId) => {
    return async (dispatch) => {
        let data = await api.setProfile(userId)
            dispatch(setProfileAC(data));
    }
}

export const setStatusThunk = (userId) => {
    return async (dispatch) => {
        let data = await api.getStatus(userId)
        dispatch(setStatusAC(data));

    }
}

export const updateStatusThunk = (status) => {
    return async (dispatch) => {
        let data = await api.updateStatus(status)
            if (data.resultCode === 0) {
                dispatch(setStatusAC(status));
            }
    }
}






