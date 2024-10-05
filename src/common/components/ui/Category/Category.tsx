import s from './Category.module.scss'
import { Typography } from '@/common/components/ui/Typography/Typography'
type CategoryProps = {
  value: string
  active?: boolean
}
export const Category = ({ value, active }: CategoryProps) => {
  return (
    <div className={`${s.category} ${active ? s.active : ''}`}>
      <Typography as={'span'} variant={'text2'} weight={active ? 'semibold' : 'medium'}>
        {value}
      </Typography>
    </div>
  )
}
