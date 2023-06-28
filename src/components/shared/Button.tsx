interface Button extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string
  children?: React.ReactNode | string
  onClick?: () => void
}

const Button = ({ children, className, onClick }: Button) => {
  return (
    <button className={`${className} btn btn-sm rounded-3xl md:btn-md`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
