import { App } from '@/app/App'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { Users } from '@/features/users/ui/Users'
import { UserEditPage } from '@/pages/UserEditPage/UserEditPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Navigate to={'/users/'} /> },
      { path: '/users/', element: <Users /> },
      { path: '/edit/:id', element: <UserEditPage /> },
    ],
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
