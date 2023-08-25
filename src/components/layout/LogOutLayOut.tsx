
import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { Outlet, useNavigate } from 'react-router-dom'

const LogOutLayOut = () => {
  const {data,isLoading} = useQuery('user', { staleTime: Infinity,retry: false })
  const navigate = useNavigate()
  
  useEffect(() => {
    console.log(data);
    if (data && !isLoading) {
      navigate('/', { replace: true })

    }
  }, [data,navigate,isLoading])
  return (
    <>
      <Outlet />
    </>
  )
}

export default LogOutLayOut