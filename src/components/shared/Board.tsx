import { BsThreeDotsVertical } from 'react-icons/bs'

const Board = () => {
  return (
    <section className="mx-auto w-full sm:w-[500px] md:w-[600px] lg:w-[800px] xl:w-[1050px] min-h-[calc(100vh-100px)] boxShaDow rounded-lg p-2 relative">
      <button className="absolute right-2 top-3 p-1 rounded-md hover:shadow-lg active:scale-95">
        <BsThreeDotsVertical />
      </button>
      shuvo
    </section>
  )
}

export default Board
