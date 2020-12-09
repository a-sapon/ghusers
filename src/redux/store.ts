import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import users from './slice';

const reducer = {
  users,
};

const rootReducer = combineReducers(reducer);

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
