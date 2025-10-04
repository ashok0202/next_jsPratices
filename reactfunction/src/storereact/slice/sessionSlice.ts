
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { LOCALSTORAGE_NAMES } from "../../models/constants";

// export interface ISessionState {
//   sessionToken: string;
//   refreshToken: string;
// }

// const initialState: ISessionState = {
//   sessionToken: "",
//   refreshToken: ""
// };


// const sessionSlice = createSlice({
//   name: "session",
//   initialState,
//   reducers: {
//     setSessionToken(state, action: PayloadAction<string>) {
//       if(action.payload)
//         localStorage.setItem(LOCALSTORAGE_NAMES.accessToken, action.payload);
//       state.sessionToken = action.payload;
//     },
//     setRefreshToken(state, action: PayloadAction<string>)     {
//       if(action.payload)
//         localStorage.setItem(LOCALSTORAGE_NAMES.refreshToken, action.payload);
//       state.refreshToken = action.payload;
//     }
//   },
// });

// export const { setSessionToken, setRefreshToken } = sessionSlice.actions;
// export default sessionSlice.reducer;