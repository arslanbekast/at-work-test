import s from './Typography.module.scss'
import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

type Variants = 'title' | 'headline' | 'text1' | 'text2' | 'caption'

type Weights = 'medium' | 'semibold'

type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  children?: ReactNode
  className?: string
  variant?: Variants
  weight?: Weights
} & Omit<ComponentPropsWithoutRef<T>, 'className'>

export const Typography = <T extends ElementType = 'p'>(
  props: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>
) => {
  const {
    as: Component = 'p',
    children,
    className,
    variant = 'text1-medium',
    weight,
    ...restProps
  } = props

  return (
    <Component
      {...restProps}
      className={`${s[variant]} ${weight ? s[weight] : ''} ${className ?? ''}`}
    >
      {children}
    </Component>
  )
}
