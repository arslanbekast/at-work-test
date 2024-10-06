import s from './UserCard.module.scss'
import { Typography } from '@/common/components/ui/Typography/Typography'
import { useState } from 'react'
import { changeUserStatus, hideUser, UserStatus } from '@/features/users/model/usersSlice'
import { useAppDispatch } from '@/common/hooks/useAppDispatch'
import { Dropdown } from '@/common/components/ui/Dropdown/Dropdown'
import { Link } from 'react-router-dom'

type UserCardProps = {
  id: number
  username: string
  companyName: string
  city: string
  imageUrl: string
  archive: boolean
}

export const UserCard = ({ id, username, companyName, city, imageUrl, archive }: UserCardProps) => {
  const [dropdownShown, setDropdownShown] = useState<boolean>(false)

  const dispatch = useAppDispatch()

  const handleChangeUserStatus = (id: number, status: UserStatus) => {
    dispatch(changeUserStatus({ id, status }))
  }

  const handleHideUser = (id: number) => {
    dispatch(hideUser({ id }))
  }

  const dropdownItems = archive
    ? [
        <button type={'button'} onClick={() => handleChangeUserStatus(id, 'active')}>
          <Typography
            as={'span'}
            variant={'text2'}
            weight={'medium'}
            className={s.archiveDropdownItem}
          >
            Активировать
          </Typography>
        </button>,
      ]
    : [
        <Link to={`/edit/${id}`}>
          <Typography as={'span'} variant={'text2'} weight={'medium'}>
            Редактировать
          </Typography>
        </Link>,
        <button type={'button'} onClick={() => handleChangeUserStatus(id, 'archive')}>
          <Typography as={'span'} variant={'text2'} weight={'medium'}>
            Архивировать
          </Typography>
        </button>,
        <button type={'button'} onClick={() => handleHideUser(id)}>
          <Typography as={'span'} variant={'text2'} weight={'medium'}>
            Скрыть
          </Typography>
        </button>,
      ]

  return (
    <div className={`${s.userCard} ${archive && s.archive}`}>
      <div className={s.image}>
        <img src={imageUrl} alt={'User image'} />
      </div>
      <div className={s.info}>
        <div className={s.usernameWrapper}>
          <Typography as={'span'} variant={'headline'} weight={'semibold'} className={s.username}>
            {username}
          </Typography>
          <Dropdown items={dropdownItems} open={dropdownShown} setOpen={setDropdownShown} />
        </div>
        <Typography as={'span'} variant={'text2'} weight={'medium'} className={s.companyName}>
          {companyName}
        </Typography>
        <Typography as={'span'} variant={'caption'} className={s.city}>
          {city}
        </Typography>
      </div>
    </div>
  )
}
