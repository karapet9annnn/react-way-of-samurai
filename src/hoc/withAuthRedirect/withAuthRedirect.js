import React from "react";
import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux'

//////////CLASS

// export const withAuthRedirect = (Component) => {
//     class RedirectComponent extends React.Component{
//         render() {
//                 return !this.props.isAuth ?  <Navigate to='/login' /> : <Component {...this.props}/>          
//         }
//     }
//     return connect(mapStateToPropsForRedirect)(RedirectComponent)
// }

////////////FUNCTIONAL
export const withAuthRedirect = (Component) => {

  let mapStateToProps = (state) => {
    return { isAuth: state.auth.isAuth }
  }

  let RedirectComponent = (props) => {
    return !props.isAuth ? <Navigate to='/login' /> : <Component {...props} />
  }

  return connect(mapStateToProps)(RedirectComponent)
}


