
import Todo from "./components/Todo"
import todos from "./data/todos.json"


function App() {

  return (
    <>
    <div className="w-3xl h-screen m-auto ">
    <div className=" justify-center items-center h-full">
      <div className=" mt-auto">

        <ul className="bg-white shadow overflow-hidden sm:rounded-md max-w-sm mx-auto mt-16">
 <h3 className="flex justify-center">Hello , Welcome Back !</h3>

    
     {
      todos.map((todo) =>(
        <Todo key={todo.id} status={todo.status} title={todo.title} periority={todo.periority} description={todo.decription}/>
      ))
     }
     </ul>
      </div>

   
     </div>
     </div>
    </>
  )
}

export default App
