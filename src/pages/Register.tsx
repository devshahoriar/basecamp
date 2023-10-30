import { Link, useNavigate } from 'react-router-dom'
import InputBoxLOgReg from '../components/shared/InputBoxLOgReg'
import { BiRename } from 'react-icons/bi'
import { MdOutlineMail, MdPassword } from 'react-icons/md'
import LogRegButton from '../components/shared/LogRegButton'
import { useEffect, useState } from 'react'
import Axios from '../lib/axiosConfig'
import { apiUrl } from '../lib/const'

const Register = () => {
  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const _hendelGoogleLogin = () => {
    window.open(apiUrl + '/auth/google', '_self')
  }

  const _hendelRegister = async () => {
    try {

      if (fName === "" || lName === "" || email === "" || password === "") {
        setError('Please fill all the field')

      } else {
        setError('')
        const { data } = await Axios({
          method: 'post',
          url: '/auth/register',
          data: {
            username: fName + " " + lName,
            email,
            password
          }
        })
        if (data) {
          navigate('/login', { replace: true })
        }
      }
    } catch (error: any) {
      console.log(error.response.data.message);
      setError(error.response.data.message)
    }

  }

  useEffect(() => {
    setError('')
  }, [fName, lName, email, password])



  return (
    <main className='bg-slate-900'>
      <section className="flex items-center justify-center h-screen text-white">
        <div className="md:h-[500px] w-[95%] sm:w-[80%] h-[600px] md:w-[700px]  rounded-xl logInBg overflow-hidden drop-shadow-lg">
          
          {/* <div className="mx-5 mt-3">
        <Link to="/" className="font-bold">
          Basecamp
        </Link>
      </div> */}
          <div className="m-14">
            <p className="opacity-50 uppercase text-sm">Start here!</p>
            <p className="font-semibold text-2xl my-3">Create A new Account!</p>
            <p className="">
              Alrady have account?{' '}
              <Link to="/login" className="font-bold text-blue-700">
                Login
              </Link>
            </p>
            <div>
              <div className="flex gap-5 mt-5 flex-col md:flex-row">
                <InputBoxLOgReg
                  icon={<BiRename />}
                  placeholder="First Name"
                  title="First Name"
                  type="text"
                  className="!w-full md:!w-fit"
                  onChange={(e: string) => setFName(e)
                  }
                />
                <InputBoxLOgReg
                  icon={<BiRename />}
                  placeholder="Last name"
                  title="Last Name"
                  type="text"
                  className="!w-full md:!w-fit"
                  onChange={(e: string) => setLName(e)}
                />
              </div>
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
                placeholder="Password"
                title="Password"
                type="password"
                className="w-full md:w-[60%] mt-5"
                onChange={(e: string) => setPassword(e)}
              />
              <p className='text-red-800 mt-2 text-base h-5'>{error}</p>
              <div className="flex gap-5">
                <LogRegButton onClick={_hendelRegister} title="Register" className="mt-2" />
                <LogRegButton
                  onClick={_hendelGoogleLogin}
                  title="Google"
                  className="mt-2"
                />
                {/* <LogRegButton title="Register" className="mt-5" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Register
