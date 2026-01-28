
import AddTodo from "./components/add-todo"
import TodoList from "./components/todo-list"
import todos from "./data/todos.json"


function App() {

  return (
    <>
    <div className="w-3xl h-screen m-auto ">
    <div className=" justify-center items-center h-full">
      <div className=" max-w-sm mx-auto mt-16">
<AddTodo/>
       
<TodoList todos={todos}/>

     
      </div>

   
     </div>
     </div>
    </>
  )
}

export default App
