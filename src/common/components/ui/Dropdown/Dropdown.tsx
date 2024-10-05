import s from './Dropdown.module.scss'
import { ReactNode, useEffect, useRef } from 'react'

type DropdownProps = {
  items: ReactNode[]
  open: boolean
  setOpen: (show: boolean) => void
}

export const Dropdown = ({ items, open, setOpen }: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [setOpen])

  return (
    <div className={s.dropdownWrapper} ref={dropdownRef}>
      <button
        type={'button'}
        className={s.dropdownBtn}
        onClick={() => {
          setOpen(!open)
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {open && (
        <div className={s.dropdown}>
          {items.length > 0 &&
            items.map((item, i) => (
              <div className={s.item} key={i}>
                {item}
              </div>
            ))}
        </div>
      )}
    </div>
  )
}
