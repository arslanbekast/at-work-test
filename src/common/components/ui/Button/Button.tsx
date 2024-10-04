import { ComponentPropsWithoutRef, ElementType } from 'react'
import s from './Button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  className?: string
} & Omit<ComponentPropsWithoutRef<T>, 'className'>

export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const { as: Component = 'button', className, ...rest } = props

  return <Component {...rest} className={`${s.button} ${className ?? ''}`} />
}
