

interface Props {
  set: any
  children?: JSX.Element
}

const ModelBase = ({ set, children }: Props) => {
  return (
    <div
      onClick={() => set(false)}
      className="fixed top-0 left-0 right-0 bottom-0 bg-zinc-700 bg-opacity-30 z-50 h-screen w-screen backdrop-blur-md flex justify-center items-center "
    >
     <div onClick={e => e.stopPropagation()} >
     {children}
     </div>
    </div>
  )
}

export default ModelBase
