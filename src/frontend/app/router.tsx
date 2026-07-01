import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '@/frontend/shared/components/RootLayout'
import { AdminLayout } from '@/frontend/features/admin/components/AdminLayout'

const Home = lazy(() => import('@/frontend/features/home/pages/Home'))
const Services = lazy(() => import('@/frontend/features/services/pages/Services'))
const About = lazy(() => import('@/frontend/features/team/pages/About'))
const Work = lazy(() => import('@/frontend/features/projects/pages/Work'))
const WorkDetail = lazy(() => import('@/frontend/features/projects/pages/WorkDetail'))
const Contact = lazy(() => import('@/frontend/features/contact/pages/Contact'))
const Blog = lazy(() => import('@/frontend/features/blog/pages/Blog'))
const NotFound = lazy(() => import('@/frontend/shared/pages/NotFound'))

const AdminLogin = lazy(() => import('@/frontend/features/admin/pages/AdminLogin'))
const Dashboard = lazy(() => import('@/frontend/features/admin/pages/Dashboard'))
const BlogList = lazy(() => import('@/frontend/features/admin/pages/BlogList'))
const BlogEditor = lazy(() => import('@/frontend/features/admin/pages/BlogEditor'))
const ProjectList = lazy(() => import('@/frontend/features/admin/pages/ProjectList'))
const ProjectEditor = lazy(() => import('@/frontend/features/admin/pages/ProjectEditor'))
const Messages = lazy(() => import('@/frontend/features/admin/pages/Messages'))

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
  {
    path: '/admin/login',
    element: <AdminLogin />,
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'blog', element: <BlogList /> },
      { path: 'blog/new', element: <BlogEditor /> },
      { path: 'blog/:id/edit', element: <BlogEditor /> },
      { path: 'projects', element: <ProjectList /> },
      { path: 'projects/new', element: <ProjectEditor /> },
      { path: 'projects/:id/edit', element: <ProjectEditor /> },
      { path: 'messages', element: <Messages /> },
    ],
  },
])
