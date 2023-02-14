export const TodoList = ({ todos, handleToggle, handleDelete }) => {
    return (
      <div>
        {todos.map((todo) => (
          <div key={todo.id} className="tododiv">
            <p>
              {todo.title}
              <span>{todo.status ? "Completed" : "Not Completed"}</span>
            </p>
            <img
              src={
                todo.status
                  ? "https://upload.wikimedia.org/wikipedia/commons/b/b0/Icon_Transparent_Green.png"
                  : "https://www.pngall.com/wp-content/uploads/13/Red-Button-PNG.png"
              }
              alt="logo"
              onClick={() => handleToggle(todo)}
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/3439/3439691.png"
              alt="bin"
              onClick={() => handleDelete(todo.id)}
            />
          </div>
        ))}
      </div>
    );
  };
  