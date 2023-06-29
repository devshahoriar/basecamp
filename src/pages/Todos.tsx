import React from 'react'
import WithChildBoard from '../components/shared/WithChildBoard'

const Todos = () => {
  return (
    <main>
      <div className="container mt-5">
      <WithChildBoard>
          <h1 className="text-center mt-20 text-5xl">Todos</h1>
        </WithChildBoard>
      </div>
    </main>
  )
}

export default Todos