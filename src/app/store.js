import { configureStore } from '@reduxjs/toolkit';
import authReducer  from '../features/login/loginSlice';
import serviceReducer  from '../features/home/homeSlice';
import bookingReducer  from '../features/service/serviceSlice';


export const store = configureStore({
  reducer: {
    login: authReducer,
    services: serviceReducer,
    booking:bookingReducer,
  },
  devTools: true,
});


