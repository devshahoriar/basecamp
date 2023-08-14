import React, { useState } from 'react'
import Board from './Board'
import { CiSquareMore } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import ProjectOverFlowBoxNav from './ProjectOverFlowBoxNav'
import { useClickAnyWhere } from 'usehooks-ts'

interface WithChildBoardProps {
  children?: React.ReactNode
  isMenu?: boolean
}

const WithChildBoard = ({ children, isMenu = true }: WithChildBoardProps) => {
  const [boxNavShow, setBoxNavShow] = useState(false)


  return (
    <>
      <div className="h-12 rounded-t-md p-2 w-[90%] sm:w-[400px] md:w-[500px] lg:w-[700px] xl:w-[950px] mx-auto boxShaDow flex justify-center items-center gap-5 relative">
        {boxNavShow && <ProjectOverFlowBoxNav />}
        <button
          onClick={(e) => {
            e.stopPropagation()
            setBoxNavShow((r) => !r)
          }}
          className="text-3xl hover:text-white hover:bg-black rounded-lg transition-colors active:scale-95"
        >
          <CiSquareMore />
        </button>
        <Link
          className="decoration-wavy underline decoration-emerald-500 font-semibold hover:scale-105 transition-transform"
          to="/project/:id"
        >
          Project name
        </Link>
      </div>
      <Board isMenu={isMenu} children={children} />
    </>
  )
}

export default WithChildBoard
