import { Link, useNavigate } from 'react-router-dom'
import InputBoxLOgReg from '../components/shared/InputBoxLOgReg'
import { MdOutlineMail, MdPassword } from 'react-icons/md'
import LogRegButton from '../components/shared/LogRegButton'
import { useEffect, useState } from 'react'

import { useQueryClient } from 'react-query'
import { apiUrl } from '../lib/const'
import Axios from '../lib/axiosConfig'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const _hendelLogin = async () => {
    try {
      if (email === "" || password === "") {
        setError('Please fill all the field')

      } else {
        setError('')
        const { data } = await Axios({
          method: 'Post',
          url: '/auth/login',
          withCredentials: true,
          data: {
            email,
            password
          }
        })
        queryClient.setQueryData('user', data.user)
        navigate('/', { replace: true })
        // const d = await axios({
        //   method: 'get',
        //   url: 'http://localhost:5000/auth/me',
        //   withCredentials: true,
        // })
        // console.log("this is d",d);

      }
    } catch ({ response }) {
      setError(response.data.message);

    }
  }
  const _hendelGoogleLogin = () => {
    window.open(apiUrl + '/auth/google', '_self')
  }



  useEffect(() => {
    setError('')
  }, [email, password])

  return (
    <main className='bg-slate-900'>
      <section className="flex items-center justify-center h-screen text-white dark:text-zinc-400">
        <div className="md:h-[500px] w-[95%] sm:w-[80%] h-[600px] md:w-[700px]  rounded-xl logInBg overflow-hidden drop-shadow-lg">
          {/* <div className="mx-5 mt-3">
            <Link to="/" className="font-bold">
              Basecamp
            </Link>
          </div> */}
          <div className="m-20">
            <p className="opacity-50 uppercase text-sm">Fun began here!</p>
            <p className="font-semibold text-2xl my-3">Login your Account!</p>
            <p className="">
              Dont't have account?{' '}
              <Link to="/register" className="font-bold text-blue-700">
                Register
              </Link>
            </p>
            <div>
              <InputBoxLOgReg
                icon={<MdOutlineMail />}
                placeholder="user@mail.com"
                title="Your Email"
                type="email"
                className="w-full md:w-[60%] mt-5"
                onChange={(e: string) => setEmail(e)}
              />
              <InputBoxLOgReg
                icon={<MdPassword />}
                placeholder="****"
                title="Password"
                type="password"
                className="w-full md:w-[60%] mt-5"
                onChange={(e: string) => setPassword(e)}
              />
              <p className='text-red-800 mt-2 text-base h-5'>{error}</p>
              <LogRegButton onClick={_hendelLogin} title="Login" className="mt-2" />
              <LogRegButton
                onClick={_hendelGoogleLogin}
                title="Google"
                className="mt-2 ml-2"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Login
