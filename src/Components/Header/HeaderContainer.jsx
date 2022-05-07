import Header from './Header'
import React from 'react';
import { connect } from 'react-redux'
import {logout} from './../../State/authReducer'

class HeaderContainer extends React.Component {
  render() {
    return (
      <Header {...this.props} />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

export default connect(mapStateToProps, {logout})(HeaderContainer);






    // axios
    //     .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials:true})
    //     .then(response => {
    //       if(response.data.resultCode === 0){
    //         let {id,login,email} = response.data.data
    //         this.props.setAuthUserData(id,login,email)
    //       }

    //     })

