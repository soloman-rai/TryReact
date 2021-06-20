import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: "",
    email: "",
    image: "",
    is_authenticated: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserLogin: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.image = action.payload.image;
            state.is_authenticated = true;
        },
        setUserSignOut: (state) => {
            state.name = "";
            state.email = "";
            state.image = "";
            state.is_authenticated = false;
        }
    }
})

// export the actions
export const { setUserLogin, setUserSignOut } = userSlice.actions;

// export const selectUsername = (state) => state.user.name;
// export const selectUserEmail = (state) => state.user.email;
// export const selectUserImage = (state) => state.user.image;
export const selectUser = (state) => state.user;

/// Export the Reducer
export default userSlice.reducer;