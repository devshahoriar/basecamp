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


const queryClient = new QueryClient()

function App() {
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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter> <ReactQueryDevtools initialIsOpen={false} /> </QueryClientProvider>
  )
}

export default App
