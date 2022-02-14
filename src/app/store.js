import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../features/home/homeSlice';
import loginReducer from '../features/home/loginSlice';

const reducer = {
  home: homeReducer,
  login: loginReducer,
}

const store =  configureStore({
  reducer,
  devTool:true,
});

export default store;
