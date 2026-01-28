import React from 'react'



function Todo({status ,title , periority } : {status : string, title : string , periority : string}) {
  return (
    <div>
      <h1>{status}</h1>
      <h1>{periority}</h1>
      <h1>{title}</h1>

    </div>
  )
}

export default Todo
