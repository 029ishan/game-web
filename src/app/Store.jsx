import { configureStore,combineReducers } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist"
import cartReducer from "../features/CartSlice";
import detailReducer from "../features/DetailSlice";


const persistConfig={
  key:root,
  version:1,
  storage
}
const reducer=combineReducers({

  detailslice:detailReducer,
  addtocart:cartReducer
    
})

const persistedReducer=persistReducer(persistConfig,reducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
     
    }),
});