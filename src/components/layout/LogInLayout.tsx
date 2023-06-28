import Nav from '../shared/Nav'
import { Outlet } from 'react-router-dom'

const LogInLayout = () => {
  return (
    <>
      <div className='fixed top-0 left-0 ring-0 w-full backdrop-blur-md !z-50'>
        <Nav />
      </div>
      <div className='h-14 md:h-16 w-full'/>
      <Outlet />
    </>
  )
}

export default LogInLayout
