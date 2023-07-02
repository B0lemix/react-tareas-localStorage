import React, { useState } from "react";

const InputToDo = ({ todos, setTodos }) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputTitle.trim() !== "") {
      setTodos([
        ...todos,
        {
          id: Math.round(Math.random() * 200),
          title: inputTitle,
          desc: inputDescription,
        },
      ]);

      localStorage.setItem(
        "todos",
        JSON.stringify([
          ...todos,
          {
            id: Math.random(),
            title: inputTitle,
            desc: inputDescription,
          },
        ])
      );
      setInputTitle("");
      setInputDescription("");
    } else {
      alert("Inserte un título para crear la tarea");
    }
  };

  return (
    <div>
      <form className=" w-full h-36 flex flex-row  gap-4 justify-around items-center mx-4 ">
        <input
          className=" w-2/6 rounded-lg border border-gray-400 p-2 "
          type="text"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
          placeholder="Título"
        />
        <textarea
          className=" w-3/6 rounded-lg border border-gray-400 p-2"
          value={inputDescription}
          onChange={(e) => setInputDescription(e.target.value)}
          placeholder="Descripción"
        />

        <button
          className="ml-2 rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600  cursor-pointer "
          type="submit"
          onClick={handleSubmit}
        >
          Añadir Tarea
        </button>
      </form>
    </div>
  );
};

export default InputToDo;
