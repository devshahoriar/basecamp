import { Link } from 'react-router-dom'
import InputBoxLOgReg from '../components/shared/InputBoxLOgReg'
import { BiRename } from 'react-icons/bi'
import { MdOutlineMail, MdPassword } from 'react-icons/md'
import LogRegButton from '../components/shared/LogRegButton'

const Register = () => {
  const _hendelGoogleLogin = () => {
    window.open('http://localhost:5000/auth/google', '_self')
  }
  return (
    <main>
      <section className="flex items-center justify-center h-screen">
        <div className="md:h-[500px] w-[95%] sm:w-[80%] h-[600px] md:w-[700px]  rounded-xl logInBg overflow-hidden">
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
                  placeholder="Shuvo"
                  title="First Name"
                  type="text"
                  className="!w-full md:!w-fit"
                />
                <InputBoxLOgReg
                  icon={<BiRename />}
                  placeholder="Vai"
                  title="Second Name"
                  type="text"
                  className="!w-full md:!w-fit"
                />
              </div>
              <InputBoxLOgReg
                icon={<MdOutlineMail />}
                placeholder="user@mail.com"
                title="Your Email"
                type="email"
                className="w-full md:w-[60%] mt-5"
              />
              <InputBoxLOgReg
                icon={<MdPassword />}
                placeholder="****"
                title="Password"
                type="password"
                className="w-full md:w-[60%] mt-5"
              />
              <div className="flex gap-5">
                <LogRegButton title="Register" className="mt-5" />
                <LogRegButton
                  onClick={_hendelGoogleLogin}
                  title="Google"
                  className="mt-5"
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
