import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '@/frontend/shared/components/RootLayout'

// Lazy-load routes for code-splitting (bundle-dynamic-imports).
const Home = lazy(() => import('@/frontend/features/home/pages/Home'))
const Services = lazy(() => import('@/frontend/features/services/pages/Services'))
const About = lazy(() => import('@/frontend/features/team/pages/About'))
const Work = lazy(() => import('@/frontend/features/projects/pages/Work'))
const WorkDetail = lazy(() => import('@/frontend/features/projects/pages/WorkDetail'))
const Contact = lazy(() => import('@/frontend/features/contact/pages/Contact'))
const Blog = lazy(() => import('@/frontend/features/blog/pages/Blog'))
const NotFound = lazy(() => import('@/frontend/shared/pages/NotFound'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <Services /> },
      { path: 'about', element: <About /> },
      { path: 'work', element: <Work /> },
      { path: 'work/:slug', element: <WorkDetail /> },
      { path: 'contact', element: <Contact /> },
      { path: 'blog', element: <Blog /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])
