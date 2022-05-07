import { connect } from "react-redux";
import {
    followingToggle,requestUsers,unfollow,follow
} from '../../State/usersReducer'
import React from "react";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import { getCurrentPage, getFollowingInProcess, getPreloader, getUsers, getTotalUsersCount, getUsersToShow } from "../../State/users-selectors";
class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.usersToShow)
    }

    onPageChange = (page) => {
        this.props.requestUsers(page,this.props.usersToShow)
    }
    render() {
        return <>
            {this.props.preloader ? <Preloader /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}//
                usersToShow={this.props.usersToShow}//
                onPageChange={this.onPageChange}//
                currentPage={this.props.currentPage}//
                users={this.props.users} //
                followingInProcess={this.props.followingInProcess}//
                follow={this.props.follow}//
                unfollow={this.props.unfollow}//
            />
        </>
    }
}

let mapStateToProps = (state) => {

    return {
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        usersToShow: getUsersToShow(state),
        totalUsersCount: getTotalUsersCount(state),
        preloader: getPreloader(state),
        followingInProcess: getFollowingInProcess(state),
        //followingInProcess is a state, but followingToggle is a dispatch action
    }
}
//state.users.usersToShow
let usersContainer = connect(mapStateToProps, {
    // followingToggle,
    requestUsers,unfollow,follow
})(UsersAPIContainer)
export default usersContainer





// let mapDispatchToProps = (dispatch) => {

//     return {
//         follow: (userId) => {
//             dispatch(follow(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollow(userId))
//         },
//         setUserAC: (users) => {
//             dispatch(setUser(users))
//         },
//         setCurrentPage: (page) => {
//             dispatch(setCurrentPage(page))
//         },
//         totalUsersCountAC: (usersCount) => {
//             dispatch(totalUsersCount(usersCount))
//         },
//         preloaderToggle: (bool) => {
//             dispatch(preloaderToggle(bool))
//         }
//     }

// }


// axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${elem}&count=${this.props.usersToShow}`,{withCredentials:true})
        //     .then(response => {
        //         this.props.setUser(response.data.items);
        //         this.props.preloaderToggle(false);
        //     })