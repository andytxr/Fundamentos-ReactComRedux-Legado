import 'react';;
import './style.css';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import Field from './field.jsx';
import fieldReducer from './fieldReducer.js';
import Count from './counter.jsx';
import counterReducer from './counterReducer.js';

const reducers = combineReducers({

    field: fieldReducer,
    count: counterReducer

});

export default props => (

    <Provider store={createStore(reducers)}>
        <Field initialValue="Hi"></Field>
    </Provider>

)

console.log('Working');