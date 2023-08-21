import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useState } from 'react'
import WithChildBoard from '../components/shared/WithChildBoard'
import { BsFillPencilFill } from 'react-icons/bs'
import { ImBin } from 'react-icons/im'
import { LiaBarsSolid } from 'react-icons/lia'
import ModelBase from '../components/shared/ModelBase'
import { AiOutlineClose } from 'react-icons/ai'

const data = [
  'todo1 sggsd sdfsdf sfsdf sdfsdf sdfsdf sd fsd f sd f sd fsd f sd f sd fsd f sd f sdf sd f sd fs df sd fsd f sd f sdf sd f sdf sd f sd fsd f sd fsd f', 'todo2', 'todo3', "todo4"
]

const Todo = ({ todo, index }: { todo: string, index: number }) => {
  return (
    <Draggable draggableId={todo} index={index} key={index} >
      {(provided) => <div {...provided.draggableProps} ref={provided.innerRef} className='border  my-2 p-2 rounded-md flex items-center justify-between relative'>
        <div className='flex items-center gap-2'>
          <button {...provided.dragHandleProps} ><LiaBarsSolid /></button>
          <h1>{todo}</h1>
        </div>
        <div className='flex gap-3 items-center ml-3'>
          {/* <button className='h-4 w-4 bg-black rounded-full' />
          <button className='h-4 w-4 bg-blue-800 rounded-full' />
          <button className='h-4 w-4 bg-green-700 rounded-full' />
          <button className='h-4 w-4 bg-red-700 rounded-full' /> */}

          <button><BsFillPencilFill /></button>
          <button><ImBin /></button>
        </div>
      </div>}
    </Draggable>
  )
}

const Todos = () => {
  const [todos, setTodos] = useState(data)
  const [modelShowAddTodo, setModelShowAddTodo] = useState(false)

  return (
    <main>
      <div className="container mt-5">
        <WithChildBoard isMenu={false}>
          <div className='flex justify-between items-center border-b pb-1'>
            <h1 className="text-xl font-bold">Todos</h1>
            <button onClick={() => setModelShowAddTodo(true)} className='btn'>Add Todo</button>
          </div>
          <div className='md:mx-20 mt-10'>
            <DragDropContext onDragEnd={(result) => {
              console.log(result)
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


      {modelShowAddTodo && <ModelBase set={setModelShowAddTodo}>
        <div className='w-[calc(100vw-20px)] md:w-[600px] bg-slate-300 dark:bg-slate-800 max-h-[500px] shadow-lg rounded-md relative pb-5'>
          <button onClick={() => setModelShowAddTodo(false)} className='btn btn-sm md:btn-md absolute right-3 top-2'>
            <AiOutlineClose />
          </button>
          <div>
            <div className='pt-10 px-2'>
              <p className='text-xl'>Add todo</p><div>

                <input type="text" placeholder="Type here" className="input input-bordered w-full mt-3" />
                <div className='mt-4 flex gap-4'><button className='h-6 w-6 bg-black dark:bg-white rounded-full' />
                  <button className='h-6 w-6 bg-blue-800 rounded-full' />
                  <button className='h-6 w-6 bg-green-700 rounded-full' />
                  <button className='h-6 w-6 bg-red-700 rounded-full' /></div>
              </div>
              <button className='btn mt-5'>Add todo</button>
            </div>
          </div>
        </div>
      </ModelBase>}


    </main>
  )
}

export default Todos
