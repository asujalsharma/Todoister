import React from 'react'
import './signup.css'
import Head from './headingcomp'
import axios from "axios"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

    const history = useNavigate();

    const [Inputs, setInputs] = useState({
        email:"",
        username:"",
        password:"",
    })
    const change = (e) => {
        const {name,value} = e.target;
        setInputs({...Inputs, [name]: value})
    }
    const submit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:1000/api/v1/register",Inputs).then((response) => {
            alert(response.data.message);
        })
        setInputs({
        email:"",
        username:"",
        password:"",})
        history("/signin")
    }
  return (
    
    <div className='signup'>
        <div className='container'>
        <div className='row'>
            <div className='col-lg-8 d-flex justify-content-center align-items-center'>
                <div className='d-flex flex-column'>
                    <label className="form-label form-label-lg" >Email</label>
                    <input
                        id='email'
                        className="form-control  mb-3 my-3 mx-3 inp-signup"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        onChange={change}
                        value = {Inputs.email}
                    />
                    <label className="form-label form-label-lg" >Username</label>
                    <input
                        id='username'
                        className="form-control  mb-3  my-3 mx-3 inp-signup"
                        type="text"
                        name="username"
                        placeholder="Enter username"
                        onChange={change}
                        value = {Inputs.username}
                    />
                    <label className="form-label form-label-lg" >Password</label>
                    <input
                        id='password'
                        className="form-control my-3 mx-3 inp-signup"
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        onChange={change}
                        value = {Inputs.password}
                    />
                    <button className='btn-signup' onClick={submit}>Sign Up</button>
                </div>
            </div>
                <Head first="Sign" second= "Up"/>
            </div>
        </div>
    </div> 
  )
}

export default Signup