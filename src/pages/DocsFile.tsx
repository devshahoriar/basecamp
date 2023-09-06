import { useEffect, useState } from 'react'
import WithChildBoard from '../components/shared/WithChildBoard'
import ModelBase from '../components/shared/ModelBase'
import { AiOutlineClose } from 'react-icons/ai'
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Axios from '../lib/axiosConfig';
import FileLoder from '../components/shared/loder/FileLoder';
import { useQuery, useQueryClient } from 'react-query';


const FileItem = ({ file }: { file: any }) => {
  const queryClient = useQueryClient()
  const { description, title, url } = file || {}
  const _hendelDelete = async () => {
    try {
      const { data } = await Axios({
        method: "delete",
        url: '/project/removefile?id=' + file._id,
        withCredentials: true
      })
     queryClient.invalidateQueries('/project/files')

    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div className='flex items-center my-5'>
      <div className='flex-1'>
        <h1 className='text-xl'>{title}</h1>
        <p className='line-clamp-2'>{description}</p>
      </div>
      <div className='flex gap-2'>
        <a href={url} className='btn' download>Downlode</a>
        <button className='btn' onClick={_hendelDelete}>Delete</button>
      </div>
    </div>
  )
}

const DropModel = ({ set }: any) => {
  const { acceptedFiles, getRootProps, getInputProps, isFileDialogActive, isDragActive, isDragAccept, isDragReject } = useDropzone({ maxFiles: 1 });
  const [error, setError] = useState('')
  const [uplodeProgress, setUplodeProgress] = useState(0)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const { id } = useParams() || {}
  const queryClient = useQueryClient()

  useEffect(() => {
    setError('')
  }, [title, description, acceptedFiles])

  const _hendelUplode = async () => {
    setError('')
    setUplodeProgress(0)
    try {
      if (acceptedFiles.length === 0) {
        setError('No file selected')
        return
      }
      if (title.length === 0 || description.length === 0) {
        setError('Title and description required')
        return
      }
      setUplodeProgress(0)
      const file = new FormData()
      file.append('file', acceptedFiles[0])
      file.append("upload_preset", 'g5ocg8wk')
      const res = await axios.post('https://api.cloudinary.com/v1_1/dow1abm8v/upload', file, {
        onUploadProgress(e: any) {
          setUplodeProgress(Math.floor(e.progress * 100))
        },
      })
      const url = res.data.url
      const { data } = await Axios({
        method: 'POST',
        url: '/project/addfile',
        withCredentials: true,
        data: {
          title,
          description,
          url,
          projectId: id
        }
      })
      set(false)
      queryClient.invalidateQueries(['/project/files', id])
    } catch (error: any) {
      setUplodeProgress(0)

      if (error?.response?.data?.error?.message) {
        setError(error.response.data.error.message)
      }
      if (error?.response?.data?.message) {
        setError(error.response.data.message)
      }
    }
  }




  return (<ModelBase set={set}>
    <div className='w-[calc(100vw-20px)] md:w-[600px] bg-slate-300   max-h-[600px] shadow-lg rounded-md relative pb-5'>
      <button onClick={() => set(false)} className='btn btn-sm md:btn-md absolute right-3 top-2'>
        <AiOutlineClose />
      </button>
      <div className='pt-5 px-2 pb-4'>
        <p className='text-2xl'>Uplode your file</p>
        <div className="flex justify-center flex-col items-center">
          <div className='dropzone'>

            <div  {...getRootProps({ className: 'w-full h-full flex justify-center flex-col items-center' })}>
              <input multiple={false} {...getInputProps()} />
              {isFileDialogActive || isDragActive ? <p>Only one file accepted</p> : <p>Click and Drag your file.</p>}
              {acceptedFiles.length > 0 && <div className='text-center'>
                <p>One file selected</p>
                <p className='line-clamp-1 w-full'>{acceptedFiles[0].name}</p>
              </div>}


            </div>
          </div>
          {isDragReject && <p className='text-red-500'>Only one file accepted</p>}

          <input onChange={e => setTitle(e.target.value)} type="text" placeholder='Add your title' className='input w-full  sm:w-80 mt-5' />
          <textarea onChange={e => setDescription(e.target.value)} placeholder='Add your description' cols={3} className='input w-full  sm:w-80 mt-5' />
          <div className='h-4 mt-1'>
            {uplodeProgress > 0 && <p>{uplodeProgress}% uploded</p>}
            <p className='text-red-700'>{error}</p>
          </div>
          <button onClick={_hendelUplode} className='btn mt-5'>Add</button>
        </div>
      </div>
    </div>
  </ModelBase>)
}

const DocsFile = () => {
  const [showAddFile, setShowAddFile] = useState(false)
  const { id } = useParams() || {}
  const { data, isLoading, isError } = useQuery('/project/files', async () => {
    const { data } = await Axios({
      method: 'get',
      url: '/project/files/' + id,
      withCredentials: true
    })
    return data
  })


  return (
    <main>
      <div className="container mt-5">
        <WithChildBoard isMenu={false}>
          <div className='flex justify-between border-b pb-1 items-center'>
            <h1 className='text-2xl'>Files</h1>
            <button onClick={() => setShowAddFile(true)} className='btn'>Add File</button>
          </div>
          <div>
            {isLoading &&
              <>
                <FileLoder />
                <FileLoder /></>}
            {isError && <div className='text-center text-red-500'>Something went wrong</div>}
            {
              data?.data && data?.data.map((file: any) => <FileItem key={file._id} file={file} />)
            }
          </div>
        </WithChildBoard>
      </div>
      {showAddFile && (<DropModel set={setShowAddFile} />)}
    </main>
  )
}

export default DocsFile
