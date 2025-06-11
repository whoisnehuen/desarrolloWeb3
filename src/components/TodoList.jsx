import React, { useState } from "react";

const TodoList = () => {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const añadirTarea = () => {
    if (nuevaTarea.trim() !== "") {
      setTareas([...tareas, nuevaTarea]);
      setNuevaTarea("");
    }
  };

  const eliminarTarea = (index) => {
    const actualizarTarea = tareas.filter((_, i) => i !== index);
    setTareas(actualizarTarea);
  };

  return (
    <div style={{ maxWidth: "600px" }}>
      <h2>Lista de tareas</h2>

      <div className="input-group mb-4">
        <input
          type="text"
          placeholder="Añadir nueva tarea"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />
        <button onClick={añadirTarea}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="24" width="24">
        <path fill="#FFD43B" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
        </svg>
        </button>
      </div>

      <hr/>

      <ul className="list-group">
        {tareas.map((tarea, index) => (
          <li
            key={index}
          >
            {tarea}
            <button onClick={() => eliminarTarea(index)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24">
                <path fill="#FFD43B" d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;