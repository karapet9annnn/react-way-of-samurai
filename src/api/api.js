import * as axios from 'axios';

let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '5f79173a-f99c-4460-9b26-2f08563c223b'
    },
})

///////////////////DAL Layer Data Access Layer

export let api = {
    
    getUsers(currentPage = 1, usersToShow = 10){
        return instance.get(`users?page=${currentPage}&count=${usersToShow}`)
        .then(response => response.data) 
        
    },
    unFollow(userId){
        return instance.delete(`follow/${userId}`)
        .then(response =>  response.data)
    },
    follow(userId){
        return instance.post(`follow/${userId}`)
        .then(response => response.data)
    },
    auth(){
        return instance.get(`auth/me`)
        .then(response => response.data)
    },
    setProfile(userId){
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`).then(response => response.data)
    },
    updateStatus(status){
        return instance.put(`profile/status`, { status: status }).then(response => response.data)
    },
    login(email,password,rememberMe = false){
        return instance.post(`auth/login`,{email,password,rememberMe})
        .then(response => response.data)
    },
    logout(){
        return instance.delete(`auth/login`)
        .then(response => response.data)
    }

}




// export let usersApi = (currentPage = 1, usersToShow = 5) => {
//     return instance.get(`users?page=${currentPage}&count=${usersToShow}`)
//         .then(response => {
//             return response.data
//         })
// }