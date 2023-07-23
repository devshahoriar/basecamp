import ModelBase from '../ModelBase'
import { IoMdClose } from 'react-icons/io'

const AddProject = ({ set }: { set: any }) => {
  return (
    <ModelBase set={set}>
      <div
        className="w-[97%] bg-zinc-700 p-3 rounded-xl shadow-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex justify-end'>
          <button className='btn btn-outline btn-sm' onClick={() => set(false)} >
            <IoMdClose/>
          </button>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Project name</span>
          </label>
          <input
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
            placeholder="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum?"
            className="input input-bordered w-full h-24"
          />
        </div>
        <button className='btn w-full btn-sm mt-5'>Create</button>
      </div>
    </ModelBase>
  )
}

export default AddProject
