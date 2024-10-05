import s from './UserCard.module.scss'
import { Typography } from '@/common/components/ui/Typography/Typography'

type UserCardProps = {
  username: string
  companyName: string
  city: string
  imageUrl: string
}

export const UserCard = ({ username, companyName, city, imageUrl }: UserCardProps) => {
  return (
    <div className={s.userCard}>
      <div className={s.image}>
        <img src={imageUrl} alt={'User image'} />
      </div>
      <div className={s.info}>
        <div className={s.usernameWrapper}>
          <Typography as={'span'} variant={'headline'} weight={'semibold'} className={s.username}>
            {username}
          </Typography>
          <button type={'button'} className={s.dropdownBtn}>
            <span></span>
            <span></span>
            <span></span>
          </button>
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
