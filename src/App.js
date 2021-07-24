import React, {useState,useEffect} from 'react';
import './App.css';
import Form from './Component/Form';
import TodoList from './Component/TodoList';

function App() {
  const [inputText,setInputText] =useState("")
  const [todo,setTodo] = useState([])
  const [status,setStatus] =useState("all")
  const [filteredTodos,setFilteredTodos]=useState([])
  const filterHandler=()=>{
    switch(status){
      case "completed":
        setFilteredTodos(todo.filter((todos)=>todos.completed===true))
        break
      case "uncompleted":
        setFilteredTodos(todo.filter((todos)=>todos.completed===false))
        break
        
      default:
        setFilteredTodos(todo)
        break  
    }
  }
  useEffect(() => {
    getLocalTodo()
  }, [])

  useEffect(() => {
   filterHandler()
   SaveLocalTodos()
  }, [todo,status])

  const SaveLocalTodos=()=>{
      localStorage.setItem('todo',JSON.stringify(todo))
  }
const getLocalTodo =()=>{
  if (localStorage.getItem('todo') === null) {

    localStorage.setItem('todo', JSON.stringify([]))
  } else {
    let todoLocal = JSON.parse(localStorage.getItem("todo"))
  setTodo(todoLocal)
  }
}

  return (
    <div className="App">
      <header>
        <h1>Add Todo List</h1>
      </header>
      <Form   setStatus={setStatus} todo={todo} setTodo={setTodo} inputText={inputText} setInputText={setInputText}/>
      <TodoList filteredTodos={filteredTodos} setTodo={setTodo} todo={todo}/>
    </div>
  );
}

export default App;
