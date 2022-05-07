import React from "react";
import css from './Users.module.css'

import Paginator from "../../Common/Paginator/Paginator";
import User from "./User";

let Users = (props) => {
    return <div>
        <Paginator totalItemsCount={props.totalUsersCount}
                   usersToShow={props.usersToShow}
                   currentPage={props.currentPage}
                   onPageChange={props.onPageChange}
        /> 
        {
            props.users.map((elem, index) => {
                return <div className={css.user} key={index}>
                <User user={elem} 
                      followingInProcess={props.followingInProcess}
                      unfollow={props.unfollow}
                      follow={props.follow}
                              
                /> 
                </div> 
                    
                
               
            })
        }

    </div>
}
export default Users;








                            // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${elem.id}`, {}, {
                            //     headers:{
                            //         'API-KEY' : '0183cadb-9d66-4c50-bde1-a9d81a6f70c4'
                            //     },
                            //     withCredentials: true
                            // })
                            //     .then(response => {
                            //         if(response.data.resultCode === 0){
                            //             props.follow(elem.id) 
                            //         }
                            //     })