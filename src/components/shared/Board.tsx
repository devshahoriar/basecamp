import { useEffect, useRef, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import ModelBase from './ModelBase'
import { GrClose } from 'react-icons/gr'
import { AiOutlineClose } from 'react-icons/ai'
import { useQueryClient } from 'react-query'



interface BoardProps {
  children?: React.ReactNode
  className?: string
  isMenu?: boolean
}

const Board = ({ className, children, isMenu = true }: BoardProps) => {
  const [openMenu, setOpenMenu] = useState(false)
  const [openAdmins, setOpenAdmins] = useState(false)
 

  return (
    <>
      <section
        className={`mx-auto w-full sm:w-[500px] md:w-[600px] lg:w-[800px] xl:w-[1050px] min-h-[calc(100vh-150px)] boxShaDow rounded-lg p-2 relative ${className}`}
      >
        {isMenu && <button onClick={() => setOpenMenu(r => !r)} className="absolute right-2 top-3 p-1 rounded-md hover:shadow-lg active:scale-95 text-lg">
          {
            openMenu ?
              <GrClose /> :
              <BsThreeDotsVertical  />
          }
        </button>}
        {openMenu && <div className='absolute right-2 top-10 p-2 drop-shadow-md'>
          <ul className="menu bg-base-200 w-56 rounded-box">
            <li><button onClick={() => {
              setOpenAdmins(true)
              setOpenMenu(r => !r)
            }}>Admins</button></li>
            <li><button className='hover:bg-red-500'>Delete project</button></li>
            {/* <li><a>Item 3</a></li> */}
          </ul>
        </div>}
        <div className="mx-1">{children}</div>
      </section>
      {openAdmins && <AdminSetModel set={setOpenAdmins} />}
    </>
  )
}

const BoxMembers = ({ title, children }: any) => {
  return <div className='shadow-md p-3 bg-white rounded-md'>
    <p>{title}</p>
    {children}
  </div>
}


const AdminSetModel = ({ set }: any) => {
  const queryClient = useQueryClient()
  const { admins, members, creator } = queryClient.getQueryData('project') as any

  console.log(admins, members, creator);


  return <ModelBase set={set}>
    <div className='w-[calc(100vw-20px)] md:w-[600px] bg-slate-300   max-h-[500px] shadow-lg rounded-md relative pb-5 p-5'>
      <button onClick={() => set(false)} className='btn btn-sm md:btn-md absolute right-3 top-2'>
        <AiOutlineClose />
      </button>
      <div className='mt-10'>
        <BoxMembers title='Project creator:'>

        </BoxMembers>
      </div>
    </div>
  </ModelBase>
}

export default Board
