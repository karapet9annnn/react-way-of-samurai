import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer/Footer';
import HeaderContainer from './Components/Header/HeaderContainer';
import HomeContainer from './Components/Home/HomeContainer';
import MessagesContainer from './Components/Messages/MessagesContainer';
import Sidebar from './Components/Sidebar/Sidebar';

import Login from './Components/Login/Login';
import { connect } from 'react-redux'
import { appInitialization } from './State/appReducer'
import Preloader from './Components/Preloader/Preloader';
const UsersContainer = React.lazy(() => import('./Components/Users/UsersContainer'));
class App extends React.Component {


  componentDidMount() {
    this.props.appInitialization()
  }
  render() {
    if (!this.props.initializationStatus) {
      return <Preloader />
    }
    return (
      <div className="app">
        <BrowserRouter>
          <HeaderContainer />
          <Sidebar />
          <Routes>
            <Route path='/*' element={<HomeContainer />} />
            <Route path='/messages/' element={<MessagesContainer />} />

            <Route path='/users/' element={
              <Suspense fallback={<div>Page is loading, please wait...</div>}>
                <UsersContainer />
              </Suspense>
            
            } />

            <Route path='/profile/:userId' element={<HomeContainer />} />
            <Route path='/login' element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }

}

let mapStateToProps = (state) => {
  return {
    initializationStatus: state.app.initializated
  }
}
export default connect(mapStateToProps, { appInitialization })(App);
