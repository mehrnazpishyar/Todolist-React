import React from "react";
import Select from 'react-select';

const options = [
  { value: 'All', label: 'All' },
  { value: 'Completed', label: 'Completed' },
  { value: 'Uncompleted', label: 'Uncompleted' },
];

const Navbar = ({ uncompletedTodo,onChange,selectedOption }) => {
  if (!uncompletedTodo) return <h2>set your today todos!</h2>;
  return (
    <header>
      <span>{uncompletedTodo}</span><h2>not completed</h2>
      <Select onChange={onChange} value={selectedOption} options={options}/>
    </header>
  );
};

export default Navbar;
