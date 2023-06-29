import React from 'react'
import AvaterGroupt from './AvaterGroupt'

const BoardHeader = () => {
  return (
    <div className="flex flex-col items-center mt-5">
      <h1 className="text-3xl font-semibold">Project Name</h1>
      <p className="w-[70%] text-center line-clamp-2 mt-2 font-light">
        Project description Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Neque iure consequuntur maiores labore enim. Officiis, illo!
        Inventore eligendi distinctio eum.
      </p>
      <div className='flex gap-3 mt-5 '>
        <button className="btn btn-circle btn-sm btn-primary overflow-hidden">Add</button>
        <AvaterGroupt />
      </div>
    </div>
  )
}

export default BoardHeader
