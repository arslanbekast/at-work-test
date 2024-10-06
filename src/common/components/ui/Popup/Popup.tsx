import { useEffect, useState } from 'react'
import s from './Popup.module.scss'
import { CloseIcon } from '@/assets/icons/CloseIcon'
import { Typography } from '@/common/components/ui/Typography/Typography'
import { SuccessIcon } from '@/assets/icons/SuccessIcon'

interface PopupProps {
  message: string
  onClose: () => void
}

export const Popup = ({ message, onClose }: PopupProps) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Закрыть popup через 4 секунды
    const timer = setTimeout(() => {
      handleClose()
    }, 4000)

    // Очищаем таймер, если компонент размонтируется раньше времени
    return () => clearTimeout(timer)
  }, [onClose])

  // Функция для закрытия с анимацией
  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => {
      onClose()
    }, 300)
  }

  return (
    <>
      <div className={s.overlay} onClick={handleClose}></div>
      <div className={`${s.popup} ${!isVisible ? s.fadeOut : ''}`}>
        <div className={s.messageContainer}>
          <div>
            <SuccessIcon />
          </div>
          <Typography as={'span'} variant={'headline'} weight={'semibold'}>
            {message}
          </Typography>
          <button className={s.closeButton} onClick={handleClose}>
            <CloseIcon />
          </button>
        </div>
      </div>
    </>
  )
}
