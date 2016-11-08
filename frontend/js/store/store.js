import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/index';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
