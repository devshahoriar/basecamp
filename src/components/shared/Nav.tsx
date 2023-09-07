import { Link, useLocation } from 'react-router-dom'
import { VscLayers } from 'react-icons/vsc'
import { RiHome8Fill, RiProfileLine } from 'react-icons/ri'
import { TbArrowZigZag } from 'react-icons/tb'
import { TbMessage2Bolt } from 'react-icons/tb'
import { MdOutlineLocationSearching } from 'react-icons/md'
import Avater from './Avater'
import { useEffect, useState } from 'react'
import { HiOutlineLogout } from 'react-icons/hi'

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

  useEffect(() => {
    SetShowMenu(false)
  }, [location])

  return (
    <div className="border-b backdrop-blur-md bg-white bg-opacity-5">
      <nav className="container flex justify-between h-14 items-center md:h-16">
        <Link to="/" className="text-2xl md:flex md:items-center md:gap-2">
          <VscLayers />
          <span className="text-sm hidden md:block font-black ">Basecamp</span>
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
              <button className="dark:text-white text-black my-1 whitespace-nowrap flex gap-2 items-center">
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
