
import AvaterGroupt from './AvaterGroupt'
import { useQueryClient } from 'react-query'
import ModelBase from './ModelBase'
import { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import Select from 'react-select';
import Axios from '../../lib/axiosConfig'
import { useParams } from 'react-router-dom'

const BoardHeader = () => {
  const queryClient = useQueryClient()
  const project: any = queryClient.getQueryData('project')
  const [openModel, setOpenModel] = useState(false)

  return (
    <div className="flex flex-col items-center mt-5">
      <h1 className="text-3xl font-semibold">{project?.name}</h1>
      <p className="w-[70%] text-center line-clamp-2 mt-2 font-light">
        {project?.details}
      </p>
      <div className='flex gap-3 mt-5 '>
        <button onClick={() => setOpenModel(true)} className="btn btn-circle btn-sm overflow-hidden">Add</button>
        <AvaterGroupt />
      </div>
      {openModel && <Model set={setOpenModel} />}
    </div>
  )
}


const Model = ({ set }: any) => {
  const [search, setSearch] = useState('')
  const [debounchSearch, setDebounchSearch] = useState('')
  const [searchResult, setSearResult] = useState([])
  const [addedUser, setAddedUser] = useState([])
  const queryClient = useQueryClient()
  const { id } = useParams() || {}
  const [error, setError] = useState('')

  useEffect(() => {
    const debounchId = setTimeout(() => {
      setDebounchSearch(search)
    }, 500)
    return () => clearTimeout(debounchId)
  }, [search])

  useEffect(() => {
    const fetch = async () => {
      try {
        if (debounchSearch.length < 3) {
          return
        }
        const { data } = await Axios({
          method: "post",
          url: '/project/useremail',
          withCredentials: true,
          data: {
            email: debounchSearch
          }
        })


        if (data?.length >= 1) {
          const transfrom = data.map(item => {
            return { value: item._id, label: item.email }
          })
          setSearResult(transfrom)
        }
      } catch (error) {
        console.log(error);

      }
    }
    fetch()
  }, [debounchSearch])



  const _hendelAddUser = async () => {
    if (addedUser.length === 0) {
      setError('Add or remove member.')
      return
    }
    try {
      setError('')
      const { data } = await Axios({
        url: "/project/setuser/" + id,
        method: 'put',
        withCredentials: true,
        data: {
          emails: [...addedUser]
        }
      })
      if (data) {
        const { data: project } = await Axios({
          url: "/project/pro/" + id,
          withCredentials: true
        })
        queryClient.setQueryData('members', project?.members?.map(item => { return { value: item._id, label: item.email, avatar: item?.avatar } }))
        queryClient.setQueryData('project', project)
        set(false)
      }

    } catch (error) {
      console.log(error);


    }

  }

  return <ModelBase set={set}>
    <div className='w-[calc(100vw-20px)] md:w-[600px] bg-slate-300   max-h-[500px] shadow-lg rounded-md relative pb-5 p-5'>
      <button onClick={() => set(false)} className='btn btn-sm md:btn-md absolute right-3 top-2'>
        <AiOutlineClose />
      </button>
      <p className='mt-5'>Enter email to search:</p>
      <Select
        defaultValue={queryClient.getQueryData("members")}
        isMulti
        name="colors"
        options={searchResult}
        className="basic-multi-select rounded-lg"
        classNamePrefix="select"
        onChange={(p, v) => setAddedUser(p as any)}
        onInputChange={(e) => setSearch(e)}
        placeholder='Enter email'
        noOptionsMessage={({ inputValue }) => {
          if (debounchSearch.length < 3) {
            return <h1>Enter 3 letter or more</h1>
          }
          return <h1>Not Found any user.</h1>
        }}
      />
      <p className='text-red-600'>{error}</p>
      <button onClick={_hendelAddUser} className='btn mt-3'>Done</button>
    </div></ModelBase>
}


export default BoardHeader
