import React from 'react'
import { BsPinAngle, BsPinAngleFill } from 'react-icons/bs'
import { Link, useParams } from 'react-router-dom'
import AvaterGroupt from '../shared/AvaterGroupt'
import { useQueryClient } from 'react-query'

// interface ProjectBox {}

const ProjectBox = ({ project }: { project: any }) => {
  const queryClient = useQueryClient()


  const _hendelPin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log('pined')
  }

  const _hendelClick = () => {
    const projects: any = queryClient.getQueryData('/projects')
    const f = projects.data?.filter(i => i?._id === project?._id)
    if (f?.length !== 0) {
      queryClient.setQueryData('project', f[0])
      queryClient.setQueryData('members', f[0]?.members?.map(item => { return { value: item._id, label: item.email,avatar: item?.avatar}}))

    }
  }



  return (
    <Link onClick={_hendelClick} to={'/project/' + project._id} className="border rounded-md shadow-md relative">
      <button className="absolute right-2 top-2" onClick={_hendelPin}>
        <BsPinAngle />
        {/* <BsPinAngleFill/> */}
      </button>

      <div className="h-full flex flex-col p-2">
        <div className="flex-1 mb-1">
          <h1 className="font-semibold text-lg">{project?.name}</h1>
          <p className="line-clamp-2 mt-1 text-sm">
            {project?.details}
          </p>
          <p className="text-sm opacity-40 my-1">
            10 people | 2 Schedule | 2 task
          </p>
          {/* <p className="text-sm line-clamp-2 ">
            <span> Notice :</span>
            <span className="text-red-700 ">
              No argent notice Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eos fugiat incidunt sapiente ipsum ipsam
              voluptatem eligendi debitis iste dicta laboriosam?
            </span>
          </p> */}
        </div>
        <AvaterGroupt />
      </div>
    </Link>
  )
}

export default ProjectBox
