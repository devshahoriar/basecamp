import { useState } from 'react'
import WithChildBoard from '../components/shared/WithChildBoard'
import ModelBase from '../components/shared/ModelBase'
import { AiOutlineClose } from 'react-icons/ai'
import { useDropzone } from 'react-dropzone';


const FileItem = ({ file }: { file: string }) => {
  return (
    <div className='flex items-center my-5'>
      <div className='flex-1'>
        <h1 className='text-xl'>File name</h1>
        <p className='line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat non nostrum saepe? Facilis repellat doloremque optio neque et voluptatem perferendis ipsum ipsa laborum, eum facere nemo fugit! Earum, voluptatem ipsam.</p>
      </div>
      <div className='flex gap-2'>
        <a className='btn'>Downlode</a>
        <a className='btn'>Delete</a>
      </div>
    </div>
  )
}

const DropModel = ({ set }: any) => {
  const { acceptedFiles, getRootProps, getInputProps, isFileDialogActive, isDragActive, isDragAccept, isDragReject } = useDropzone({ maxFiles: 1 });
  console.log(isDragAccept);



  return (<ModelBase set={set}>
    <div className='w-[calc(100vw-20px)] md:w-[600px] bg-slate-300 dark:bg-slate-800 max-h-[600px] shadow-lg rounded-md relative pb-5'>
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


            </div>
          </div>
          {isDragReject && <p className='text-red-500'>Only one file accepted</p>}
          <input type="text" placeholder='Add your title' className='input w-full  sm:w-80 mt-5' />
          <textarea placeholder='Add your description' cols={3} className='input w-full  sm:w-80 mt-5' />
          <button className='btn mt-5'>Add</button>
        </div>
      </div>
    </div>
  </ModelBase>)
}

const DocsFile = () => {
  const [showAddFile, setShowAddFile] = useState(false)
  return (
    <main>
      <div className="container mt-5">
        <WithChildBoard isMenu={false}>
          <div className='flex justify-between border-b pb-1 items-center'>
            <h1 className='text-2xl'>Files</h1>
            <button onClick={() => setShowAddFile(true)} className='btn'>Add File</button>
          </div>
          <div>
            <FileItem file='file1' />
            <FileItem file='file1' />
          </div>
        </WithChildBoard>
      </div>
      {showAddFile && (<DropModel set={setShowAddFile} />)}
    </main>
  )
}

export default DocsFile
