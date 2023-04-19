import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Popup from './component/Popup'
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
OpenAI Service key
</div>
<div className='open1'>
<p>Start by entering OpenAI Key </p>
</div>
{/* <Navbar/> */}

{/* 
<Routes> 
         <Route path="/OpenAI" element={<OpenAI />} /> 
        <Route path="/AzureopenAI" element={< AzureopenAI/>} />
      </Routes> */}

      <Tab/> 
   
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
