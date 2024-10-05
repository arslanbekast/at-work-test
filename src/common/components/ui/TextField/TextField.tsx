import { ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from 'react'
import s from './TextField.module.scss'
import { Typography } from '@/common/components/ui/Typography/Typography'
import { ClearIcon } from '@/assets/icons/ClearIcon'

type TextFieldProps = {
  error?: string
  label: string
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<ElementRef<'input'>, TextFieldProps>(
  ({ error, label, placeholder, onChange, type = 'text', ...rest }, ref) => {
    const [value, setValue] = useState<string>('')
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
    }

    const handleClear = () => {
      setValue('')
    }
    const clearButton = value && (
      <button className={s.clearButton} type={'button'} onClick={handleClear}>
        <ClearIcon />
      </button>
    )

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
            value={value}
            onChange={handleInputChange}
            {...rest}
            ref={ref}
            className={`${s.textField} ${error && s.error}`}
          />
          {clearButton}
        </div>
        {error && <span className={s.errorMessage}>{error}</span>}
      </div>
    )
  }
)
