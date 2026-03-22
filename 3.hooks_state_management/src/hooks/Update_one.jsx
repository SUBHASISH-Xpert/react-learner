import React,{useState} from 'react'

const Update_one = () => {
    const [num, setNum] = useState({user:"Rishi",age:17})
    const btnClick = () => {
        setNum(prev=>({...prev,age:50}))
    }

  return (
    <div>
        <h1>{num.user}, Age: {num.age}</h1>
        <button onClick={btnClick}>Update</button>

    </div>
  )
}

export default Update_one