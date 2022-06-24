import { useTodoContext } from "../provider/TodoProvider"
export const TodoList = () => {
  const {todoList,removeTodo}=useTodoContext();
 console.log(todoList)
  return (
    <ul  className="todos">
       {todoList.map((todo, index) => (
        <li key={index} >{todo}<button  onClick={()=>removeTodo(index)}>Delete</button>
       </li>
       )
       )}
     
    </ul>
  )
}
export default TodoList
