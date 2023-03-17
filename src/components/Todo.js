import React from 'react'

const Todo = ({todo,onComplete,onDelete,onEdit}) => {
  return (
    <div>
          <div className='todo'>
          <div onClick={onComplete} className={todo.isCompleted ? "completed" : ""}>{todo.text}</div>
          <div>
            <button onClick={onEdit} className="button">Edit</button>
            <button onClick={onDelete} className="button remove" >Delete</button>
          </div>
        </div>
    </div>
  )
}

export default Todo