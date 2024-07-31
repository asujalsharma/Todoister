import React from 'react'
import './signup.css'
import Head from './headingcomp'
import axios from "axios"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authActions } from '../../store'

const Signin = () => {

    const dispatch = useDispatch();
    const history = useNavigate();
    const [Inputs, setInputs] = useState({
        email:"",
        password:"",
    })
    const change = (e) => {
        const {name,value} = e.target;
        setInputs({...Inputs, [name]: value})
    }
    const submit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:1000/api/v1/login",Inputs).then((response) => {
            if(response.data.message === "Sign up first"){
                alert(response.data.message);
                history("/signup");
            }

            if(response.data.message === "Wrong password"){
                alert(response.data.message);
                setInputs({
                    email:"",
                    password:"",
                })
            }

            if(response.data.message === "Login Successful"){
            sessionStorage.setItem("id",response.data.others._id);
            dispatch(authActions.login());
            history("/todo")
            }
        })
    }

  return (
    <div className='signup'>
        <div className='container'>
        <div className='row'>
            <div className='col-lg-7 d-flex justify-content-center align-items-center'>
                <div className='d-flex flex-column'>
                    <label className="form-label form-label-lg">Email</label>
                    <input
                        id='email'
                        className="form-control mb-3 my-3 mx-3 inp-signup"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        onChange={change}
                        value = {Inputs.email}
                    />
                    <label className="form-label form-label-lg">Password</label>
                    <input
                        id='password'
                        className="form-control my-3 mx-3 inp-signup"
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        onChange={change}
                        value = {Inputs.password}
                    />
                    <button className='btn-signup' onClick={submit}>Sign In</button>
                </div>
            </div>
                <Head first="Sign" second= "In"/>
            </div>
        </div>
    </div>
  )
}

export default Signin