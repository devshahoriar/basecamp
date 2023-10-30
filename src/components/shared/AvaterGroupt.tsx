import { useQueryClient } from 'react-query'
import Avater from './Avater'

const AvaterGroupt = () => {
  const queryClient = useQueryClient()
  const members:any = queryClient.getQueryData('members')
  const creator:any = queryClient.getQueryData('project')?.creator
  return (
    <div className="avatar-group -space-x-3">
      <Avater  className="!h-8 !w-8" src={creator?.avatar} title={creator?.name} />
        {members?.map((a,i)=> <Avater key={i} className="!h-8 !w-8" src={a?.avatar} title={a?.name} /> )}
      {/* <Avater className="!h-8 !w-8" src="https://picsum.photos/200" />
      <Avater className="!h-8 !w-8" src="https://picsum.photos/200" />
      <Avater className="!h-8 !w-8" src="https://picsum.photos/200" />
      <Avater className="!h-8 !w-8" src="https://picsum.photos/200" /> */}
      {/* <Avater className="!h-8 !w-8" title="10+" /> */}
    </div>
  )
}

export default AvaterGroupt
