'use strict';

import {
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM
} from 'constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return Object.assign({}, state, { text: state.text });
    case DELETE_ITEM:
      return Object.assign({}, state, { id: state.id });
    case UPDATE_ITEM:
      return Object.assign({}, state, { data: state.data });
  }
};
