import { BsThreeDotsVertical } from 'react-icons/bs'

interface BoardProps {
  children?: React.ReactNode
  className?: string
}

const Board = ({ className, children }: BoardProps) => {
  return (
    <section
      className={`mx-auto w-full sm:w-[500px] md:w-[600px] lg:w-[800px] xl:w-[1050px] min-h-[calc(100vh-150px)] boxShaDow rounded-lg p-2 relative ${className}`}
    >
      <button className="absolute right-2 top-3 p-1 rounded-md hover:shadow-lg active:scale-95 text-lg">
        <BsThreeDotsVertical />
      </button>
      <div className="mx-1">{children}</div>
    </section>
  )
}

export default Board
