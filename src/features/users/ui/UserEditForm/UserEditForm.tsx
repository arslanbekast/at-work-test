import s from './UserEditForm.module.scss'
import { TextField } from '@/common/components/ui/TextField/TextField'
import { Button } from '@/common/components/ui/Button/Button'
import { UserDomain } from '@/features/users/model/usersSlice'
import { Popup } from '@/common/components/ui/Popup/Popup'
import { useUserEditForm } from '@/features/users/hooks/useUserEditForm'

type UserEditFormProps = {
  user: UserDomain | undefined
}

export const UserEditForm = ({ user }: UserEditFormProps) => {
  const { register, handleSubmit, errors, onSubmit, isPopupVisible, handleClosePopup } =
    useUserEditForm(user)

  return (
    <>
      {isPopupVisible && <Popup message="Изменения сохранены!" onClose={handleClosePopup} />}
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <div className={s.textFields}>
          <TextField
            {...register('name')}
            label={'Имя'}
            placeholder={'Имя'}
            error={errors.name?.message}
          />
          <TextField
            {...register('username')}
            label={'Никнейм'}
            placeholder={'Никнейм'}
            error={errors.username?.message}
          />
          <TextField
            {...register('email')}
            label={'Почта'}
            placeholder={'Почта'}
            error={errors.email?.message}
          />
          <TextField
            {...register('city')}
            label={'Город'}
            placeholder={'Город'}
            error={errors.city?.message}
          />
          <TextField
            {...register('phone')}
            label={'Телефон'}
            placeholder={'Телефон'}
            error={errors.phone?.message}
          />
          <TextField
            {...register('companyName')}
            label={'Название компании'}
            placeholder={'Название компании'}
            error={errors.companyName?.message}
          />
        </div>
        <Button>Сохранить</Button>
      </form>
    </>
  )
}
