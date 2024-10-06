import s from './HeaderRight.module.scss'
import { FavoriteIcon } from '@/assets/icons/FavoriteIcon'
import { NotificationIcon } from '@/assets/icons/NotificationIcon'
import userAvatar from '@/assets/images/userPhoto.jpg'
import { Typography } from '@/common/components/ui/Typography/Typography'

export const HeaderRight = () => {
  return (
    <div className={s.headerRight}>
      <div className={s.iconsWrapper}>
        <FavoriteIcon />
        <NotificationIcon />
      </div>
      <div className={s.userInfo}>
        <img src={userAvatar} alt={'User photo'} className={s.userAvatar} />
        <Typography as={'span'} variant={'text2'} weight={'medium'} className={s.username}>
          Ivan1234
        </Typography>
      </div>
    </div>
  )
}
