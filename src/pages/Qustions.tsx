
import { useEffect, useState } from 'react'
import WithChildBoard from '../components/shared/WithChildBoard'
import ModelBase from '../components/shared/ModelBase'
import { AiOutlineClose } from 'react-icons/ai'
import Select from 'react-select';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { agate } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Axios from '../lib/axiosConfig';
import { useParams } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';

export interface ColourOption {
  readonly value: string;
  readonly label: string;
}

export const colourOptions: readonly ColourOption[] = [
  { value: "Java", label: "Java" },
  { value: "Python", label: "Python" },
  { value: "C sharp", label: "C Sharp" },
  { value: "JavaScript", label: "JavaScript" },
  { value: "Ruby", label: "Ruby" },
  { value: "Swift", label: "Swift" },
  { value: "PHP", label: "PHP" },
  { value: "Kotlin", label: "Kotlin" },
  { value: "Rust", label: "Rust" },
  { value: "Go", label: "Go" },
  { value: "TypeScript", label: "TypeScript" },
  { value: "Perl", label: "Perl" },
  { value: "Haskell", label: "Haskell" },
  { value: "Scala", label: "Scala" },
  { value: "Dart", label: "Dart" },
];


const ItemQustion = ({ set, data, setActiveAnsId }: any) => {

  return <button onClick={() => {
    setActiveAnsId(data._id)
    set(true)
  }} className='bg-slate-500 bg-opacity-10 p-2 rounded-md flex flex-col gap-1 w-full hover:bg-opacity-20 active:scale-[99.5%]'>
    <h1 className='line-clamp-1 text-xl'>{data?.title}</h1>
    <div className='flex items-center justify-between w-full'>
      <div className='flex gap-2 md:gap-5'>
        <p className='text-start'>{data?.answareCount} Answares</p>
        <div className='flex gap-1 md:gap-2 text-xs'>
          {data?.tags?.map((d, i) =>

            <span className='bg-slate-400 dark:bg-slate-950 p-1  rounded-md' key={i}>{d}</span>
          )}
        </div>
      </div>
      <div className='flex gap-1 md:gap-2'>
        <img className='h-7 w-7 object-cover rounded-md' src="https://picsum.photos/200" alt="" />
        <p className='hidden md:block'>Shuvo</p>
      </div>
    </div>
  </button>
}

