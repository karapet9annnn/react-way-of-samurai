import React from "react";
import css from './Preloader.module.css'
import preloaderImg from './../../assets/img/loading-buffering.gif'

let Preloader = () => {
    return (
        <div className={css.preloader}>
            <img src={preloaderImg} />
        </div>
    )
}


export default Preloader;