import React,{useState} from 'react'

const Array_case = () => {
    const [arr, setArr] = useState([1,2,3,4,5])
    const btnClick=()=>{
        const newArr = [...arr]
        newArr.push(6)
        setArr(newArr)
        console.log(newArr)
    }
  return (
    <div>
        <h1>{arr}</h1>
        <button onClick={btnClick}>update</button>
    </div>
  )
}

export default Array_case