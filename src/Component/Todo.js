import React from 'react'

export default function Todo({text,todos,todo,setTodo}) {
const deleteHandler = ()=>{
    setTodo(todo.filter((el)=>el.id!==todos.id))
}

const completeHandler=()=>{
     setTodo(todo.map((item)=>{
         if(item.id===todos.id){
             return{
                 ...item,completed:!item.completed
             }
         }
             return item
        
         
     }))
}
 
    return (
        <div className="todo">
            <li className={`todo-item ${todos.completed?"completed":""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}
