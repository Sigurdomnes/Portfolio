import { configureStore } from '@reduxjs/toolkit'
import cubeIndexReducer from './features/cubeIndex/cubeIndexSlice'

export const store = configureStore({
  reducer: {
    cubeIndex: cubeIndexReducer,
  },
})