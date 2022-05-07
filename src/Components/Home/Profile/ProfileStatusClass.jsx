import React from 'react';
import css from './Profile.module.css'


class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({
      editMode: true,
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    })
    this.props.updateStatusThunk(this.state.status)
  }

  onChangeValue = (e) => {
    this.setState({
      status: e.currentTarget.value,
    })

  }

  // if old status equalents to new status, component Willn't update Status Component, if else he updates.//
  ////////////////////////////////////////////////
  componentDidUpdate(oldProps,oldState){
    if(oldProps.status !== this.props.status){
      this.setState({
        status: this.props.status
      })
    } 
  }
  render() {
    return (
      <div className={css.status}>
        {

          this.state.editMode ? <div>

            <input autoFocus  onChange={this.onChangeValue} onBlur={this.deactivateEditMode} value={this.state.status} />
          </div>
            :
            <div>
              <span onDoubleClick={this.activateEditMode}>{this.props.status || '------'}</span>

            </div>
        }
      </div>
    )
  }

}

export default ProfileStatus;