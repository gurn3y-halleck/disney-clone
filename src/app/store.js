import { configureStore, getDefaultMiddleware  } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import logger from 'redux-logger'

export default configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
    /*middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),*/
});