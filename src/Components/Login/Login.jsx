import css from './Login.module.css'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator } from '../../utilities/validators/validator'
import { required } from './../../utilities/validators/validator'
import { renderField } from './../../Common/FormsControls/FormsControls'
import {login} from './../../State/authReducer'
import {connect} from 'react-redux'
import {Navigate} from 'react-router-dom'


let maxLength30 = maxLengthCreator(30)

function LoginForm(props) {
  return <div className={css.wrapper}>
    <div className={css.container}>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            label='E-mail'
            name='email'
            component={renderField}
            type="email"
            validate={[required, maxLength30]}
          />
        </div>
        <div>
          
          <Field 
            label='Password'
            name='password'
            component={renderField}
            type="text"
            validate={[required, maxLength30]} 
            />
        </div>
        <div className={css.rememberMe}>
          <Field name='rememberMe'
            component={renderField}
            type="checkbox"
            validate={null} />
          <p>Remember Me</p>
        </div>
        <button className={css.button} >Submit!</button>
      </form>
      <div className={css.error}>
        {props.error}
      </div>
    </div>
  </div>
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

let Login = (props) => {
  const onSubmit = (formData) => {
    let {email,password,rememberMe} = formData
    props.login(email,password,rememberMe)
  }

  if(props.isAuth){
    return <Navigate to={'/profile'} />
  }

  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit} />
  </div>
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps,{login})(Login);






