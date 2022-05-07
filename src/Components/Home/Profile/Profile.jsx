import css from './Profile.module.css'
import React from 'react';
import Preloader from './../../Preloader/Preloader'
import ProfileStatus from './ProfileStatus'

function Profile({user,updateStatusThunk,status}) {
  if(!user){
    return <Preloader />
  }
  // debugger
  return (
    <div className={css.home}>
      <img src="https://ag-spots-2020.o.auroraobjects.eu/2020/06/24/bmw-m5-e60-2005-c953224062020212825_1.jpg" alt="m5 e60" />
      <img src={user.photos.large} alt="" />

      <ProfileStatus updateStatusThunk={updateStatusThunk} status={status}/> 

    </div>
  );
}

export default Profile;