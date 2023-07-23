const LogRegButton = ({
  title,
  className,
  onClick,
}: {
  title: string
  className?: string
  onClick?: any
}) => {
  return (
    <button
      onClick={onClick}
      className={`${className} bg-zinc-700 border border-transparent px-5 py-3 rounded-xl hover:border-blue-700 active:scale-95`}
    >
      {title}
    </button>
  )
}

export default LogRegButton
