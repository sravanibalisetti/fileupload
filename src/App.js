import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
 import Maincontent from './component/Maincontent'
import './App.css'; 
import Fileupload from './component/Fileupload';
import Sidebar from './component/Sidebar'
import {BrowserRouter,Route,Routes,Link}  from 'react-router-dom';
import  OpenAI from './component/OpenAI'
import AzureopenAI from './component/AzureopenAI';
import Navbar from './component/Navbar';
import Tab from './component/Tab';


function App() {
  return (
    <div className='app'>

<BrowserRouter>
<Header/>
<div style={{height:"100vh"}}><Sidebar/>
<div className='open'>
<div className="key" > 
Enter in your OpenAI or openAI Service key
</div>
<div className='open1'>
<p>Start by entering in your openAI key,either from <strong><Link to="OpenAI">OpenAI</Link> </strong> or  <strong><Link to="AzureopenAI Service">AzureopenAI Service</Link></strong> </p>
</div>
{/* <Navbar/> */}
<Tab/> 

<Routes> 
         <Route path="/OpenAI" element={<OpenAI />} /> 
        <Route path="/AzureopenAI" element={< AzureopenAI/>} />
      </Routes>
</div>
</div>
<Footer/>
</BrowserRouter>
{/* <Fileupload/> */}
           {/* <footer className="footer">
            <div className='foo'>
              <p> @ 2023 Miracle Software Systems, Inc.</p>
            </div>
</footer> */}

</div>
  )
}
export default App
