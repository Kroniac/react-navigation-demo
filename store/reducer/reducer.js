import * as actionTypes from '../actions/actionTypes';

initialState = {
  value: '',
  items: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_VALUE:
      console.log(state);
      return {
        ...state,
        value: action.value
      };

    case actionTypes.ADD_ITEM:
      console.log(state);
      return {
        ...state,
        items: state.items.concat(state.value)
      };
    default:
      return state;
  }
};

export default reducer;
