import { createSlice } from '@reduxjs/toolkit'
export const userSlice = createSlice({
    name: 'User',
    initialState: {
      user: null,
      listFavorites: []
    },
    reducers: {
        setUser: (state, action) => {
            if (action.payload === null) {
              localStorage.removeItem('actkn')
              state.user = null
            } else {
              if (action.payload.token) {
                localStorage.setItem('actkn', action.payload.token)
              }
              const { id, ...data } = action.payload.data || {}
              state.user = id ? { ...data, id } : null
            }
          },          
      setListFavorites: (state, action) => {
        state.listFavorites = action.payload
      },
      removeFavorite: (state, action) => {
        const { mediaId } = action.payload
        state.listFavorites = [...state.listFavorites]
          .filter(e => e.mediaId.toString() !== mediaId.toString())
      },
      addFavorite: (state, action) => {
        state.listFavorites = [action.payload, ...state.listFavorites]
      }
    }
  })
  

export const {
    setUser,
    setListFavorites,
    addFavorite,
    removeFavorite
} = userSlice.actions;

export default userSlice.reducer;