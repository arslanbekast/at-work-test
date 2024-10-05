import s from './Title.module.scss'
import { Typography } from '@/common/components/ui/Typography/Typography'

type TitleProps = {
  title: string
  className?: string
}

export const Title = ({ title, className }: TitleProps) => {
  return (
    <div className={`${s.title} ${className || ''}`}>
      <Typography as={'h2'} variant={'title'} weight={'semibold'}>
        {title}
      </Typography>
    </div>
  )
}
