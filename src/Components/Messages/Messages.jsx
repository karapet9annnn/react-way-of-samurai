import css from './Messages.module.css';
import MessBlank from './Components/MessBlank/MessBlank';
import MessUrl from './Components/MessUrl/MessUrl';
import React from 'react';
import { reduxForm, Field } from 'redux-form'
import { maxLengthCreator, required } from '../../utilities/validators/validator';
import { renderField } from '../../Common/FormsControls/FormsControls';


function Messages(props) {
  let addMessage = (newMessage) => {
    props.addMessage(newMessage.message)
  }

  const UsersData = props.data.users.map((elem, index) => {
    return <MessUrl id={elem.id} key={index} name={elem.name} />

  })

  const MessageData = props.data.messagesData.map((messageElem, index) => {
    return <MessBlank className={css.userMessage} key={index} message={messageElem.message} />
  })

  return (<div className={css.messages}>
    <div className={css.users}>
      {UsersData}
    </div>
    <div className={css.userMessages}>
      {MessageData}
      <MessageReduxForm onSubmit={addMessage} />
    </div>
  </div>
  );
}
let maxLength100 = maxLengthCreator(100)

let MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={css.textarea}>
      <Field label='Type message here...'
             name='message'
             type='text'
             component={renderField}
             validate={[required,maxLength100]}
             />
      <div className={css.button}>
        <button>SEND!</button>
      </div>
    </form>
  )
}

const MessageReduxForm = reduxForm({ form: 'message' })(MessageForm)




export default Messages;