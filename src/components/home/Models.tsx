import { IoMdClose } from "react-icons/io"
import ModelBase from "../shared/ModelBase"
import { useState } from "react"
import Axios from "../../lib/axiosConfig"

const ModelsForInvite = ({ set }: any) => {
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [note, setNote] = useState('')

  const _hendelSubmit = async () => {
    try {
      const { data } = await Axios({
        url: "/project/invite",
        withCredentials: true,
        method: "post",
        data: {
          email: email,
          note: note
        }

      })
      console.log(data);

    } catch (error) {
      console.log(error);

    }

  }
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
        <div className="p-3">
          <input onChange={e => setEmail(e.target.value)} type="Email" className="input input-bordered w-full" placeholder="Email" />
          <input onChange={e => setNote(e.target.value)} type="Custom Note" className="input input-bordered w-full mt-4" placeholder="Note" />
          <p className="text-[#e93333] h-4">{error}</p>
          <button onClick={_hendelSubmit} className="btn mt-4">Invite</button>
        </div>

      </div>
    </ModelBase>
  )
}

export { ModelsForInvite }