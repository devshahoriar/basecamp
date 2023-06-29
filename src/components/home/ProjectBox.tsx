import React from 'react'
import { BsPinAngle, BsPinAngleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Avater from '../shared/Avater'
import AvaterGroupt from '../shared/AvaterGroupt'

interface ProjectBox {
  className?: string
}

const ProjectBox = ({ className }: ProjectBox) => {
  const _hendelPin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log('pined')
  }
  return (
    <Link
      to={'/project/333'}
      className="aspect-video border rounded-md shadow-md relative"
    >
      <button className="absolute right-2 top-2" onClick={_hendelPin}>
        <BsPinAngle />
        {/* <BsPinAngleFill/> */}
      </button>
      <div className="h-full flex flex-col p-2">
        <div className="flex-1"></div>
        <AvaterGroupt />
      </div>
    </Link>
  )
}

export default ProjectBox
