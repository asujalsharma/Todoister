import React from 'react'
import './todo.css'
import { MdDelete } from "react-icons/md";
import { GrDocumentUpdate} from "react-icons/gr";


const todocards = ({title,body,id,delid,display,updateId,toBeUpdated}) => {


  return (
    <div className='p-3 todo-card'>
        <div>
            <h5> {title}</h5>
            <p className='todo-card-p'>
                {body.split("",77)}...
            </p>
        </div>
        <div className='d-flex justify-content-end align-items-end flex-column '>
          <div className='p-1 d-flex justify-content-center align-items-center card-icons-head' 
          onClick={()=>{display("block")
          toBeUpdated(updateId)
          }}>
            <GrDocumentUpdate className='card-icons'/> Update
          </div>
          <div className='p-1 d-flex justify-content-center align-items-center card-icons-head' 
          onClick={()=>{
            delid(id)
          }}>
            <MdDelete className='card-icons del'/> Delete
          </div>
        </div>
    </div>
  )
}

export default todocards