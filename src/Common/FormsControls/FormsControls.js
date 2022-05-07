import React from "react"
import css from './FormsControls.module.css'



export function renderField({ input, label, type, meta: { touched, error} }) {
    return < div >
        <div>
            <input {...input} placeholder={label} type={type} />            
        </div>
        {touched && ((error && <span className={css.error}>{error}</span>))}
    </div >
}

