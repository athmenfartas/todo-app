import Todo from './Todo'

function TodoList({todos }:{todos:any}) {
  return (
    <div>
       <ul className="bg-white shadow overflow-hidden sm:rounded-md space-y-1 ">
 <h3 className="flex justify-center">Here is your Tasks list!</h3>

    
     {
      todos.map((todo) =>(
        <Todo key={todo.id} done={todo.done} title={todo.title} periority={todo.priority} description={todo.decription}/>
      ))
     }
     </ul>
    </div>
  )
}

export default TodoList
