import React from 'react';
import Home from './Home'
import { connect } from 'react-redux';
import { setProfileThunk, setStatusThunk, updateStatusThunk } from './../../State/postsReducer'
import { withAuthRedirect } from './../../hoc/withAuthRedirect/withAuthRedirect'
import { withRouter } from './../../hoc/withRouter/withRouter.js'
import { compose } from 'redux'


class HomeContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
    }
    this.props.setProfileThunk(userId)
    this.props.setStatusThunk(userId)
  }

  render() {
    return (
      <Home {...this.props} status={this.props.status} updateStatusThunk={this.props.updateStatusThunk} profile={this.props.profile} />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.postsPage.profile,
    status: state.postsPage.status,
    authorizedUserId: state.auth.userId
  }
}

export default compose(connect(mapStateToProps, { setProfileThunk, setStatusThunk, updateStatusThunk }), withAuthRedirect, withRouter)(HomeContainer)

// export default withAuthRedirect( connect(mapStateToProps, { setProfileThunk })(HomeContainer));
