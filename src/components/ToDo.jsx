import React, { useState } from "react";
import Card from "./Card";

const ToDo = ({ todos, setTodos }) => {
  const handleDelete = (e) => {
    const newTodos = todos.filter((todo) => todo.id !== e.id);
    localStorage.setItem("todos", JSON.stringify(newTodos));

    setTodos(newTodos);
  };

  const handleDeleteAll = () => {
    localStorage.setItem("todos", JSON.stringify([]));
    setTodos([]);
  };

  return (
    <div>
      <ul className="grid grid-flow-row grid-cols-4 gap-24 p-8">
        {todos.map((todo) => (
          <Card key={todo.id} handleDelete={handleDelete} todo={todo} />
        ))}
      </ul>

      {todos.length > 0 && (
        <div className="flex justify-center">
          <button
            onClick={handleDeleteAll}
            className="mt-12 bg-slate-900 text-white px-4 rounded-full py-3"
          >
            Borrar todas las tareas
          </button>
        </div>
      )}
    </div>
  );
};

export default ToDo;
