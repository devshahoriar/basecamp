import { useEffect, useRef } from 'react'
import WithChildBoard from '../components/shared/WithChildBoard'
import { BiSend } from 'react-icons/bi'
import Avater from '../components/shared/Avater'

const ItemMessage = ({l}:{l?:boolean}) => {
  return (
    <div className={`w-full flex items-start gap-1 mb-3 ${l ? "flex-row-reverse" : ""}`}>
      <Avater alt="user" src="https://picsum.photos/200" className='h-8 w-8' />
      <p className='bg-zinc-400 p-1 rounded-lg max-w-[75%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde libero blanditiis nesciunt, debitis ratione molestias assumenda repudiandae earum. Veritatis reiciendis reru.</p>
    </div>
  )
}

const Message = () => {
  const pRef = useRef<HTMLDivElement>()
  useEffect(() => {
    pRef.current.scrollTop = pRef.current.scrollHeight
  }, [])
  return (
    <main>
      <div className="container mt-5">
        <WithChildBoard>
          <h1 className="text-center text-lg">Messages</h1>
          <div className="h-[calc(100vh-175px)] relatives flex flex-col ">
            <div
              className="overflow-x-hidden overflow-y-visible scrollbar-thin scrollbar-track-slate-50 scrollbar-thumb-slate-800 flex-1 mt-2 mb-2"
              ref={pRef}
            >
              <ItemMessage />
              <ItemMessage l />
              <ItemMessage />
              <ItemMessage />
              <ItemMessage l />
              <ItemMessage />
            </div>
            <div className="w-full h-12 flex justify-center items-center">
              <div className="w-full flex justify-center items-center">
                <input
                  type="text"
                  className="w-full outline-none border border-black bg-transparent px-1 py-1 rounded-md"
                />
                <button className="text-2xl active:scale-95">
                  <BiSend />
                </button>
              </div>
            </div>
          </div>
        </WithChildBoard>
      </div>
    </main>
  )
}

export default Message
