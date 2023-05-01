import React from "react";

function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <div>
      <li>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />
          {title}
        </label>
        <button onClick={() => deleteTodo(id)} className="btn btn-danger">
          Delete
        </button>
      </li>
    </div>
  );
}

export default TodoItem;
