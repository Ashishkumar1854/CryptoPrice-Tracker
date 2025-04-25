import { configureStore } from "@reduxjs/toolkit";
// src/app/store.js
import cryptoReducer from "../features/crypto/cryptoSlice";

export const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
});
