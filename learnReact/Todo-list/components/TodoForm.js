import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        {props.edit ? (
          <>
            <input
              type="text"
              placeholder="add a todo"
              value={input}
              name="text"
              className="todo-input edit"
              onChange={handleChange}
            />

            <button className="todo-button edit">Update</button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="add a todo"
              value={input}
              name="text"
              className="todo-input"
              onChange={handleChange}
            />

            <button className="todo-button">Add todo</button>
          </>
        )}
      </form>
    </div>
  );
}

export default TodoForm;
