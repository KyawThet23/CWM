import { useEffect, useRef } from "react"

const UseEffect = () => {

  const ref = useRef<HTMLInputElement>(null);

  // afterRender
  useEffect(() => {
    if (ref.current) ref.current.focus();
  })

  useEffect(() => {
    document.title = 'My App Hello' 
  })


  return (
    <div>
      <input ref={ref} type="text" className="form-control" />
    </div>
  )
}

export default UseEffect