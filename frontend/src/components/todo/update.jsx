import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Update = ({display, update}) => {
  useEffect(() => {
    setInputs({
      title : update.title,
      body : update.body
    })
  }, [update])
  
  const [Inputs, setInputs] = useState(
    {
      title : update.title,
      body : update.body
    }
  );
  const change = (e)=>{
    const {name,value} = e.target;
    setInputs({...Inputs,[name]:value})

  }

  const submit = async()=>{
              await axios.put(`http://localhost:1000/api/v2/updatetask/${update._id}`,
              Inputs).then((response)=>{
                  console.log(response);
              })
              display("none")
              toast.success("Task updated Successfuly")
          
  }

  return (
    <div className='p-5 d-flex justify-content-center align-items-center flex-column '>
    
    <ToastContainer />
    <h2>Update your task </h2>
    <br />
    <input type='text' 
    className='todo-inputs form-control-lg w-50'
    placeholder='Title'
    name = 'title'
    value = {Inputs.title}
    onChange={change}
    />
    <textarea 
    className='todo-inputs form-control-lg w-50 my-2'
    placeholder='Body'
    name = 'body'
    value={Inputs.body}
    onChange={change}
    />
    <div>
    <button className='btn btn-dark mx-4 my-4' onClick={submit}> Update</button>
    <button className='btn btn-danger my-4' onClick={()=>{display("none")}}> Close</button>
    </div>
    </div>
  )
}

export default Update