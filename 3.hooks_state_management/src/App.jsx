import React from 'react'
import UseState from './hooks/UseState'
import Increase_decrease from './hooks/increase_decrease'
import User_age from './hooks/User_age'
import Array_case from './hooks/Array_case'
import Update_one from './hooks/Update_one'

const App = () => {
  return (
    <div>
      <UseState />
      <Increase_decrease />
      <User_age />
      <Array_case />
      <Update_one />
    </div>
  )
}

export default App