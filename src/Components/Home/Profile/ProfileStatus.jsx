import React, { useEffect, useState } from 'react';
import css from './Profile.module.css'


const ProfileStatus = (props) => {
  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  },[props.status])

  const activateEditMode = () => {
    setEditMode(true)
  }
  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatusThunk(status)
  }

  const onChangeValue = (e) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <div className={css.status}>
      {!editMode ?
        <div>
          <span onDoubleClick={activateEditMode}>{props.status || '------'}</span>
        </div>
        :
        <div>
          <input autoFocus onChange={onChangeValue} onBlur={deactivateEditMode} value={status} />
        </div>
      }
    </div>
  )
}


export default ProfileStatus;