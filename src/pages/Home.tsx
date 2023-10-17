import { useState } from 'react'
import ProjectBox from '../components/home/ProjectBox'
import Button from '../components/shared/Button'
import AddProject from '../components/shared/forHomePage/AddProject'
import ProjectLoder from '../components/shared/loder/ProjectLoder'
import { useQuery } from 'react-query'
import Axios from '../lib/axiosConfig'
import { ModelsForInvite } from '../components/home/Models'


const Home = () => {
  const { data, isLoading, isError } = useQuery('/projects', async () => {
    const { data } = await Axios({
      method: 'get',
      url: '/project/projects',
      withCredentials: true
    })
    return data
  })
  const [showMakeProject, setMakeProject] = useState(false)
  const [openInvite, setOpenInvite] = useState(false)

  return (
    <main className="container">
      {showMakeProject && <AddProject set={setMakeProject} />}
      {openInvite && <ModelsForInvite set={setOpenInvite} />}
      <section className="mt-5">
        <p className="text-center font-semibold text-lg md:text-2xl">
          Projects
        </p>
        <div className="flex flex-col gap-2 mt-5 md:flex-row md:justify-center md:gap-5">
          <Button onClick={() => setMakeProject((r) => !r)}>
            Make a new Project
          </Button>
          <Button onClick={() => setOpenInvite(r => !r)}>Invite People</Button>
        </div>
      </section>
     {!isLoading && <p className="text-center  mt-3">{data?.data?.length === 0 ? 'No project found.' : 'Pined and resent projects.'}</p>}
      <section className="mt-5 grid gap-5 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
        {isLoading && <>
          <ProjectLoder />
          <ProjectLoder />
          <ProjectLoder />

        </>}
        {
          isError && <div className='text-center text-red-500'>Something went wrong</div>
        }
        {
          data?.data && data?.data.map((project: any) => <ProjectBox key={project._id} project={project} />)
        }

      </section>
      {/* <div className="divider w-full my-10">Resently added project</div>
      <section className="mt-5 grid gap-5 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
      </section> */}
      <div className="h-20"></div>
    </main>
  )
}

export default Home
