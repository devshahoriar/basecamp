import React from 'react'

interface Props {
  set: React.Dispatch<React.SetStateAction<boolean>>
  children?: JSX.Element
}

const ModelBase = ({ set, children }: Props) => {
  return (
    <div
      onClick={() => set(false)}
      className="fixed top-0 left-0 right-0 bottom-0 bg-zinc-700 bg-opacity-30 z-50 h-screen w-screen backdrop-blur-lg"
    >
      model
      {children}
    </div>
  )
}

export default ModelBase
