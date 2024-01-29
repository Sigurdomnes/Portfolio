import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  index: 0,
}

export const cubeIndexSlice = createSlice({
  name: 'cubeIndex',
  initialState,
  reducers: {
    setCubeIndex: (state, action) => {
      state.index = action.payload
      // Set document title based on active page (cube index)
      if (state.index === 2) document.title = 'Sigurd Omnes - About'
      else if (state.index === 1) document.title = 'Sigurd Omnes - Projects'
      else document.title = 'Sigurd Omnes'
    },
  },
})

export const { setCubeIndex } = cubeIndexSlice.actions

export default cubeIndexSlice.reducer