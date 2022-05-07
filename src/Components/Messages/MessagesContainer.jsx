import Messages from './Messages'
import { addMessageActionUpdate} from '../../State/messagesReducer';
import { connect } from 'react-redux'
import { withAuthRedirect } from './../../hoc/withAuthRedirect/withAuthRedirect';
import { compose } from 'redux'


let mapStateToProps = (state) => {
  
  return {
    data: state.dialogPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (newMessage) => {
      dispatch(addMessageActionUpdate(newMessage))
    },
    
  }
}

///////////// HOC
// let AuthRedirectComponent = withAuthRedirect(Messages)

// let MessagesContainer = withAuthRedirect( connect ( mapStateToProps, mapDispatchToProps ) ( Messages ) );
//  withAuthRedirect
export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Messages)

       // State      =>       MSTP,        MDTP        =>       Props                =>     Props    =>
// MessagesContainer => connect(AuthRedirectComponent) => withAuthRedirect(Messages) => Messages
