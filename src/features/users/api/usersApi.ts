import { instance } from '@/common/api/common.api'
import { User } from '@/features/users/api/usersApi.types'

export const usersApi = {
  getUsers() {
    return instance.get<User[]>('users').then(res => res.data.slice(0, 6))
  },
}
