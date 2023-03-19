import React from "react";

const Navbar = ({ uncompletedTodo }) => {
  return (
    <header>
      {uncompletedTodo ? (
        <>
          <span>{uncompletedTodo}</span>
          <h2>are not completed</h2>
        </>
      ) : (
        <h2>set your today todos!</h2>
      )}
    </header>
  );
};

export default Navbar;
