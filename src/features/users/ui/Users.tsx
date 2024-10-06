import s from './Users.module.scss'
import { Title } from '@/common/components/ui/Title/Title'
import { useSelector } from 'react-redux'
import { selectLoading, selectUsers } from '@/features/users/model/users.selectors'
import { UsersList } from '@/features/users/ui/UsersList/UsersList'

export const Users = () => {
  const users = useSelector(selectUsers)
  const loading = useSelector(selectLoading)

  return (
    <div className={s.users}>
      <div className={s.active}>
        <Title title={'Активные'} className={s.title} />
        <UsersList users={users} status={'active'} loading={loading} />
      </div>

      <div className={s.archive}>
        <Title title={'Архив'} className={s.title} />
        <UsersList users={users} status={'archive'} loading={loading} />
      </div>
    </div>
  )
}
