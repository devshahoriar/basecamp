import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd'
import { useEffect, useState } from 'react'
import WithChildBoard from '../components/shared/WithChildBoard'
import { BsFillPencilFill } from 'react-icons/bs'
import { ImBin } from 'react-icons/im'
import { LiaBarsSolid } from 'react-icons/lia'
import ModelBase from '../components/shared/ModelBase'
import { AiOutlineClose } from 'react-icons/ai'
import { useQuery, useQueryClient } from 'react-query'
import Axios from '../lib/axiosConfig'
import { useParams } from 'react-router-dom'



const Todo = ({ todo, index, setModelShowAddTodo, setSelectedEditId, setOpenForEdit }: any) => {
  const queryClient = useQueryClient()
  const { id } = useParams() || {}

  const _hendelDelete = async (i) => {
    const oldTodos = queryClient.getQueryData('todos') as Array<any>

    if (i >= 0 && i < oldTodos.length) {
      const newArray = oldTodos.slice(0, i).concat(oldTodos.slice(i + 1));

      try {
        queryClient.setQueryData('todos', newArray)
        const { data } = await Axios({
          url: '/todo/' + id,
          method: 'post',
          data: {
            projectId: id,
            todos: JSON.stringify(newArray)
          },
        })
      } catch (error) {
        queryClient.invalidateQueries('todos')
      }
    }

  }
  return (
    <Draggable draggableId={"sdf" + index} index={index} key={index} >
      {(provided) => <div {...provided.draggableProps} ref={provided.innerRef} className='border  my-2 p-2 rounded-md flex items-center justify-between relative'>
        <div className='flex items-center gap-2'>
          <button {...provided.dragHandleProps} ><LiaBarsSolid /></button>
          <h1>{todo?.todo}</h1>
        </div>
        <div className='flex gap-3 items-center ml-3'>
          {/* <button className='h-4 w-4 bg-black rounded-full' />
          <button className='h-4 w-4 bg-blue-800 rounded-full' />
          <button className='h-4 w-4 bg-green-700 rounded-full' />
          <button className='h-4 w-4 bg-red-700 rounded-full' /> */}

          <button onClick={() => {
            setModelShowAddTodo(true)
            setSelectedEditId(index)
            setOpenForEdit(true)
          }} ><BsFillPencilFill /></button>
          <button onClick={() => _hendelDelete(index)}><ImBin /></button>
        </div>
      </div>}
    </Draggable>
  )
}

const Model = ({ set, selectedEditId, setOpenForEdit, openForEdit }: any) => {
  const { id } = useParams() || {}
  const [todo, setTodo] = useState('')
  const [color, setColor] = useState('blue')
  const queryClient = useQueryClient()

  useEffect(() => {
    if (openForEdit) {
      const oldData = queryClient.getQueryData('todos') as any
      setTodo(oldData[selectedEditId].todo);

    }
    return () => {
      setOpenForEdit(false)
    }
  }, [])


  const _hendelAddTodo = async () => {
    const oldData = queryClient.getQueryData('todos') as any

    let newUpdate = [{ todo, color }]
    if (oldData) {
      newUpdate = [...oldData, { todo, color }]
    }
    if (openForEdit) {
      oldData[selectedEditId].todo = todo
      newUpdate = oldData
    }
    const { data } = await Axios({
      url: '/todo/' + id,
      method: 'post',
      data: {
        projectId: id,
        todos: JSON.stringify(newUpdate)
      },
    })
    queryClient.invalidateQueries('todos')
    set(false)
  }

  return <ModelBase set={set}>
    <div className='w-[calc(100vw-20px)] md:w-[600px] bg-slate-300 dark:bg-slate-800 max-h-[500px] shadow-lg rounded-md relative pb-5'>
      <button onClick={() => set(false)} className='btn btn-sm md:btn-md absolute right-3 top-2'>
        <AiOutlineClose />
      </button>
      <div>
        <div className='pt-10 px-2'>
          <p className='text-xl'>Add todo</p><div>

            <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full mt-3" />
            <div className='mt-4 flex gap-4'><button className='h-6 w-6 bg-black dark:bg-white rounded-full' />
              <button className='h-6 w-6 bg-blue-800 rounded-full' />
              <button className='h-6 w-6 bg-green-700 rounded-full' />
              <button className='h-6 w-6 bg-red-700 rounded-full' /></div>
          </div>
          <button onClick={_hendelAddTodo} className='btn mt-5'>{openForEdit ? "update" : "Add todo"}</button>
        </div>
      </div>
    </div>
  </ModelBase>
}

const Todos = () => {
  const [modelShowAddTodo, setModelShowAddTodo] = useState(false)
  const [selectedEditId, setSelectedEditId] = useState(null)
  const [openForEdit, setOpenForEdit] = useState(false)
  const queryClient = useQueryClient()


  const { id } = useParams() || {}
  const { data } = useQuery('todos', async () => {
    const { data } = await Axios({
      url: '/todo/' + id,
      data: {
        projectId: id
      },
      withCredentials: true
    })
    return JSON.parse(data?.data?.todos)
  }, { initialData: [] })

  const _hendelUpdate = async (result: DropResult) => {
    const fromIndex = result.source?.index, toIndex = result.destination?.index
    if (fromIndex >= 0 && toIndex >= 0) {
      const cd = [...data]
      const [rem] = cd.splice(fromIndex, 1);
      cd.splice(toIndex, 0, rem);
      queryClient.setQueryData('todos', cd)
      try {
        const { data } = await Axios({
          url: '/todo/' + id,
          method: 'post',
          data: {
            projectId: id,
            todos: JSON.stringify(cd)
          },
        })
      } catch (error) {
        queryClient.invalidateQueries('todos')
      }
    }


  }



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
              _hendelUpdate(result)
            }}>
              <Droppable droppableId='ss'>
                {
                  (provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>

                      {data?.map((todo, index) => <Todo key={index} todo={todo} index={index} setModelShowAddTodo={setModelShowAddTodo} setSelectedEditId={setSelectedEditId} setOpenForEdit={setOpenForEdit} />)}
                      {provided.placeholder}
                    </div>
                  )
                }
              </Droppable>
            </DragDropContext>
          </div>
        </WithChildBoard>
      </div>


      {modelShowAddTodo && <Model set={setModelShowAddTodo} selectedEditId={selectedEditId} setOpenForEdit={setOpenForEdit} openForEdit={openForEdit} />}


    </main>
  )
}

export default Todos
