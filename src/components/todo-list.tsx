import Todo from './Todo'

function TodoList({todos }:{todos:any}) {
  return (
    <div>
       <ul className="bg-white shadow overflow-hidden sm:rounded-md ">
 <h3 className="flex justify-center">Here is your Tasks list!</h3>

    
     {
      todos.map((todo) =>(
        <Todo key={todo.id} done={todo.done} title={todo.title} periority={todo.periority} description={todo.decription}/>
      ))
     }
     </ul>
    </div>
  )
}

export default TodoList
