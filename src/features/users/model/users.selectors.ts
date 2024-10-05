import { RootState } from '@/app/store'

export const selectUsers = (state: RootState) => state.users.users
export const selectLoading = (state: RootState) => state.users.loading
export const selectUserById = (state: RootState, id: number | undefined) =>
  state.users.users.find(user => user.id === id)
