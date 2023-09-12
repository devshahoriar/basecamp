import { useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import ModelBase from './ModelBase'



interface BoardProps {
  children?: React.ReactNode
  className?: string
  isMenu?: boolean
}

const Board = ({ className, children, isMenu = true }: BoardProps) => {
  const [openMenu, setOpenMenu] = useState(false)

  
  return (
    <section
      className={`mx-auto w-full sm:w-[500px] md:w-[600px] lg:w-[800px] xl:w-[1050px] min-h-[calc(100vh-150px)] boxShaDow rounded-lg p-2 relative ${className}`}
    >
      {isMenu && <button onClick={() => setOpenMenu(r => !r)} className="absolute right-2 top-3 p-1 rounded-md hover:shadow-lg active:scale-95 text-lg">
        <BsThreeDotsVertical />
      </button>}
      {/* {openMenu && <div className='absolute right-2 top-10 bg-white p-2 drop-shadow-md'>
        <div>
          <button className='btn btn-sm'>Add Member</button>
        </div>
        </div>} */}
      <div className="mx-1">{children}</div>
    </section>
  )
}

export default Board
