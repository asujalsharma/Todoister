import React from 'react'
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import Footer from './components/footer/footer'
import Signup from './components/signup/Signup'
import Signin from './components/signup/Signin'
import Todo from './components/todo/todo'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from './store'


const App = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    const id = sessionStorage.getItem("id");
    if(id){
      dispatch(authActions.login());
    }
  })
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element= {<Home />} />
        <Route path='/Signup' element= {<Signup />} />
         <Route path='/Signin' element= {<Signin />} />
        <Route path='/todo' element= {<Todo />} />
      </Routes>
    </Router>
      <Footer />
    </div>
  )
}

export default App