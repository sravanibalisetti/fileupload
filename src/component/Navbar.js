import React from 'react';
import{Link} from 'react-router-dom';
function Navbar() {
  return (
    <div >
        <ul>
            <div className='lin'>
            <Link to="OpenAI">OpenAI</Link> 
            </div>
            <div className='lin1'> 
             <Link to="AzureopenAI">AzureopenAI</Link>  
            </div>
               
           
        </ul>

    </div>
  )
}

export default Navbar