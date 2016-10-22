import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import alerts from './alerts';
import posts from './posts';

const rootReducer = combineReducers({alerts, posts, routing: routerReducer });

export default rootReducer;
