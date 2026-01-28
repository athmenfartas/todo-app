


function Todo({key , status ,title , periority , description } : {key: number ,status : string, title : string , periority : string , description : string}) {
  return (
     




 <li key={key}>
        <div className="px-4 py-5 sm:px-6">
            <div className="flex items-center justify-between">
                <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">{description}</p>
            </div>
            <div className="mt-4 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-500">Status: <span className="text-green-600">{periority}</span></p>
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Edit</a>
            </div>
        </div>
    </li>



  )
}





export default Todo
