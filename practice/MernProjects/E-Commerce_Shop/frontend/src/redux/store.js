import {configureStore} from '@reduxjs/toolkit';
import { productsAPI } from './api/productsAPI';



export const store = configureStore(
    {reducer: {
      [productsAPI.reducerPath]:productsAPI.reducer,
     },
     middleware :(getDefaultMiddleware) => 
        getDefaultMiddleware().concat(productsAPI.middleware)
    }
);