import React from 'react'
import BaseLoder from './BaseLoder'

const ProjectLoder = () => {
  return (
    <div className='border rounded-md h-48 overflow-hidden p-3 select-none cursor-not-allowed'>
      <BaseLoder className='!w-28' />
      <div className='flex flex-col gap-1 mt-1'>
        <BaseLoder className='h-4' />
        <BaseLoder className='h-4' />
        <BaseLoder className='h-3 my-1' />
        <BaseLoder className='h-4' />
      </div>
      <BaseLoder className='h-8 !w-8 mt-2 rounded-full' />
    </div>
  )
}

export default ProjectLoder