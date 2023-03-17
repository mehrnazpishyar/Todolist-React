import React, { useEffect, useRef, useState } from "react";

const TodoForm = ({ submitTodo, edit }) => {
  const [input, setInput] = useState(edit? edit.text:"");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const changeHandler = (e) => {
    // console.log(e.target.value)
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert("enter todo");
      return;
    }
    submitTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={input}
        onChange={changeHandler}
        placeholder={edit ? "update value ... " : "add new todo ..."}
        ref={inputRef}
      />
      <button type="submit">{edit ? "Update" : "Add"}</button>
    </form>
  );
};

export default TodoForm;
