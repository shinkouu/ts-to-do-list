import React from "react"
import "./components.css"
import { Todo } from "./model";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function ToDolist({todos, setTodos}: Props) {
    return (
        <div className="todos">
            {todos.map(todo =>(
                <li>{todo.todo}</li>
            ))};
        </div>
    );
};