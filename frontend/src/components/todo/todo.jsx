import React, { useEffect, useState } from 'react'
import './todo.css'
import Todocards from './todocards';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from './update';
import axios from 'axios';

    
let id = sessionStorage.getItem("id");
let toUpdateArray = [];


const Todo = () => {
    const [Inputs , setInputs] = useState({title:"", body:""});
    const [Array, setArray] = useState([]);
    const change = (e) => {
        const {name, value} = e.target;
        setInputs({...Inputs,[name]:value});
    };

    const update = (value)=>{
        toUpdateArray = Array[value] ;
    };
    
    

    const submit = async()=> {
        if (Inputs.title === "" && Inputs.body === ""){
            
        toast.error("Kuch to daal behen ke deene")

        }


        else{
            if(id){
                await axios.post("http://localhost:1000/api/v2/addtask",
                {title:Inputs.title,body:Inputs.body,id:id}).then((response)=>{
                    console.log(response);
                })
                setInputs({title:"", body:""})
                toast.success("Task added Successfuly")
            }
    }
    };

    const del = async(Cardid)=>{
        if (id) {
            await axios.delete(`http://localhost:1000/api/v2/deletetask/${Cardid}`,{data:{id:id}}).then((response)=>
                {
                    
                    toast.success("Task deleted Successfuly")
            })
            
        } else {
            toast.error("SignUP First...")
            
        }

        
    }

    const dis = (value)=>{
        document.getElementById("todo-update").style.display=value;
    };


    useEffect(() => {
        if (id) {
            const fetch = async () =>{
                await axios.get(`http://localhost:1000/api/v2/gettask/${id}`).then((response)=>{
                    setArray(response.data.list);
                })
           
            }
            
            fetch();
        } else {

            toast.error("SignUP First...")
            
        }
        
        
      
    }, [submit])

  return (
    <>
    <div className='todo'>
    <ToastContainer />
        <div className='todo-main container d-flex justify-content-center align-items-center flex-column'>
            <div className='d-flex flex-column w-50 todo-inputs'>

            <input 
            type='text' 
            placeholder='Title' 
            name='title'
            className='form-control-lg my-2 p-2'
            value={Inputs.title}
            onChange={change}
            />

            <textarea 
            type='text' 
            placeholder='Body' 
            name='body'
            className='form-control-lg my-2 p-2'
            value={Inputs.body}
            onChange={change}
            />
            
            </div>
            <button className='add-task-btn' onClick={submit}>Add Task</button>
       </div>
       <div className='todo-body'>
        <div className='container-fluid' >
            <div className='row'>
                {Array && Array.map((item, index)=><>
                <div className='col-lg-3 col-10 my-2 ' key={index}>
                    <Todocards 
                    title={item.title} 
                    body={item.body} 
                    id={item._id} 
                    delid={del} 
                    updateId = {index}
                    toBeUpdated={update} 
                    display={dis}/>
                    </div>
                </>)}
            </div>
        </div>
       </div>
    </div>
    <div className='todo-update ' id='todo-update'>
    <div className='container '>
        <Update display={dis} update = {toUpdateArray}/>
    </div>
    </div>
    </>
  )
}

export default Todo