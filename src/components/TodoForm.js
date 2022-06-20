import React,{useState} from 'react'
import{useTodoContext} from"../provider/TodoProvider"

export const TodoForm = () => {
  const {getNumberOfTodoItems,addTodo}=useTodoContext()
  const[todoItem, setTodoItem]=useState("")
  const handleSubmit=(e)=>
  { e.preventDefault();
    if(!todoItem){
      return;
    }
    addTodo(todoItem)
    setTodoItem("")
    
  }
  return (
    <>
    <header>
        TodoList
      </header>
   <form  className='' onSubmit={handleSubmit}>
     <h1>Number of todo items: {getNumberOfTodoItems()}</h1>
     <input type="text"  value={todoItem} onChange={(e) => setTodoItem(e.target.value)}/>
     <button type="submit">Submit</button>
   </form>
   </>
  )
}
export default TodoForm