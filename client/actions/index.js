'use strict';

import * as actionTypes from 'constants/actionTypes';

export function addItem (text) {
  return { type: actionTypes.ADD_ITEM, text };
};

export function deleteItem (id) {
  return { type: actionTypes.DELETE_ITEM, id };
};

export function updateItem (data) {
  return { type: actionTypes.UPDATE_ITEM, data }
};
