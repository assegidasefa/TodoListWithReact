import React from 'react'
import Todo from "./Todo"

export default function TodoList({ todo, setTodo, filteredTodos}) {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todos)=>(
                    <Todo setTodo={setTodo} todo={todo} key={todos.id}todos={todos} text={todos.text}/>
                ))}
            </ul>

        </div>
    )
}
