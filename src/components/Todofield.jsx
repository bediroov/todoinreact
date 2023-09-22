import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
const Todofield = ({ addtodo }) => {


  let [value, setvalue] = useState("")



  return (

    <>



      <div className="todo">
        <input value={value} onChange={(e) => setvalue(e.target.value)} type="text" />

        <Button onClick={() => addtodo({
          name: value,
          id: uuidv4(),
          status: true


        })} variant='btn btn-warning'>Add</Button>


      </div>

    </>
  )



}

export default Todofield