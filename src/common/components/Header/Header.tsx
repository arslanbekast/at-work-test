import s from './Header.module.scss'
import { Logo } from '@/common/components/Header/Logo/Logo'
import { HeaderRight } from '@/common/components/Header/HeaderRight/HeaderRight'

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.content}>
        <Logo />
        <HeaderRight />
      </div>
    </header>
  )
}
