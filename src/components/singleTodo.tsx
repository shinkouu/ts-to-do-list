import React, { useState } from "react";
import { Todo } from "./model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./components.css";
import ToDolist from "./toDoList";

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export default function SingleTodo({todo, todos, setTodos}: Props ) {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
    
    function handleDone(id: number) {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };

    function handleDelete(id: number) {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    
    return (
        <form className="todos__single">
            {todo.isDone ? (
                <s className="todos__single--text">
                    {todo.todo}
                </s>
            ) : (
                <span className="todos__single--text">
                    {todo.todo}
                </span>
            )}


            <div>
                <span className="icon" onClick={() => handleDone}>
                    <AiFillEdit />
                </span>
                <span className="icon" onClick={() => handleDelete(todo.id)}>
                    <AiFillDelete />
                </span>
                <span className="icon" onClick={() => handleDone(todo.id)}>
                    <MdDone />
                </span>
            </div>
        </form>
    );
};
