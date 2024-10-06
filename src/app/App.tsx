import { Header } from '@/common/components/Header/Header'
import { Outlet } from 'react-router-dom'
import s from './App.module.scss'
import { useEffect } from 'react'
import { fetchUsers } from '@/features/users/model/usersSlice'
import { useAppDispatch } from '@/common/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import { selectIsInitialized } from '@/app/app.selectors'
import { CircularProgress } from '@/common/components/ui/CircularProgress/CircularProgress'
import { setAppInitialized } from '@/app/appSlice'

export function App() {
  const dispatch = useAppDispatch()
  const isInitialized = useSelector(selectIsInitialized)

  useEffect(() => {
    dispatch(fetchUsers())
      .unwrap()
      .finally(() => dispatch(setAppInitialized(true)))
  }, [dispatch])

  if (!isInitialized) return <CircularProgress />

  return (
    <div>
      <Header />
      <main className={s.main}>
        <div className={s.content}>
          <Outlet />
        </div>
      </main>
    </div>
  )
}
