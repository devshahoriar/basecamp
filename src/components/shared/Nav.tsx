import { Link, useLocation, useNavigate } from 'react-router-dom'
import { VscLayers } from 'react-icons/vsc'
import { RiHome8Fill, RiProfileLine } from 'react-icons/ri'
import { TbArrowZigZag } from 'react-icons/tb'
import { TbMessage2Bolt } from 'react-icons/tb'
import { MdOutlineLocationSearching } from 'react-icons/md'
import Avater from './Avater'
import { useEffect, useState } from 'react'
import { HiOutlineLogout } from 'react-icons/hi'
import { useQueryClient } from 'react-query'
import Axios from '../../lib/axiosConfig'

const NavLink = ({
  to,
  title,
  icon,
}: {
  to: string
  title: string
  icon: JSX.Element
}) => {
  return (
    <Link to={to} className="flex flex-col items-center md:flex-row md:gap-1">
      <span className="text-lg md:text-2xl">{icon}</span>
      <span className="text-xs md:font-bold">{title}</span>
    </Link>
  )
}

const Nav = () => {
  const [showMenu, SetShowMenu] = useState(false)
  const location = useLocation()
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  useEffect(() => {
    SetShowMenu(false)
  }, [location])
  const _hendelLogout = async () => {
    try {
      await Axios({
        url: '/auth/logout',
        withCredentials: true,
        method: 'get',
      })
      queryClient.clear()
      navigate('/login', { replace: true })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="border-b backdrop-blur-md bg-white bg-opacity-5">
      <nav className="container flex justify-between h-14 items-center md:h-16">
        <Link to="/" className="text-2xl md:flex md:items-center md:gap-2">
          <VscLayers />
          <span className="text-sm hidden md:block font-black ">Proman360</span>
        </Link>
        <div className="flex items-center gap-3 md:gap-4">
          <NavLink to="/" title="Home" icon={<RiHome8Fill />} />
          {/* <NavLink to="/ping" title="ping" icon={<TbArrowZigZag />} />
          <NavLink to="/line" title="Line" icon={<TbMessage2Bolt />} />
          <NavLink
            to="/find"
            title="Find"
            icon={<MdOutlineLocationSearching />}
          /> */}
        </div>
        <div className="relative">
          <Avater
            title="sh"
            src="https://picsum.photos/200"
            onClick={() => SetShowMenu((r) => !r)}
          />
          {showMenu && (
            <div className="absolute  dark:bg-zinc-700 bg-zinc-300  px-4 py-1  mt-1  right-0 rounded-xl shadow-md">
              <button onClick={_hendelLogout} className="dark:text-white text-black my-1 whitespace-nowrap flex gap-2 items-center">
                Log out <HiOutlineLogout />
              </button>
              <Link
                to="/profile"
                className="dark:text-white text-black my-1 flex gap-2 items-center"
              >
                Profile <RiProfileLine />
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Nav
