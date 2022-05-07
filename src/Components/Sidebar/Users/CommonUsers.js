import css from './CommonUsers.module.css'
let commonUsers = (props) => {
    return <div className={css.profile}>
        <img src="https://cspromogame.ru//storage/upload_images/avatars/833.jpg" alt="ava" />
        <p>{props.data}</p>
    </div>
}
export default commonUsers