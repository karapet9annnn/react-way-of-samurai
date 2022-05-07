import css from './Users.module.css'
import { NavLink } from 'react-router-dom'

const User = ({user,followingInProcess,unfollow,follow}) => {
    return <div className={css.userCard}>
        <div className={css.leftBlock}>
            <NavLink to={'/profile/' + user.id}>
                <img src={
                    user.photos.small != null ? user.photos.small : 'https://i.stack.imgur.com/YaL3s.jpg'
                } alt='ava' />

            </NavLink>

            {user.followed
                ? <button disabled={followingInProcess.some(id => id === user.id)} onClick={() => {
                    unfollow(user.id)
                }}>Unfollow</button>

                : <button disabled={followingInProcess.some(id => id === user.id)} onClick={() => {
                    follow(user.id)
                }}>Follow</button>}
        </div>

        <div className={css.rightBlock}>
            <p>{user.name}</p>
            <p>{user.status || 'user.status'}</p>
            <p>{'user.location.city'}</p>
            <p>{'user.location.country'}</p>

        </div>
    </div>
}


export default User