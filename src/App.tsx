import { useState } from "react";
import "./App.css"
import InputField from "./components/InputField";
import { Todo } from "./components/model";
import ToDolist from "./components/toDolist";

export default function App() {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleAdd(event: React.FormEvent) {
    event.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false}])
      setTodo("");
    }
  }

  console.log(todos);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <ToDolist todos={todos} setTodos={setTodos} />
      {todos.map ((t) => (
        <li>{t.todo}</li>
      ))}
    </div>
  );
};