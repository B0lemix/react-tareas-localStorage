import { useEffect, useState } from "react";

import "./App.css";
import InputToDo from "./components/InputToDo";
import ToDo from "./components/ToDo";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  return (
    <>
      <div className="bg-gray-200 w-full md:px-0 h-screen flex items-center justify-center">
        <div className="bg-[#F4F5FA] w-11/12 h-5/6 border border-gray-200  flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 rounded-xl shadow-2xl">
          <div className="flex flex-col justify-center items-center text-center">
            <div className="max-w-sm font-bold font-sans">
              <h1 className="p-4 ml-8 font-semibold text-5xl">Tareas</h1>
            </div>

            <InputToDo todos={todos} setTodos={setTodos} />
            <ToDo todos={todos} setTodos={setTodos} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
