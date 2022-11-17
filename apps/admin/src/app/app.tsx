import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayoutAdmin from '../app/components/layout/layout'
import FormRegister from './components/form-register/form-register'
import HomePage from './pages/home/home'
import AccountPage from './pages/account/account'
import NotFoundPage from './pages/not-found/not-found'
import Loaders from './components/loading/loaders'
import RunningPage from './pages/running-page/running-page'
import BuilderPage from './pages/builder-page/builder-page'

export function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LayoutAdmin />,

      children: [
        {
          path: '/',
          element: <HomePage />,
          loader: async () => undefined,
          id: 'main',
        },
        {
          path: '/dashboard',
          element: <div>Dashboard</div>,
        },
        {
          path: '/account',
          element: <AccountPage />,
        },
      ],
    },
    {
      path: '/loaders',
      element: <Loaders />,
    },
    {
      path: '/runner-page/:pageId',
      element: <RunningPage />,
    },
    {
      path: '/builder-page/:pageId',
      element: <BuilderPage />,
    },
    {
      path: '/login',
      element: <FormRegister />,
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ])
  return <RouterProvider router={router} fallbackElement={<Loaders />} />
}

export default App
