import { useState } from "react"



function Todo({key , done ,title , periority , description } : {key: number ,done : boolean, title : string , periority : string , description : string}) {
  const [checked , setChecked] = useState(done)

  const handleClick = ()=>{
    setChecked(prevCheck => !prevCheck)
  }
  return (
     

 <li key={key}>
        <div className="px-4 py-5 sm:px-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-center space-x-0.5">
                  
                <input id={`checkbox-${key}`} className=" w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium " type="checkbox" checked={checked} onClick={handleClick}/>
                <label htmlFor={`checkbox-${key}`} className={  `select-none ms-2 text-lg font-medium text-heading ${checked ? " line-through" : ""}`}>{title}</label>
                
                </div>
                <p className=" max-w-2xl text-sm text-gray-500">{description}</p>
            </div>
            <div className="mt-4 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-500">Periority: <span className="text-red-600">{periority}</span></p>
                <div className=" space-x-1.5">
<button type="button" className="text-white bg-blue-600 box-border border border-transparent hover:bg-brand-strong  shadow-xs font-medium leading-5 rounded-full text-sm px-3 py-2 ">Edit</button>
<button type="button" className="text-white bg-red-600 box-border border border-transparent hover:bg-danger-strong  shadow-xs font-medium leading-5 rounded-full text-sm px-3 py-2 ">Delete</button>
                </div>
            </div>
        </div>
    </li>



  )
}





export default Todo
