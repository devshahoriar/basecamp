import React from 'react'
import { BsPinAngle, BsPinAngleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import AvaterGroupt from '../shared/AvaterGroupt'

// interface ProjectBox {}

const ProjectBox = () => {
  const _hendelPin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log('pined')
  }
  return (
    <Link to={'/project/333'} className="border rounded-md shadow-md relative">
      <button className="absolute right-2 top-2" onClick={_hendelPin}>
        <BsPinAngle />
        {/* <BsPinAngleFill/> */}
      </button>

      <div className="h-full flex flex-col p-2">
        <div className="flex-1 mb-1">
          <h1 className="font-semibold text-lg">Project name</h1>
          <p className="line-clamp-2 mt-1 text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            cumque recusandae quos ut eius quisquam. Quas suscipit debitis
            officia incidunt.
          </p>
          <p className="text-sm opacity-40 my-1">
            10 people | 2 Schedule | 2 task
          </p>
          <p className="text-sm line-clamp-2 ">
            <span> Notice :</span>
            <span className="text-red-700 ">
              No argent notice Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eos fugiat incidunt sapiente ipsum ipsam
              voluptatem eligendi debitis iste dicta laboriosam?
            </span>
          </p>
        </div>
        <AvaterGroupt />
      </div>
    </Link>
  )
}

export default ProjectBox
