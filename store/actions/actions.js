import * as actionTypes from './actionTypes';

export const changeValue = val => {
  return {
    type: actionTypes.CHANGE_VALUE,
    value: val
  };
};

export const addItem = () => {
  return {
    type: actionTypes.ADD_ITEM
  };
};
