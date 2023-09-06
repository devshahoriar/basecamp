
import { useParams } from 'react-router-dom'
import Board from '../components/shared/Board'
import BoardHeader from '../components/shared/BoardHeader'
import BoardItems from '../components/shared/BoardItems'

const Project = () => {

  return (
    <main>
      <div className="container mt-5">
        <Board>
          <BoardHeader />
          <BoardItems />
        </Board>
      </div>
    </main>
  )
}

export default Project
