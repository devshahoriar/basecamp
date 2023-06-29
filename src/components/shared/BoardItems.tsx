import {
  CalendetIcon,
  CampfireIcon,
  FileIcon,
  MessageIcon,
  TodosIcon,
} from '../../assets/Icons'
import BoardItem from './BoardItem'

const BoardItems = () => {
  return (
    <div className="flex flex-wrap gap-8 mt-8 justify-center">
      {/* grid gap-5 mt-5 sm:grid-cols-2 lg:grid-cols-3 */}
      <BoardItem title="Message" to="message" emptyIcon={<MessageIcon />} />
      <BoardItem title="Todo" to="todo" emptyIcon={<TodosIcon />} />
      <BoardItem title="Docs and File" to="docsfile" emptyIcon={<FileIcon />} />
      <BoardItem title="Schedule" to="schedule" emptyIcon={<CalendetIcon />} />
      <BoardItem title="Comfire" to="qus" emptyIcon={<CampfireIcon />} />
    </div>
  )
}

export default BoardItems
