import React from 'react'

const Todo = ({todo,onComplete,onDelete}) => {
  return (
    <div>
          <div className='todo'>
          <div onClick={onComplete} className={todo.isCompleted ? "completed" : ""}>{todo.text}</div>
          <div>
            <button>Edit</button>
            <button onClick={onDelete} >Delete</button>
          </div>
        </div>
    </div>
  )
}

export default Todo