import React, { useState, useEffect } from 'react'
import { Tabs } from 'antd';
import {Dropdown} from 'react-bootstrap';  
import axios from 'axios'
import "../App.css"
const { TabPane } = Tabs;
function Tab() {
  const [key, setKey] = useState();
  const [id, setId] = useState();
  const [endpoint, setEndpoint] = useState();
  const [type,setType]=useState();
  const [version,setVersion]=useState();
  const [selectedOption, setSelectedOption] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [question,setQuestion]=useState('');
  const handleOptionChange = (event) => {
  setSelectedOption(event.target.value);
  };
  let data={
    keys:key,
  question: "sravani"
}
  const handleButtonClick = () => {
    setShowPopup(true);
  };
  const handleCloseClick = () => {
    setShowPopup(false);
  };
  useEffect(()=>{
    axios.post("https://openaiqnaapi.azurewebsites.net/upload-files",data).then((response) => {
      key(response.data)
      console.log(response)
    });
  },[])
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="OpenAI" >
        <div className='head'>
          Azure OpenAI Key
        </div>
        <div className='fom'>
          <input type="text" name='key' value={key} placeholder="Enter Your AzureOpenAI Key here" onChange={(e) => setKey(e.target.value)} size="60" height="40px" />
        </div>
        <div className='head'>
          Model
        </div>
        <div className='fom1'>
          <input type="text" name='id' value={id} placeholder="Enter Your deployment id here,ie:my-deployment" onChange={(e) => setId(e.target.value)} size="60" />
        </div>
        <div className='head'>
          Endpoint
        </div>
        <div className='fom2'>
          <input type="text" name='endpoint' value={endpoint} placeholder="Enter the end point here,ie:https://my-resource.openai.azure.com" onChange={(e) => setEndpoint(e.target.value)} size="60" />
        </div>
        <div className='head1'>
          Version
        <div className='fom2'>
          <input type="text" name='version' value={version} placeholder="Enter the version" onChange={(e) => setVersion(e.target.value)} size="60" />
        </div>
        </div>
        <div className='head2'>
          Type
        <div className='fom2'>
          <input type="text" name='type' value={type} placeholder="Enter the type" onChange={(e) => setType(e.target.value)} size="60" />
        </div>
        </div>
        <div className='drop'>
        <label htmlFor="dropdown"><strong>Project Id:</strong></label>
      <select id="dropdown" value={selectedOption} onChange={handleOptionChange}>
        <option value="New Project">New Project</option>
      </select>
      </div>
        <div className='btn'>
        <button onClick={handleButtonClick}>Save</button>
        <div className='file-card'>
        {showPopup && (
        <div className="popup">
          <div className="popup-content">
             <h2>Question and Answering form</h2>
          <input type="text" name='question' value={question} placeholder="Enter the question" onChange={(e) => setQuestion(e.target.value)} size="30" />        
            <p>Popup content goes here.</p>
            <button onClick={handleCloseClick}>Close Popup</button>
          </div>
        </div>
      )}
      </div>
      </div>
          {/* <button >Save</button> */}
      </TabPane>
      <TabPane tab="Azure Open AI" key="2">
        <div className='head'>
          Azure OpenAI Key
        </div>
        <div className='fom'>
          <input type="text" name='key' value={key} placeholder="Enter Your AzureOpenAI Key here" onChange={(e) => setKey(e.target.value)} size="60" height="40px" />
        </div>
        <div className='head'>
          Model
        </div>
        <div className='fom1'>
          <input type="text" name='id' value={id} placeholder="Enter Your deployment id here,ie:my-deployment" onChange={(e) => setId(e.target.value)} size="60" />
        </div>
        <div className='head'>
          Endpoint
        </div>
        <div className='fom2'>
          <input type="text" name='endpoint' value={endpoint} placeholder="Enter the end point here,ie:https://my-resource.openai.azure.com" onChange={(e) => setEndpoint(e.target.value)} size="60" />
        </div>
        <div className='head1'>
          Version
        <div className='fom2'>
          <input type="text" name='version' value={version} placeholder="Enter the version" onChange={(e) => setVersion(e.target.value)} size="60" />
        </div>
        </div>
        <div className='head2'>
          Type
        <div className='fom2'>
          <input type="text" name='type' value={type} placeholder="Enter the type" onChange={(e) => setType(e.target.value)} size="60" />
        </div>
        </div>
        <div className='drop'>
        <label htmlFor="dropdown"><strong>Project Id:</strong></label>
      <select id="dropdown" value={selectedOption} onChange={handleOptionChange}>
        <option value="New Project">New Project</option>
      </select>
      </div>
      <div className='btn'>
        <button onClick={handleButtonClick}>Save</button>
        <div className='file-card'>
        {showPopup && (
        <div className="popup">
          <div className="popup-content">
          <h2>Question and Answering form</h2>
          <input type="text" name='question' value={question} placeholder="Enter the question" onChange={(e) => setQuestion(e.target.value)} size="30" />
           
            <p>content goes here.</p>
            <button onClick={handleCloseClick}>Close Popup</button>
          </div>
        </div>
      )}
      </div>
      </div>
      </TabPane>
    </Tabs>
  )
}
export default Tab
