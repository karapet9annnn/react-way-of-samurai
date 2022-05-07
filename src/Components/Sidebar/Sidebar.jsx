import css from './Sidebar.module.css'
import {Link} from 'react-router-dom';
function Sidebar(props) {
  // let users = props.data.map(user => {
  //   return <Users data={user.name}/>
  // })
  return (
    <div className={css.sidebar}>
      <Link to='/'>Home</Link>
      <Link to='/messages'>Messages</Link>
      <Link to='/users'>Users</Link>
      <Link to='#'>Music</Link>
      <Link to='#'>News</Link>
      <Link to='#'>Settings</Link>
      {/* <div className={css.friendsBlock}>
        {users}
      </div> */}
    </div>
  );
}

export default Sidebar;