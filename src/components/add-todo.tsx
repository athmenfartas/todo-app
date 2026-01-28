
function AddTodo() {
  return (
   
    <div className="relative flex flex-col rounded-xl bg-transparent">
  <h4 className="block text-xl font-medium text-slate-800">
    Add Task
  </h4>
  <p className="text-slate-500 font-light">
    Fill Your Task Informations
  </p>
  <form className="mt-2 mb-2 w-80 max-w-5xl sm:w-96">
    <div className="mb-1 flex flex-col gap-6">
      <div className="w-full max-w-sm min-w-50">
        <label className="block mb-2 text-sm text-slate-600">
          Task Title
        </label>
        <input type="text" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Task Title" />
      </div>
      <div className="w-full max-w-sm min-w-50">
        <label className="block mb-2 text-sm text-slate-600">
          Task Description
        </label>
        <input type="email" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Task Description" />
      </div>
      <div className="w-full max-w-sm min-w-50">
  <label className="block mb-2 text-sm text-slate-600">
    Priority
  </label>
  <select
    className="w-full bg-transparent text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
    defaultValue=""
  >
    <option value="" disabled>
      Select priority
    </option>
    <option value="high">High</option>
    <option value="medium">Medium</option>
    <option value="low">Low</option>
  </select>
</div>

      
    </div>
   
    <button className="mt-4 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Add Task
    </button>
   
  </form>
</div>
  )
}

export default AddTodo
