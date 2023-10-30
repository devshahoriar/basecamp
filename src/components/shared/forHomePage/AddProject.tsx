import { useEffect, useState } from 'react'
import ModelBase from '../ModelBase'
import { IoMdClose } from 'react-icons/io'
import Axios from '../../../lib/axiosConfig'
import { useQueryClient } from 'react-query'

const AddProject = ({ set }: { set: any }) => {
  const [name, setName] = useState('')
  const [details, setDetails] = useState('')
  const [error, setError] = useState('')
  const queryClient = useQueryClient()

  const _hendelAdd = async () => {
    if (name === '' || details === '') {
      setError('Fill all fields')
      return
    }
    try {
      const { data } = await Axios({
        method: 'POST',
        url: '/project/create',
        withCredentials: true,
        data: {
          name,
          details
        }
      })
      queryClient.invalidateQueries('/projects')
      set(false)
    } catch (error) {
      setError('Something went wrong')
    }

  }

  useEffect(() => {
    setError('')
  }, [name, details])


  return (
    <ModelBase set={set}>
      <div
        className="w-[97%] bg-zinc-700 p-3 rounded-xl shadow-md md:w-[600px] bg-opacity-25"
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex justify-end'>
          <button className='btn btn-outline btn-sm' onClick={() => set(false)} >
            <IoMdClose />
          </button>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Project name</span>
          </label>
          <input
          autoFocus
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Project 1"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Project Details</span>
          </label>
          <textarea
            onChange={(e) => setDetails(e.target.value)}
            placeholder="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum?"
            className="input input-bordered w-full h-24"
          />
        </div>
        <div>
          <p className='text-red-600 h-4'>{error}</p>
        </div>
        <button onClick={_hendelAdd} className='btn w-full btn-sm mt-5 active:scale-95'>Create</button>
      </div>
    </ModelBase>
  )
}

export default AddProject
