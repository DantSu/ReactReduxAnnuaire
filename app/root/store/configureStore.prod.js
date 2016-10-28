import { createStore } from 'redux';
import moduleReducer from '../../module/reducer';

export default function configureStore(initialState) {
  return createStore(moduleReducer, initialState);
}