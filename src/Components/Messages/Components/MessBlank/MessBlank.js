import css from './MessBlank.module.css'
const MessBlank = (props) => {  
    return (
      <div className={css.userMessage}><p>{props.message}</p></div>
    )
  }

export default MessBlank