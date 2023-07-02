import { useEffect, useState } from "react";
import { pastelColors } from "./pastelColors.js";

const Card = ({ todo, handleDelete }) => {
  const [randomColor, setRandomColor] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * pastelColors.length);
    const color = pastelColors[randomIndex];
    setRandomColor(color);
  }, []);

  return (
    <div key={todo.id} className={`${randomColor} rounded-xl`}>
      <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
        <div className="mt-3 font-semibold text-lg">{todo.title}</div>
        <div className="my-4">
          <p className="font-light text-sm">{todo.desc}</p>
        </div>

        <button
          onClick={() => handleDelete(todo)}
          className="bg-[#F4F5FA] px-4 py-1 rounded-full  border border-[#F0F0F6] shadow-xl mt-4"
        >
          Eliminar tarea
        </button>
      </div>
    </div>
  );
};
export default Card;
