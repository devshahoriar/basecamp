import { useState } from 'react'
import ProjectBox from '../components/home/ProjectBox'
import Button from '../components/shared/Button'
import ModelBase from '../components/shared/ModelBase'
import AddProject from '../components/shared/forHomePage/AddProject'

const Home = () => {
  const [showMakeProject, setMakeProject] = useState(false)
  return (
    <main className="container">
      {showMakeProject && <AddProject set={setMakeProject} />}
      <section className="mt-5">
        <p className="text-center font-semibold text-lg md:text-2xl">
          Projects
        </p>
        <div className="flex flex-col gap-2 mt-5 md:flex-row md:justify-center md:gap-5">
          <Button onClick={() => setMakeProject((r) => !r)}>
            Make a new Project
          </Button>
          <Button>Invite People</Button>
        </div>
      </section>
      <p className="text-center  mt-3">Pined and resent projects.</p>
      <section className="mt-5 grid gap-5 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
      </section>
      <div className="divider w-full my-10">Resently added project</div>
      <section className="mt-5 grid gap-5 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
      </section>
      <div className="h-20"></div>
    </main>
  )
}

export default Home
