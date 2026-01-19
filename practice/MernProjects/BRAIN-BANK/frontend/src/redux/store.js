import { configureStore } from '@reduxjs/toolkit'
import thoughtReducer from './slice/ThoughtsSlice'

export const store = configureStore({
  reducer: {thoughts : thoughtReducer},
})