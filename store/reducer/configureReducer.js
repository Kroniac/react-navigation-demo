import { combineReducers, createStore } from 'redux';

import reducer from './reducer';


const rootReducer = combineReducers({
  login: reducer
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
