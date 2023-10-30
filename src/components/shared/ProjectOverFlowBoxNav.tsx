import { Link, useMatch, useParams } from 'react-router-dom'
import {
  CalendetIcon,
  CampfireIcon,
  FileIcon,
  MessageIcon,
  TodosIcon,
} from '../../assets/Icons'

const BoxLink = ({
  to,
  children,
  title,
}: {
  to: string
  children: React.ReactNode
  title: string
}) => {
  const match = useMatch(to)
  
  
  return (
    <Link to={to} className="flex flex-col items-center">
      <div className={`flex flex-col items-center hover:text-blue-600 ${match ? "text-blue-600 font-bold" : ""}`}>
      {children}
      <p className="text-sm hidden md:block">{title}</p>
      </div>
    </Link>
  )
}

const ProjectOverFlowBoxNav = () => {
  const { id } = useParams()
  return (
    <div className="absolute border py-3  px-5 top-10  bg-white rounded-md flex gap-8 justify-center text-2xl items-center boxShaDow z-50">
      <BoxLink title="Message" to={'/project/' + id + '/message'}>
        <MessageIcon />
      </BoxLink>
      <BoxLink title="Todo" to={'/project/' + id + '/todo'}>
        <TodosIcon />
      </BoxLink>
      <BoxLink title="File" to={'/project/' + id + '/docsfile'}>
        <FileIcon />
      </BoxLink>
      <BoxLink title="Schedule" to={'/project/' + id + '/schedule'}>
        <CalendetIcon />
      </BoxLink>
      <BoxLink title="Campfire" to={'/project/' + id + '/qus'}>
        <CampfireIcon />
      </BoxLink>
    </div>
  )
}

export default ProjectOverFlowBoxNav
