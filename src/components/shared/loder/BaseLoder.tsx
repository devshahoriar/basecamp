
const BaseLoder = ({ className }: { className?: React.ComponentProps<'div'>['className'] }) => {
  const randTime = Math.floor(Math.random() * 5) + 1;
  return (
    <div style={{ animationDuration: randTime + 's' }} className={` animate-pulse h-5 w-full bg-slate-500 ${className} `} />
  )
}

export default BaseLoder