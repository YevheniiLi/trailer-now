import { createSlice } from '@reduxjs/toolkit'

export const appStateSlice = createSlice({
        name: 'AuthMode',
        initialState: {
            authModalOpen: false,
        },
        reducers: {
            setAuthModalOpen: (state, action) => {
             state.appState = action.payload
            },
        }
})

export const {
    setAuthModalOpen,
} = appStateSlice.actions;

export default appStateSlice.reducer;