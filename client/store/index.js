'use strict';

import { createStore } from 'redux';
import rootReducers from 'reducers/index';

export default initialState => createStore(rootReducers, initialState);