const ItemAnsware = ({ id, d }, any) => {


  return (
    <div className='p-3 rounded-xl dark:bg-slate-700'>
      <div className='flex items-center text-sm justify-between'>
        <div className='flex items-center gap-1'>  <p>Answare by {d?.auther?.name}</p>
          <img src="https://picsum.photos/200" className='h-5 w-5 object-cover rounded-md' alt="" /></div>
        <button className='btn btn-sm'>Edit</button>
      </div>
      <div>
        <p className='text-black dark:text-white text-lg mt-2'>{d?.title}</p>
        <div className='rounded-md overflow-hidden mt-2'>
          <SyntaxHighlighter language="javascript" style={agate}>
            {d?.code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  )
}


const AnsBox = ({ setShowFullQustion, makeSolution, setMakeSolution, id }) => {
  const [qusTitle, setQusTitle] = useState('')
  const [inCode, setInCode] = useState('')
  const [error, setErrr] = useState('')
  const queryClient = useQueryClient()

  const { data, isError, isLoading, isFetching } = useQuery('ans', async () => {
    const { data } = await Axios({
      method: "get",
      url: "/qustion/ans/" + id,
      withCredentials: true
    })
    return data
  })


  const _hendelSubmit = async () => {
    setErrr('')
    if (qusTitle === "" && inCode === "") {
      setErrr("Fill all fild.")
      return
    }
    const { data } = await Axios({
      method: "post",
      url: "/qustion/ans/" + id,
      withCredentials: true,
      data: {
        body: qusTitle, code: inCode
      }
    })
    if (data.success) {
      await queryClient.invalidateQueries('ans')
      await queryClient.invalidateQueries('qustions')
      setErrr('')
      setQusTitle('')
      setInCode('')
      setMakeSolution(true)
    }

  }



  return <ModelBase set={setShowFullQustion}>
    <div className='w-[calc(100vw-20px)] md:w-[600px] bg-slate-300   max-h-[500px] shadow-lg rounded-md relative pb-5'>


      <button onClick={() => setShowFullQustion(false)} className='btn btn-sm md:btn-md absolute right-3 top-2'>
        <AiOutlineClose />
      </button>


      <div className='pt-5 px-2'>
        <h1 className='text-2xl font-bold'>This is qustion title?</h1>
        {
          makeSolution ?

            (<div className='overflow-auto max-h-[calc(500px-70px)] mt-2 scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-400'>
              <div className='flex gap-5 flex-col '>
                {isLoading && <p>Loading..</p>}
                {isError && <p>Something error.</p>}
                {data?.length === 0 && <h1 className='dark:bg-slate-700 rounded-md p-2 my-3'>No solution</h1>}
                {/* */}
                {!isFetching && data?.map((e, i) => <ItemAnsware d={e} id={e._id} key={i} />)}
              </div>

              <button onClick={() => setMakeSolution(false)} className='btn mt-3'>Make a solution</button>
            </div>)
            :
            (
              <div className='mt-5 flex flex-col'>
                <p className='text-black m-1'>Your answare title</p>
                <input value={qusTitle} onChange={e => setQusTitle(e.target.value)} type="text" placeholder="Your answare here." className="input input-bordered w-full" />
                <p className='text-black m-1 mt-5'>Code</p>
                <textarea value={inCode} onChange={e => setInCode(e.target.value)} placeholder='Your Code.' rows={4} cols={50} className='input w-full h-autodd !h-auto ' />
                <p className='text-red-700'>{error}</p>
                <div className=' flex gap-5 mt-5'>
                  <button onClick={_hendelSubmit} className='btn'>Done</button>
                  <button className='btn' onClick={() => setMakeSolution(true)}>Back</button></div>
              </div>
            )


        }
      </div>
    </div>
  </ModelBase>
}


const Qustions = () => {
  const [addQustion, setAddQustion] = useState(false)
  const [showFullQustion, setShowFullQustion] = useState(false)
  const [makeSolution, setMakeSolution] = useState(true)
  const [qustionTitle, setQustionTitle] = useState('')
  const [tags, setTags] = useState(['JavaScript'])
  const [errro, setError] = useState('')
  const { id } = useParams() || {}
  const queryClient = useQueryClient()
  const [activeAnsId, setActiveAnsId] = useState('')
  const { data: qsData, isError, isLoading } = useQuery('qustions', async () => {
    const data = await Axios({
      method: 'get',
      url: '/qustion/' + id,
      withCredentials: true
    })


    return data?.data
  })


  const _hendelAddQustion = async () => {
    setError('')
    if (qustionTitle === '')
      setError('Fill all fild.')

    try {
      const { data } = await Axios({
        url: '/qustion',
        method: "post",
        withCredentials: true,
        data: {
          title: qustionTitle, projectId: id, tags: tags
        }
      })
      setAddQustion(false)
      queryClient.invalidateQueries('qustions')
    } catch (error) {
      error.message !== null ? setError(error.message) : setError('Something error')
    }


  }

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
              {isLoading && <p>Loading...</p>}
              {isError && <p>Something error.</p>}
              {qsData?.length === 0 && <p>No qustions</p>}
              {
                qsData?.map((d, i) => <ItemQustion set={setShowFullQustion} data={d} key={i} setActiveAnsId={setActiveAnsId} />)
              }

            </div>
            {/* <div className="divider">Resolved qustion</div>
            <div className=" flex flex-col gap-5">
              <ItemQustion set={setShowFullQustion} />
              <ItemQustion set={setShowFullQustion} />

            </div> */}
          </div>
        </WithChildBoard>
      </div>


      {showFullQustion && <AnsBox makeSolution={makeSolution} setMakeSolution={setMakeSolution} setShowFullQustion={setShowFullQustion} id={activeAnsId} />}

      {addQustion && <ModelBase set={setAddQustion}>
        <div className='bg-slate-300   w-[calc(100vw-20px)] md:w-[600px] relative rounded-lg shadow-xl px-5 scale-90 md:scale-100 md:px-3 py-3'>
          <button onClick={() => setAddQustion(false)} className='btn btn-sm md:btn-md absolute right-3 top-3'>
            <AiOutlineClose />
          </button>
          <div className='mt-5'>
            <h1 className='text-xl'>Add a qustion</h1>
            <input onChange={e => setQustionTitle(e.target.value)} type="text" placeholder="Your qustion here " className="input input-bordered mt-3 w-full focus:outline-none dark:bg-slate-900 " />
            <Select
              defaultValue={[colourOptions[3]]}
              isMulti
              name="colors"
              options={colourOptions}
              className="basic-multi-select rounded-lg"
              classNamePrefix="select"
              onChange={(p, v) => setTags(p.map(e => e.value))}
              placeholder='Select tags'
            />
          </div>
          <p className='h-3 text-center text-red-700'>{errro}</p>
          <div className='flex justify-center mt-3'>
            <button onClick={_hendelAddQustion} className='btn'>Add Qustion</button>
          </div>
        </div>
      </ModelBase>}

    </main>
  )
}

export default Qustions
