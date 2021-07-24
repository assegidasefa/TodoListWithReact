import React from 'react'

export default function Form({ inputText,setInputText,setTodo,todo,setStatus}) {
    const inPutHandler=(e)=>{
        console.log(e.target.value)
        setInputText(e.target.value)
    }
    const submitTodoHandler=(e)=>{
        e.preventDefault()
        setTodo([...todo, { text: inputText,completed:false,id:Math.random()*1000}])
        setInputText("")
    }

    const statusHandeler=(e)=>{
        // console.log(e.target.value)
        setStatus(e.target.value)
    }
    return (
        <div>
            <form>
                <input value={inputText} onChange={inPutHandler} type="text" className="todo-input" />
                <button onClick={submitTodoHandler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select onChange={statusHandeler} name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>


        </div>
    )
}
