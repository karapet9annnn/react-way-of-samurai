import {NavLink} from 'react-router-dom';
import css from './MessUrl.module.css'
const MessUrl = (props) => {
    let path = '/messages/' + props.id;
    return (
      <div className={css.messUrl}>
        <img src="https://cspromogame.ru//storage/upload_images/avatars/833.jpg" alt="ava" />
        <NavLink to={path}>{props.name}</NavLink>
      </div>
    
    )
  }
export default MessUrl;