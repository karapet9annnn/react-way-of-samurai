import { createSelector } from "reselect"

const getUsersSelector = (state) => {
    return state.users.usersArray
}
export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)
})



////NOT FOR USE(RENDERING EVERY TIME AFTER CHANGING M.S.T.P.)
// export const getUsers = (state) => {
//     return state.users.usersArray.filter(u => true)
// }

export const getCurrentPage = (state) => {
    return state.users.currentPage
}
export const getUsersToShow = (state) => {
    return state.users.usersToShow
}
export const getTotalUsersCount = (state) => {
    return state.users.totalUsersCount
}
export const getPreloader = (state) => {
    return state.users.preloader
}
export const getFollowingInProcess = (state) => {
    return state.users.followingInProcess
}