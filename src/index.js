import store from './State/Redux'
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'

// setInterval(() => {
//     store.dispatch({type:'OVESDU'})
// },1000)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store} >
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);



