
import { useQuery } from "@tanstack/react-query"
import AddTodo from "./components/add-todo"
import TodoList from "./components/todo-list"

async function fetchTodos()  {
   setTimeout(()=>{},5000) 
 const responce  = await fetch("/todos.json")
 return await responce.json()
}
function useTodos() {
  return useQuery({ queryKey: ['todos'], queryFn: fetchTodos })
}
function App() {
  const {data , isLoading , isError } = useTodos()
 
  return (
    <>
    <div className="w-3xl h-screen m-auto ">
    <div className=" justify-center items-center h-full">
      <div className=" max-w-sm mx-auto mt-16">
<AddTodo/>
 {isLoading ? "loding ...." : <TodoList todos={data}/>}      


     
      </div>

   
     </div>
     </div>
    </>
  )
}

export default App
