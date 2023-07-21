const InputBoxLOgReg = ({
  icon,
  title,
  type,
  className,placeholder
}: {
  title: string
  icon: JSX.Element
  type: 'email' | 'text' |"password"
  className?: string
  placeholder? : string
}) => {
  return (
    <div className={`${className} bg-zinc-700 rounded-lg px-3 py-1 focus-within:border-blue-700 border-2 border-transparent`}>
      <p className="text-xs">{title}</p>
      <div className="w-full flex items-center ">
        <input className= "outline-none bg-transparent w-full peer" type={type} placeholder={placeholder} />
        <span className="peer-focus:text-blue-600 text-xl">{icon}</span>
      </div>
    </div>
  )
}

export default InputBoxLOgReg
