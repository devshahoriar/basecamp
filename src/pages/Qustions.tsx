
import { useEffect, useState } from 'react'
import WithChildBoard from '../components/shared/WithChildBoard'
import ModelBase from '../components/shared/ModelBase'
import { AiOutlineClose } from 'react-icons/ai'
import Select from 'react-select';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { agate } from 'react-syntax-highlighter/dist/esm/styles/hljs';

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
  return <button onClick={() => set(true)} className='bg-slate-500 bg-opacity-10 p-2 rounded-md flex flex-col gap-1 w-full hover:bg-opacity-20 active:scale-[99.5%]'>
    <h1 className='line-clamp-1 text-xl'>This is qustion title?</h1>
    <div className='flex items-center justify-between w-full'>
      <div className='flex gap-2 md:gap-5'>
        <p className='text-start'>3 Answare</p>
        <div className='flex gap-1 md:gap-2 text-xs'>
          <span className='bg-slate-400 dark:bg-slate-950 p-1  rounded-md'>Javascript</span>
          <span className='bg-slate-400 dark:bg-slate-950  p-1 rounded-md'>Pyhton</span>
          <span className='bg-slate-400 dark:bg-slate-950  p-1  rounded-md'>Php</span>
        </div>
      </div>
      <div className='flex gap-1 md:gap-2'>
        <img className='h-7 w-7 object-cover rounded-md' src="https://picsum.photos/200" alt="" />
        <p className='hidden md:block'>Shuvo</p>
      </div>
    </div>
  </button>
}

const ItemAnsware = () => {
  const codeString = `import Home from './Home'
  import Login from './Login'
  import Register from './Register'
  import Project from './Project'
  import Message from './Message'
  import Qustions from './Qustions'
  import DocsFile from './DocsFile'
  import Todos from './Todos'
  import Schedule from './Schedule'
  
  export {
    Home,
    Login,
    Register,
    Project,
    Message,
    Qustions,
    DocsFile,
    Todos,
    Schedule,
  }
  `;
  return (
    <div className='p-3 rounded-xl dark:bg-slate-700'>
      <div className='flex items-center text-sm justify-between'>
        <div className='flex items-center gap-1'>  <p>Answare by shuvo</p>
          <img src="https://picsum.photos/200" className='h-5 w-5 object-cover rounded-md' alt="" /></div>
      <button className='btn btn-sm'>Edit</button>
      </div>
      <div>
        <p className='text-black text-lg mt-2'>This is ans string</p>
        <div className='rounded-md overflow-hidden mt-2'>
          <SyntaxHighlighter language="javascript" style={agate}>
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  )
}



const Qustions = () => {
  const [addQustion, setAddQustion] = useState(false)
  const [showFullQustion, setShowFullQustion] = useState(false)
  const [makeSolution, setMakeSolution] = useState(true)

  useEffect(() => {
    if (showFullQustion) {
      setMakeSolution(true)
    }
  }, [showFullQustion])

  return (
    <main className='w-full'>
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
        <div className='w-[calc(100vw-20px)] md:w-[600px] bg-slate-300 dark:bg-slate-800 max-h-[500px] shadow-lg rounded-md relative pb-5'>


          <button onClick={() => setShowFullQustion(false)} className='btn btn-sm md:btn-md absolute right-3 top-2'>
            <AiOutlineClose />
          </button>


          <div className='pt-5 px-2'>
            <h1 className='text-2xl font-bold'>This is qustion title?</h1>



            {
              makeSolution ?

                (<div className='overflow-auto h-[calc(500px-70px)] mt-2 scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-400'>
                  <div className='flex gap-5 flex-col '>
                    <ItemAnsware />
                    <ItemAnsware />
                    <ItemAnsware />
                    <ItemAnsware />
                  </div>
                  <h1 className='dark:bg-slate-700 rounded-md p-2 my-3'>No solution</h1>
                  <button onClick={() => setMakeSolution(false)} className='btn'>Make a solution</button>
                </div>)

                :


                (
                  <div className='mt-5 flex flex-col'>
                    <p className='text-black m-1'>Your answare title</p>
                    <input type="text" placeholder="Your answare here." className="input input-bordered w-full" />
                    <p className='text-black m-1 mt-5'>Code</p>
                    <textarea placeholder='Your Code.' rows={4} cols={50} className='input w-full h-autodd !h-auto ' />
                    <div className=' flex gap-5 mt-5'><button className='btn'>Done</button>
                      <button className='btn' onClick={() => setMakeSolution(true)}>Back</button></div>
                  </div>
                )


            }
          </div>
        </div>
      </ModelBase>}

      {addQustion && <ModelBase set={setAddQustion}>
        <div className='bg-slate-300 dark:bg-slate-800 w-[calc(100vw-20px)] md:w-[600px] relative rounded-lg shadow-xl px-5 scale-90 md:scale-100 md:px-3 py-3'>
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
