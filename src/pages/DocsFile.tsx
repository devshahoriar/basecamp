
import WithChildBoard from '../components/shared/WithChildBoard'

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

const DocsFile = () => {
  return (
    <main>
      <div className="container mt-5">
        <WithChildBoard isMenu={false}>
          <div className='flex justify-between border-b pb-1 items-center'>
            <h1 className='text-2xl'>Files</h1>
            <button className='btn'>Add File</button>
          </div>
          <div>
            <FileItem file='file1' />
            <FileItem file='file1' />
          </div>
        </WithChildBoard>
      </div>
    </main>
  )
}

export default DocsFile
