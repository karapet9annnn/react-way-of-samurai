import { api } from './../api/api'
import { objectHelper } from '../utilities/validators/object-helpers/object-helpers';

const FOLLOW = 'project/users/FOLLOW';
const UNFOLLOW = 'project/users/UNFOLLOW';
const SET_USERS = 'project/users/SET_USERS';
const SET_CURRENT_PAGE = 'project/users/SET_CURRENT_PAGE';
const TOTAL_USERS_COUNT = 'project/users/TOTAL_USERS_COUNT';
const PRELOADER_TOGGLE = 'project/users/PRELOADER_TOGGLE';
const FOLLOWING_PROCESS = 'project/users/FOLLOWING_PROCESS'



let initialState = {
    usersArray: [],
    currentPage: 1,
    usersToShow: 100,
    totalUsersCount: 0,
    preloader: true,
    followingInProcess: [],
    fake: 10,
}
export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                usersArray: objectHelper(state.usersArray, action.userId,'id', {followed: true})
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                usersArray:  objectHelper(state.usersArray, action.userId,'id', {followed: false})
            }
        }
        case SET_USERS: {
            return {
                ...state,
                usersArray: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.page
            }
        }
        case TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.usersCount
            }
        }
        case PRELOADER_TOGGLE: {
            return {
                ...state,
                preloader: action.bool
            }

        }
        case FOLLOWING_PROCESS: {
            return {
                ...state,
                followingInProcess: action.isFetching
                    ? [...state.followingInProcess, action.userId]
                    : state.followingInProcess.filter(id => {
                        return id !== action.userId
                    })
            }

        }
        case 'OVESDU': {
            return {
                ...state,
                fake: state.fake + 1
            }
        }
        default: return state;
    }

}
export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUser = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page })
export const totalUsers = (usersCount) => ({ type: TOTAL_USERS_COUNT, usersCount })
export const preloaderToggle = (bool) => ({ type: PRELOADER_TOGGLE, bool })
export const followingToggle = (isFetching, userId) => ({ type: FOLLOWING_PROCESS, isFetching, userId })


export const requestUsers = (page, usersToShow) => {

    return async (dispatch) => {
        dispatch(preloaderToggle(true));
        dispatch(setCurrentPage(page))
        let data = await api.getUsers(page, usersToShow)
        dispatch(setUser(data.items));
        dispatch(totalUsers(data.totalCount))
        dispatch(preloaderToggle(false));
    }
}



const followUnfollowFlow = async (dispatch, actionCreator, userId, apiMethod) => {
    
    dispatch(followingToggle(true, userId))
    let data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(followingToggle(false, userId))

}


export const follow = (userId) => {
    return async (dispatch) => {
        let apiMethod = api.follow
        let actionCreator = followAC
        followUnfollowFlow(dispatch, actionCreator, userId, apiMethod)
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        let actionCreator = unfollowAC
        let apiMethod = api.unFollow
        followUnfollowFlow(dispatch, actionCreator, userId, apiMethod)
    }
}




                // usersArray: state.usersArray.map(user => {
                //     if (user.id === action.userId) {
                //         return { ...user, followed: true }
                //     }
                //     return user
                // })