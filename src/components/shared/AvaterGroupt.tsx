import { useQueryClient } from 'react-query'
import Avater from './Avater'

const AvaterGroupt = () => {
  const queryClient = useQueryClient()
  return (
    <div className="avatar-group -space-x-3">
        {queryClient.getQueryData('project')?.admins?.map((a,i)=> <Avater key={i} className="!h-8 !w-8" src={a?.avatar} title={a?.name} /> )}
        {queryClient.getQueryData('members')?.map((a,i)=> <Avater key={i} className="!h-8 !w-8" src={a?.avatar} title={a?.name} /> )}
      {/* <Avater className="!h-8 !w-8" src="https://picsum.photos/200" />
      <Avater className="!h-8 !w-8" src="https://picsum.photos/200" />
      <Avater className="!h-8 !w-8" src="https://picsum.photos/200" />
      <Avater className="!h-8 !w-8" src="https://picsum.photos/200" /> */}
      {/* <Avater className="!h-8 !w-8" title="10+" /> */}
    </div>
  )
}

export default AvaterGroupt
