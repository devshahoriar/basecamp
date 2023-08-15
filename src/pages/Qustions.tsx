
import { useState } from 'react'
import WithChildBoard from '../components/shared/WithChildBoard'
import ModelBase from '../components/shared/ModelBase'
import { AiOutlineClose } from 'react-icons/ai'
import Select from 'react-select';

export interface ColourOption {
  readonly value: string;
  readonly label: string;
}

export const colourOptions: readonly ColourOption[] = [
  { value: 'ocean', label: 'Ocean', },
  { value: 'blue', label: 'Blue' },
  { value: 'purple', label: 'Purple' },
  { value: 'red', label: 'Red', },
  { value: 'orange', label: 'Orange' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'green', label: 'Green' },
  { value: 'forest', label: 'Forest', },
  { value: 'slate', label: 'Slate', },
  { value: 'silver', label: 'Silver', },
];


const ItemQustion = ({ set }: any) => {
  return <button onClick={()=> set(true)} className='bg-slate-500 bg-opacity-10 p-2 rounded-md flex flex-col gap-1 w-full hover:bg-opacity-20 active:scale-[99.5%]'>
    <h1 className='line-clamp-1 text-xl'>This is qustion title?</h1>
    <div className='flex items-center justify-between w-full'>
      <div className='flex gap-5'>
        <p className='text-start'>3 Answare</p>
        <div className='flex gap-2'>
          <span className='bg-slate-400 dark:bg-slate-950 p-1 text-xs rounded-md'>Javascript</span>
          <span className='bg-slate-400 dark:bg-slate-950  p-1 text-xs rounded-md'>Pyhton</span>
          <span className='bg-slate-400 dark:bg-slate-950  p-1 text-xs rounded-md'>Php</span>
        </div>
      </div>
      <div className='flex gap-2'>
        <img className='h-7 w-7 object-cover rounded-md' src="https://picsum.photos/200" alt="" />
        shuvo
      </div>
    </div>
  </button>
}

const Qustions = () => {
  const [addQustion, setAddQustion] = useState(false)
  const [showFullQustion, setShowFullQustion] = useState(false)
  return (
    <main>
      <div className="container mt-5">
        <WithChildBoard isMenu={false}>
          <div className='flex justify-between border-b py-2 items-center'>
            <h1 className='text-xl font-bold'>Qustions</h1>
            <button onClick={() => setAddQustion(true)} className='btn'>Ask Qustion</button>
          </div>
          <div className="flex flex-col mt-5">
            <div className=" flex flex-col gap-5">
              <ItemQustion set={setShowFullQustion} />
              <ItemQustion set={setShowFullQustion} />
            </div>
            <div className="divider">Resolved qustion</div>
            <div className=" flex flex-col gap-5">
              <ItemQustion set={setShowFullQustion} />
              <ItemQustion set={setShowFullQustion} />

            </div>
          </div>
        </WithChildBoard>
      </div>
      {showFullQustion && <ModelBase set={setShowFullQustion}>
        <h1>Shuvo</h1>
      </ModelBase>}
      {addQustion && <ModelBase set={setAddQustion}>
        <div className='bg-slate-300 dark:bg-slate-800 w-full md:w-[600px] relative rounded-lg shadow-xl mx-0 scale-90 md:scale-100 md:px-3 py-3'>
          <button onClick={() => setAddQustion(false)} className='btn btn-sm md:btn-md absolute right-3 top-3'>
            <AiOutlineClose />
          </button>
          <div className='mt-5'>
            <h1 className='text-xl'>Add a qustion</h1>
            <input type="text" placeholder="Your qustion here " className="input input-bordered mt-3 w-full focus:outline-none dark:bg-slate-900 " />
            <Select
              defaultValue={[colourOptions[2], colourOptions[3]]}
              isMulti
              name="colors"
              options={colourOptions}
              className="basic-multi-select rounded-lg"
              classNamePrefix="select"
              onChange={(p, v) => console.log(p, v)}
              placeholder='Select tags'
            />
          </div>
          <div className='flex justify-center mt-3'>
            <button className='btn'>Add Qustion</button>
          </div>
        </div>
      </ModelBase>}
    </main>
  )
}

export default Qustions
