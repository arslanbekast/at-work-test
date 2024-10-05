import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '@/features/users/api/usersApi.types'
import { usersApi } from '@/features/users/api/usersApi'
import { createAppAsyncThunk } from '@/common/utils/createAppAsyncThunk'

export const fetchUsers = createAppAsyncThunk<{ users: User[] }, void>(
  'users/fetchUsers',
  async () => {
    const users = await usersApi.getUsers()
    return { users }
  }
)

const initialState: UsersState = {
  users: [],
  loading: false,
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    editUser: (state, action: PayloadAction<UserDomain>) => {
      const index = state.users.findIndex(user => user.id === action.payload.id)
      if (index >= 0) {
        state.users[index] = action.payload
      }
    },
    changeUserStatus: (state, action: PayloadAction<{ id: number; status: UserStatus }>) => {
      const user = state.users.find(user => user.id === action.payload.id)
      if (user) {
        user.status = action.payload.status
      }
    },
    hideUser: (state, action: PayloadAction<{ id: number }>) => {
      const index = state.users.findIndex(user => user.id === action.payload.id)
      if (index !== -1) {
        state.users.splice(index, 1)
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.loading = true
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<{ users: User[] }>) => {
        state.loading = false
        state.users = action.payload.users.map(user => ({ ...user, status: 'active' }))
      })
      .addCase(fetchUsers.rejected, state => {
        state.loading = false
      })
  },
})

export const usersReducer = usersSlice.reducer
export const { editUser, changeUserStatus, hideUser } = usersSlice.actions

// types
export type UserStatus = 'active' | 'archive'
export type UserDomain = User & {
  status: UserStatus
}
export type UsersState = {
  users: UserDomain[]
  loading: boolean
}
