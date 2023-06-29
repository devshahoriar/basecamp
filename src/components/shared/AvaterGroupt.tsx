import React from 'react'
import Avater from './Avater'

const AvaterGroupt = () => {
  return (
    <div className="avatar-group -space-x-3">
      <Avater className="!h-8 !w-8" src="https://picsum.photos/200" />
      <Avater className="!h-8 !w-8" src="https://picsum.photos/200" />
      <Avater className="!h-8 !w-8" src="https://picsum.photos/200" />
      <Avater className="!h-8 !w-8" src="https://picsum.photos/200" />
      <Avater className="!h-8 !w-8" title="10+" />
    </div>
  )
}

export default AvaterGroupt
