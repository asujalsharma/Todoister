import React from 'react'
import "./home.css"
const Home = () => {
  return (
    <div className='home d-flex justify-content-center align-items-center'>
        <div className='container heading d-flex flex-column justify-content-center align-items-center' >
            <h2> Organize your <br /> work and life, Finally</h2>
            <br />
            <br />
            <button className='home-btn p-3'>  Make Todo List  </button>
        </div>
    </div>

  )
}

export default Home