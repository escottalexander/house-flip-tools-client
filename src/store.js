import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';
import { reducer } from './reducers';

const rootReducer = combineReducers({
    reducer: reducer,
    form: formReducer
})

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

