import React,{useState} from 'react'

const User_age = () => {
    const [num, setNum] = useState({user:"rohit sharma", age: 19})
    const btnClick = () => {
        const newNum = {...num}
        newNum.user = "nandu"
        newNum.age = num.age + 1
        setNum(newNum)
        console.log(newNum)
        // setNum({...num, age: num.age + 1})
    }
  return (
    <div>
        <h1>{num.user}, Age: {num.age}</h1>
        <button onClick={btnClick}>change</button>
    </div>
  )
}

export default User_age