import { editUser, UserDomain } from '@/features/users/model/usersSlice'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useAppDispatch } from '@/common/hooks/useAppDispatch'

const formSchema = z.object({
  name: z.string().min(1, 'Имя не должно быть пустым'),
  username: z.string().min(1, 'Никнейм не должен быть пустым'),
  email: z.string().min(1, 'Email не должен быть пустым').email('Не валидный email'),
  city: z.string().min(1, 'Город не должен быть пустым'),
  phone: z.string().min(1, 'Телефон не должен быть пустым'),
  companyName: z.string().min(1, 'Название компании не должно быть пустым'),
})

type FormValues = z.infer<typeof formSchema>
export const useUserEditForm = (user?: UserDomain) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: user?.name,
      username: user?.username,
      email: user?.email,
      city: user?.address.city,
      phone: user?.phone,
      companyName: user?.company.name,
    },
    resolver: zodResolver(formSchema),
  })
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  const handleClosePopup = () => {
    setIsPopupVisible(false)
  }

  const onSubmit = (data: FormValues) => {
    if (user) {
      const editedUser = {
        ...user,
        name: data.name,
        username: data.username,
        email: data.email,
        address: { ...user.address, city: data.city, geo: { ...user.address.geo } },
        phone: data.phone,
        company: { ...user.company, name: data.companyName },
      }

      dispatch(editUser(editedUser))
      setIsPopupVisible(true)
    }
  }

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    isPopupVisible,
    handleClosePopup,
  }
}
