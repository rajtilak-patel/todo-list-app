
import React from "react";

export const TodoInput = ({handleAddTodo }) => {
  const [text, setText] = React.useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAdd = () => {
    handleAddTodo(text);
    setText("");
  };

  return (
    <div className="inputboxdiv">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enter your todo"
      />
      <button onClick={handleAdd}>+</button>
    </div>
  );
};
