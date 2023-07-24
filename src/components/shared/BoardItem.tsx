import React from 'react'
import { Link, useParams } from 'react-router-dom'

interface Props {
  title?: string
  to: string
  emptyIcon: React.ReactNode
}

const BoardItem = ({ title = 'Message', to, emptyIcon }: Props) => {
  const { id } = useParams()

  return (
    <Link
      to={'/project/' + id + '/' + to}
      className="flex-[0_0_100%] md:flex-[0_0_46%] xl:flex-[0_0_30%] aspect-square border rounded-lg overflow-x-auto"
    >
      <div className="border-b h-8 flex justify-center items-center">
        <p className="text-center font-semibold text-sm">{title}</p>
      </div>
      <div className="w-full !h-[calc(100%-2rem)]">
        <span className="h-full w-full flex justify-center items-center text-7xl">
          {emptyIcon}
        </span>
      </div>
    </Link>
  )
}

export default BoardItem
