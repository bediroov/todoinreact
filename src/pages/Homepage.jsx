import React, { useState } from 'react'
import Todofield from '../components/Todofield';
import Todos from '../components/Todos';


const Homepage = () => {
  
   const [input,setinput]=useState("")
  const [todos, settodos] = useState([
    {
      id: 1,
      name: "Ulvi",
      status: false,
    },
    {
      id: 2,
      name: "Elgun",
      status: false,
    },
    {
      id: 3,
      name: "Penah",
      status: true,
    },
  ])



  const addtodo = (todo) => {
    if (todo.name ) {
      settodos([...todos,todo])
    }else{
      <h1>none</h1>
    }
  }




  return (
    <div>
      <div className="app">
        <h1 className='d-flex justify-content-center align-items-center' >Todo App</h1>
        <Todofield addtodo={addtodo} />
        <Todos todos={todos} />
      </div>
    </div>
  )
}

export default Homepage;