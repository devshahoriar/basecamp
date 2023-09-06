import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  DocsFile,
  Home,
  Login,
  Message,
  Project,
  Qustions,
  Register,
  Schedule,
  Todos,
} from './pages'
import LogInLayout from './components/layout/LogInLayout'
import Profile from './pages/Profile'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { useEffect } from 'react'
import Axios from './lib/axiosConfig'
import LogOutLayOut from './components/layout/LogOutLayOut'


const queryClient = new QueryClient({defaultOptions: {queries: {refetchOnWindowFocus:false}}})

function App() {


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await Axios({
          method: 'get',
          url: '/auth/me',
          withCredentials: true
        })

        queryClient.setQueryData('user', data.user)
      } catch (error: any) {
        console.log(error.response.data.message);
      } finally {
        document.body.style.opacity = "1"
      }

    }
    fetchUser()
  }, [])


  return (
    <QueryClientProvider client={queryClient}>


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogInLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/project/:id" element={<Project />} />
            <Route path="/project/:id/message" element={<Message />} />
            <Route path="/project/:id/todo" element={<Todos />} />
            <Route path="/project/:id/docsfile" element={<DocsFile />} />
            <Route path="/project/:id/schedule" element={<Schedule />} />
            <Route path="/project/:id/qus" element={<Qustions />} />
          </Route>
          <Route path='/' element={<LogOutLayOut />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter> <ReactQueryDevtools initialIsOpen={false} /> </QueryClientProvider>
  )
}

export default App
