import s from './UsersList.module.scss'
import { UserCard } from '@/features/users/ui/UserCard/UserCard'
import userPhoto from '@/assets/images/userPhoto.jpg'
import { UserDomain, UserStatus } from '@/features/users/model/usersSlice'
import { CircularProgress } from '@/common/components/ui/CircularProgress/CircularProgress'

type UsersListProps = {
  users: UserDomain[]
  status: UserStatus
  loading: boolean
}

export const UsersList = ({ users, status, loading }: UsersListProps) => {
  return (
    <div className={s.usersList}>
      {loading && <CircularProgress />}
      {users
        .filter(user => user.status === status)
        .map(user => (
          <UserCard
            key={user.id}
            id={user.id}
            username={user.username}
            companyName={user.company.name}
            city={user.address.city}
            imageUrl={userPhoto}
            archive={status === 'archive'}
          />
        ))}
    </div>
  )
}
