
import { useState } from 'react'
import WithChildBoard from '../components/shared/WithChildBoard'

const ItemQustion = () => {
  return <h1>Item qustion</h1>
}

const Qustions = () => {
  const [addQustion, setAddQustion] = useState(false)
  return (
    <main>
      <div className="container mt-5">
        <WithChildBoard isMenu={false}>
          <div className='flex justify-between border-b py-2 items-center'>
            <h1 className='text-xl font-bold'>Qustions</h1>
            <button onClick={() => setAddQustion(true)} className='btn'>Ask Qustion</button>
          </div>
          <div className="flex flex-col mt-5">
            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
            <div className="divider">Resolved qustion</div>
            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
          </div>
        </WithChildBoard>
      </div>
    </main>
  )
}

export default Qustions
