import { configureStore,combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import authReducer  from '../features/login/loginSlice';
import serviceReducer  from '../features/home/homeSlice';
import bookingReducer  from '../features/service/serviceSlice';



const reducers = combineReducers({
  login: authReducer,
  services: serviceReducer,
  booking:bookingReducer,
});

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig,reducers);

export const store = configureStore({
  reducer:persistedReducer,
  devTools: true,
});


