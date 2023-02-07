import { useEffect, useState } from 'react'

const Counter = () => {

    const [counter, setCounter] = useState(0)

    useEffect(()=>{
        setCounter(50)
    },[])

  return (
    <div>
        <h1>Counter: {counter}</h1>
        <button onClick={()=> setCounter(counter + 1)}>Counter up</button>
        <button onClick={()=> setCounter(counter - 1)}>Counter down</button>
    </div>
  )
}

export default Counter