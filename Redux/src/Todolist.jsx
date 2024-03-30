import React, { useRef, useState } from 'react'
import { addtodo, removetodo, editTodo, updateTodo } from './Todoslice'
import { useDispatch, useSelector } from 'react-redux'
import { MdDelete } from "react-icons/md"
import { CiEdit } from "react-icons/ci";
import { GrUpdate } from "react-icons/gr";

function Todolist() {
  const todos = useSelector((state) => state.todo.list)
  const dispatch = useDispatch()
  const [value, setValue] = useState("")
  const editting = useRef(null)
  const submitted = (e) => {
    e.preventDefault()
    if (value) {
      dispatch(addtodo({ title: value }))
    }
  }
  
  const updateHandle = (Id) => {
    if (editting.current.value.length > 0) {
      dispatch(updateTodo({ id: Id, title: editting.current.value }))
    }
  }

  return (
    <>
      <div style={{ textAlign: "center", background: 'linear-gradient(to right, #9290C3, #944E63)', width: '400px' }}>
        <form onSubmit={submitted}>
          <label style={{ color: "white" }}>Add a task</label><br />
          <input type="text"
            placeholder='Add your task'
            value={value}
            onChange={(e) => setValue(e.target.value)} />
          <button type='submit' style={{ backgroundColor: "#12372A", color: "white" }}>ADD</button>
        </form>
      </div>
      <div style={{ backgroundColor: "white", textAlign: "center", width: '400px',}}>
        <ul>
          {todos.map((item) => (
            <div key={item.id}>
              {item.edit ? (
                <>
                  <input
                    type="text"
                    defaultValue={item.title}
                    ref={editting}
                    style={{ width: "250px" }}
                  />
                  <div>
                    <GrUpdate onClick={() => updateHandle(item.id)} style={{ width: "50px", height: "25px", padding: "5px" }} />
                  </div>
                </>
              ) : (
                <>
                  <h3 className='m-0' style={{ overflow: 'hidden' }}>{item.title}</h3>
                  <div className='edit-div'>
                    <CiEdit style={{ width: "50px", height: "25px" }} onClick={() => dispatch(editTodo(item.id))} />
                    <MdDelete style={{ width: "50px", height: "25px" }} onClick={() => dispatch(removetodo(item.id))} />
                  </div>
                </>
              )}
            </div>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Todolist
