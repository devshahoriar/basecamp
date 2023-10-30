/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQueryClient } from "react-query"
import { FcGoogle } from "react-icons/fc"

const Profile = () => {
  const queryClient = useQueryClient()
  const user = queryClient.getQueryData('user') as any
  return (
    <div className='container px-0 md:px-20 mt-10'>
      <div className="flex flex-col sm:flex-row sm:gap-5 sm:justify-center md:scale-110">
        <div className="w-32 h-32">
          <img src={user?.avatar ? user.avatar : ""} className="h-full w-full object-cover rounded-md" alt="" />
        </div>
        <div className="mt-5 text-lg">
          <h1 className="font-bold">Name : {user?.name}</h1>
          <h1>Email : {user?.email}</h1>
          {user?.provider && <p className="flex items-center gap-2"> Sign in with Goolgle <FcGoogle /></p>}
        </div>
      </div>
      <div className="w-full flex justify-center mt-10">
        <button className="btn btn-error btn-sm sm:btn-md" onClick={()=>(document.getElementById('my_modal_1') as any).showModal()}>Delete Account</button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Delete your account?</h3>
            <p className="py-4">This action will be undone! You lost all your's project and removed from all projects that others added.</p>
            <div className="modal-action">
              <button className="btn btn-error">Delete Account</button>
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-outline">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  )
}

export default Profile