import React from "react"
import "./components.css"
import { Todo } from "./model";
import SingleTodo from "./singleTodo";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function ToDoList({todos, setTodos}: Props) {
    return (
        <div className="todos">
            {todos.map((todo) =>(
                <SingleTodo 
                    todo={todo} 
                    key={todo.id} 
                    todos={todos} 
                    setTodos={setTodos}
                />
            ))}
        </div>
    );
};