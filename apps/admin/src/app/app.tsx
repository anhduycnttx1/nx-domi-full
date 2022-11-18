import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayoutAdmin from '../app/components/layout/layout'
import FormRegister from './components/form-register/form-register'
import HomePage from './pages/home/home'
import AccountPage from './pages/account/account'
import NotFoundPage from './pages/not-found/not-found'
import Loaders from './components/loading/loaders'
import RunningPage from './pages/running-page/running-page'
import BuilderPage from './pages/builder-page/builder-page'
import DemoPage from './pages/demo/demo'

export function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LayoutAdmin />,

      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/dashboard',
          element: <DemoPage title="This is Dashboard Page" />,
        },
        {
          path: '/template',
          element: <DemoPage title="This is Template List" />,
        },
        {
          path: '/showcase',
          element: <DemoPage title="This is Showcase List" />,
        },
        {
          path: '/account',
          element: <AccountPage />,
        },
        {
          path: '/domain',
          element: <DemoPage title="This is Domain List" />,
        },
        {
          path: '/setting',
          element: <DemoPage title="Setting Page" />,
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
