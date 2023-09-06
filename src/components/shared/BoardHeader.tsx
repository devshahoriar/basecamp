import React from 'react'
import AvaterGroupt from './AvaterGroupt'
import { useQueryClient } from 'react-query'

const BoardHeader = () => {
  const queryClient = useQueryClient()
  const project: any = queryClient.getQueryData('project')

  return (
    <div className="flex flex-col items-center mt-5">
      <h1 className="text-3xl font-semibold">{project?.name}</h1>
      <p className="w-[70%] text-center line-clamp-2 mt-2 font-light">
        {project?.details}
      </p>
      {/* <div className='flex gap-3 mt-5 '>
        <button className="btn btn-circle btn-sm btn-primary overflow-hidden">Add</button>
        <AvaterGroupt />
      </div> */}
    </div>
  )
}

export default BoardHeader
