import React from 'react'

const Todos = ({todos}) => {
  return (

 <>
  {
    todos.length>0?  <ul className='todoapp'>
   {
    todos.map((todo)=>{
      return(
      <li key={todo.id} className='todolist'>
      <span className= {todo.status ? "writingdone " : 'writing'}>{todo.name}</span>
      <div className="buttons">
        <button  href="#">❌</button>
        <button disabled={todo.status} href="#">✅</button>
      </div>
    </li>)
    })
   }

  

   </ul>:null
  }


 </>

  )
}

export default Todos