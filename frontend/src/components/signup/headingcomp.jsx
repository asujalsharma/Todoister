import React from 'react'

const headingcomp = ({first,second}) => {
  return (
    <div className='col-lg-4 col-left d-flex justify-content-center align-items-center coloumn'> 
        <h1 className='text-center sign-up-heading'><b> {first}<br />{second}</b></h1>
    </div>
  )
}

export default headingcomp