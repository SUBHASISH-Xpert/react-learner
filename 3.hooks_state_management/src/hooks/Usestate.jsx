import React,{useState} from 'react'

const UseState = () => {
    const [a, setA] = useState(0)
    const [username, setUsername] = useState("subhasish")
    function changeA(){
        setA(30)
        setUsername("welcom back")
    }
  return (
    <div>
        <h1>value of a is {a} <br /> username is {username} </h1>

      <button onClick={changeA}>click</button>
    </div>
  )
}

export default UseState