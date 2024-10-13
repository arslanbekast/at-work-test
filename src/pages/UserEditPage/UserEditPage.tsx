import s from './UserEditPage.module.scss'
import { Title } from '@/common/components/ui/Title/Title'
import { UserEditForm } from '@/features/users/ui/UserEditForm/UserEditForm'
import userPhoto from '@/assets/images/userPhoto.jpg'
import { Category } from '@/common/components/ui/Category/Category'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ArrowLeftIcon } from '@/assets/icons/ArrowLeftIcon'
import { Typography } from '@/common/components/ui/Typography/Typography'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectUserById } from '@/features/users/model/users.selectors'
import { RootState } from '@/app/store'
import { Zoom } from 'react-awesome-reveal'

const categories = [
  { id: 1, value: 'Данные профиля', active: true },
  { id: 2, value: 'Рабочее пространство', active: false },
  { id: 3, value: 'Приватность', active: false },
  { id: 4, value: 'Безопасность', active: false },
]
type RouteParams = {
  id: string
}
export const UserEditPage = () => {
  const { id } = useParams<RouteParams>()
  const navigate = useNavigate()

  const user = useSelector((state: RootState) => selectUserById(state, Number(id)))

  useEffect(() => {
    // Если user не найден, перенаправляем на главную страницу
    if (!user) {
      navigate('/')
    }
  }, [user, navigate])

  return (
    <Zoom cascade={true} damping={0.05}>
      <div className={s.userEditPage}>
        <div className={s.goBack}>
          <Link to={'/users/'} className={s.goBackLink}>
            <ArrowLeftIcon />
            <Typography as={'span'} variant={'headline'} weight={'semibold'}>
              Назад
            </Typography>
          </Link>
        </div>
        <div className={s.wrapper}>
          <div className={s.categoryWrapper}>
            <div className={s.image}>
              <img src={userPhoto} alt="User photo" />
            </div>
            <div className={s.categories}>
              {categories.map(c => (
                <Category key={c.id} value={c.value} active={c.active} />
              ))}
            </div>
          </div>
          <div className={s.settings}>
            <Title title={'Данные профиля'} className={s.title} />
            <UserEditForm user={user} />
          </div>
        </div>
      </div>
    </Zoom>
  )
}
