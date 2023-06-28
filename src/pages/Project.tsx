import React from 'react'
import { useParams } from 'react-router-dom'
import Board from '../components/shared/Board'

const Project = () => {
  const { id } = useParams()

  return (
    <main>
      <div className="container mt-5">
        <Board />
      </div>
    </main>
  )
}

export default Project
