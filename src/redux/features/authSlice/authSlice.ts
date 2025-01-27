import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { TUser } from "@/types/userTypes";
//import Cookies from "js-cookie";

export type TInitialState = {
    user: null | TUser;
    token: null | TUser;
};

const initialState: TInitialState = {
    user: null,
    token: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
            //Cookies.set("accessToken", token);
        },
        logOut: (state) => {
            state.user = null;
            state.token = null;
            //Cookies.remove("accessToken");
        },
    },
});

export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;

export const useCurrentToken = (state: RootState) => state.auth
export const selectCurrentUser = (state: RootState) => state.auth;