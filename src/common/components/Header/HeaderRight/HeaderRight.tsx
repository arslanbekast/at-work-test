import s from './HeaderRight.module.scss'
import { FavoriteIcon } from '@/assets/icons/FavoriteIcon'
import { NotificationIcon } from '@/assets/icons/NotificationIcon'
import userAvatar from '@/assets/images/userAvatar.png'
import { Typography } from '@/common/components/ui/Typography/Typography'

export const HeaderRight = () => {
  return (
    <div className={s.headerRight}>
      <div className={s.iconsWrapper}>
        <span>
          <FavoriteIcon />
        </span>
        <span>
          <NotificationIcon />
        </span>
      </div>
      <div className={s.userInfo}>
        <div className={s.photo}>
          <img src={userAvatar} alt={'User photo'} />{' '}
        </div>
        <Typography as={'span'} variant={'text2'} weight={'medium'}>
          Ivan1234
        </Typography>
      </div>
    </div>
  )
}
