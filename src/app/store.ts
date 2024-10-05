import { configureStore } from '@reduxjs/toolkit'
import { appReducer } from '@/app/appSlice'
import { usersReducer } from '@/features/users/model/usersSlice'

export const store = configureStore({
  reducer: {
    app: appReducer,
    users: usersReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
