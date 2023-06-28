import React from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  src?: string
  alt?: string
  title?: string
  s?: number
}

const Avater = ({ alt, src, className, title, ...rest }: Props) => {
  return (
    <div
      {...rest}
      className={`rounded-full  h-10 w-10 overflow-hidden flex items-center justify-center border-2 ${className} ${title ? 'bg-gray-500' : ''}`}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover aspect-square"
        />
      ) : (
        <span className='text-white'>{title}</span>
      )}
    </div>
  )
}

export default Avater
