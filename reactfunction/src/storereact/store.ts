// import { configureStore } from "@reduxjs/toolkit";
// import type { IUserInfo } from "../models/IUserInfo";
// import type { ISessionState } from "./slice/sessionSlice";
// import { use } from "react";
// import sessionSlice from "./slice/sessionSlice";



// export interface IAppState {
//   session: ISessionState;
//   userProfile: IUserInfo;
// }


// const store=configureStore({
//     reducer:{
//         session:sessionSlice,
//         userProfile:userProfile
//     },
//     middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// })

// export const getState = () => store.getState();
// export const dispatch = store.dispatch;
// export default store;