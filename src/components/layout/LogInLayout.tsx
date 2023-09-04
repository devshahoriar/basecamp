import { useQuery } from 'react-query'
import Nav from '../shared/Nav'
import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const LogInLayout = () => {
  const {data,isLoading} = useQuery('user', { staleTime: Infinity, retry: false })
  const navigate = useNavigate()
 
  
  useEffect(() => {
    if (!data && !isLoading) {
      navigate('/login', { replace: true })

    }
  }, [data,navigate,isLoading])


  return (
    <>
      <div className='fixed top-0 left-0 ring-0 w-full backdrop-blur-md !z-50'>
        <Nav />
      </div>
      <div className='h-14 md:h-16 w-full' />
      <Outlet />
    </>
  )
}

export default LogInLayout
