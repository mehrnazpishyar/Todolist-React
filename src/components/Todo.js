import React from 'react'

const Todo = ({todo,onComplete}) => {
  return (
    <div>
          <div className='todo'>
          <div>{todo.text}</div>
          <div>
            <button>Edit</button>
            <button onClick={onComplete}>Complete</button>
          </div>
        </div>
    </div>
  )
}

export default Todo