import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: '',
    name:'',
    designation: '',
    country: '',
    isLoggedIn: false
}

const userSlice = createSlice({
    name: 'user data',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            return {...state, ...action?.payload?.[0]}
        },

        resetUser: () => {
            return {...initialState}
        }
    }
})

export default userSlice.reducer
export const { updateUser, resetUser } = userSlice.actions