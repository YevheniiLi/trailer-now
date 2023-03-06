import { createSlice } from '@reduxjs/toolkit'

export const AuthModalSlice = createSlice({
        name: 'AuthModal',
        initialState: {
            authModalOpen: false,
        },
        reducers: {
            setAuthModalOpen: (state, action) => {
             state.authModalOpen = action.payload
            },
        }
})

export const {
    setAuthModalOpen,
} = AuthModalSlice.actions;

export default AuthModalSlice.reducer;