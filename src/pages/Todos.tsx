import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useState } from 'react'
import WithChildBoard from '../components/shared/WithChildBoard'
import { BsFillPencilFill } from 'react-icons/bs'
import { ImBin } from 'react-icons/im'
import { LiaBarsSolid } from 'react-icons/lia'

const data = [
  'todo1 sggsd sdfsdf sfsdf sdfsdf sdfsdf sd fsd f sd f sd fsd f sd f sd fsd f sd f sdf sd f sd fs df sd fsd f sd f sdf sd f sdf sd f sd fsd f sd fsd f', 'todo2', 'todo3', "todo4"
]

const Todo = ({ todo, index }: { todo: string, index: number }) => {
  const [showColorPicker, setShowColorPicker] = useState(false)
  return <Draggable draggableId={todo} index={index} key={index} >

    {(provided) => <div {...provided.draggableProps}  ref={provided.innerRef} className='border  my-2 p-2 rounded-md flex items-center justify-between relative'>
      <div className='flex items-center gap-2'>
        <button {...provided.dragHandleProps} ><LiaBarsSolid /></button>
        <h1>{todo}</h1>
      </div>
      <div className='flex gap-3 items-center ml-3'>
        <button className='h-4 w-4 bg-black rounded-full' />
        <button className='h-4 w-4 bg-blue-800 rounded-full' />
        <button className='h-4 w-4 bg-green-700 rounded-full' />
        <button className='h-4 w-4 bg-red-700 rounded-full' />

        <button><BsFillPencilFill /></button>
        <button><ImBin /></button>
      </div>
    </div>}
  </Draggable>
}

const Todos = () => {
  const [todos, setTodos] = useState(data)

  return (
    <main>
      <div className="container mt-5">
        <WithChildBoard isMenu={false}>
          <div className='flex justify-between items-center border-b pb-1'>
            <h1 className="text-xl font-bold">Todos</h1>
            <button className='btn'>Add Todo</button>
          </div>
          <div className='md:mx-20 mt-10'>
            <DragDropContext onDragEnd={(result) => {console.log(result)
             }}>
              <Droppable droppableId='ss'>
                {
                  (provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>

                      {todos.map((todo, index) => <Todo key={index} todo={todo} index={index} />)}
                      {provided.placeholder}
                    </div>
                  )
                }
              </Droppable>
            </DragDropContext>
          </div>
        </WithChildBoard>
      </div>
    </main>
  )
}

export default Todos
