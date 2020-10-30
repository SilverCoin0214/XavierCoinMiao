/** @jsx MyReact.createElement */
function TodoForm(props) {
  const [input, setInput] = MyReact.useState("");

  const handleChange = (e) => {
    setInput((state) => (state = e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // props.onSubmit({
    //     id: Math.floor(Math.random() * 10000),
    //     text: input
    // });

    setInput((state) => (state = ""));
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
      />
      <button className="todo-button">Add todo</button>
    </form>
  );
}
