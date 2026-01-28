
import todos from "./data/todos.json"


function App() {

  return (
    <>
    <h3 className="">Hello , Welcome Back !</h3>
    
     {
      todos.todos.map((todo) =>(
        <div key={todo.id}>
          <h3>{todo.title}</h3>
          <p>{todo.decription}</p>
          <p>{todo.periority}</p>
        </div>
      ))
     }
    </>
  )
}

export default App
