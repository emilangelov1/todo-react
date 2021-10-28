import { useState } from "react";
import "./App.css";
import AddInput from "./components/add-input.component";
import TodoItem from "./components/todo-item.component";

function App() {
  const [toDo, setToDo] = useState([]);

  function resetToDo() {
    setToDo([]);
  }

  function addToDo(newToDo) {
    const newState = [...toDo, newToDo];
    setToDo(newState);
    console.log(newState);
  }

  function removeToDo(i) {
    const newState = toDo.filter((singleToDo, index) => index !== i);
    setToDo(newState);
  }

  return (
    <div className="App">
      <h1>to-do app</h1>
      <AddInput onReset={resetToDo} onClick={addToDo}></AddInput>
      <ul>
        {toDo.map((singleToDo, index) => (
          <TodoItem
            text={singleToDo}
            onClick={() => removeToDo(index)}
          ></TodoItem>
        ))}
      </ul>
    </div>
  );
}

export default App;
