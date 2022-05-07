import UserPostsContainer from './Posts/UserPostsContainer';
import React from 'react';
import Profile from './Profile/Profile'
import css from './Home.module.css'


function Home({updateStatusThunk,status,profile}) {
  return (
    <div className={css.home}>
      <Profile updateStatusThunk={updateStatusThunk} status={status} user={profile}/>
      <UserPostsContainer />
    </div>
  )
}

export default Home;