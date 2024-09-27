// store.js

import { configureStore } from '@reduxjs/toolkit';
import productReducer from './redux/productSlice'
import invoiceSlice from './redux/invoiceSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
    invoice: invoiceSlice,
  },
});

export default store