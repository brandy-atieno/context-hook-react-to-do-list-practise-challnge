import React from 'react'
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoProvider from './provider/TodoProvider'

export const App = () => {
  return (
    <div className='App'>
      
      <div className='contents'>
      <TodoProvider>
      <TodoForm />
      <TodoList />
      </TodoProvider>
      </div>

     
    </div>
  )
}
export default App;
