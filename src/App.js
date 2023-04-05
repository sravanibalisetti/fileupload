import React from 'react'
import Header from './component/Header'
import './App.css'; 
import Fileupload from './component/Fileupload';
function App() {
  return (
    <div className='app'>

<Header/>
<Fileupload/>
           <footer className="footer">
            <div className='foo'>
              <p> @ 2023 Miracle Software Systems, Inc.</p>
            </div>
</footer>
</div>
  )
}

export default App