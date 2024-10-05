import s from './Logo.module.scss'
import logo from '@/assets/images/logo.svg'

export const Logo = () => {
  return (
    <div className={s.logoWrapper}>
      <img src={logo} alt="logo" />
      <span className={s.companyName}>
        at-<span>work</span>
      </span>
    </div>
  )
}
