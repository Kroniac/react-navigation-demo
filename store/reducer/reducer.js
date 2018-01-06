import * as actionTypes from '../actions/actionTypes';

initialState = {
  value: '',
  items: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_VALUE:
      return {
        ...state,
        value: action.value
      };

    case actionTypes.ADD_ITEM:
      return {
        ...state,
        items: state.items.concat(state.value)
      };
    default:
      return state;
  }
};


export default reducer;
