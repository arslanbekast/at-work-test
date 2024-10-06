import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import s from './TextField.module.scss'
import { Typography } from '@/common/components/ui/Typography/Typography'

type TextFieldProps = {
  error?: string
  label: string
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<ElementRef<'input'>, TextFieldProps>(
  ({ error, label, placeholder, type = 'text', ...rest }, ref) => {
    return (
      <div className={s.wrapper}>
        <label>
          <Typography variant={'text1'} weight={'semibold'}>
            {label}
          </Typography>
        </label>
        <div className={s.inputWrapper}>
          <input
            placeholder={placeholder}
            type={type}
            {...rest}
            ref={ref}
            className={`${s.textField} ${error && s.error}`}
          />
        </div>
        {error && <span className={s.errorMessage}>{error}</span>}
      </div>
    )
  }
)
