import { applyMiddleware, combineReducers, createStore,compose} from 'redux';
import { messagesReducer } from './messagesReducer';
import { postsReducer } from './postsReducer'
import { sidebarReducer } from './sidebarReducers';
import { usersReducer } from './usersReducer';
import { authReducer } from './authReducer';
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk'
import { appReducer } from './appReducer';


let reducers = combineReducers({
    postsPage: postsReducer,
    dialogPage: messagesReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
    
})

// let store = createStore(reducers,applyMiddleware(thunkMiddleware))



 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 const store = createStore( 
     reducers,  composeEnhancers( applyMiddleware(thunkMiddleware) )
     )
  
  window.store = store
export default store;