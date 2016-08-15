'use strict';

import { createStore, bindActionCreators } from 'redux';
import rootReducers from 'reducers/index';

export default initialState => createStore(rootReducers, initialState);
