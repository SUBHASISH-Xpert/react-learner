import React,{useState} from 'react'

const Increase_decrease = () => {
    const [a, setA] = useState(0)
    function increase(){
        setA(a+1)
    }
    function decrease(){
        setA(a-1)
    }
   
  return (
    <div>
         <h1>value of a is {a}</h1>
         <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
            <button onClick={()=>setA(0)}>reset</button>
    </div>
  )
}

export default Increase_decrease