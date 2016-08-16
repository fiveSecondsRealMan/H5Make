'use strict';

const addItem = (text) => {
  return {
    type: 'ADD_ITEM',
    text
  }
};


export {
  addItem
}
