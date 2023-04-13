import React, { useState } from 'react';

function OpenAI() {
    const [key,setKey]=useState();
const [id,setId]=useState();
const [endpoint,setEndpoint]=useState();
  return (
    <div className=''>
        {/* <h4>hello</h4> */}
    <div className='head'>
        Azure OpenAI Key
        </div>
     <div className='fom'>
    <input type="text" name='key' value={key} placeholder="Enter Your AzureOpenAI Key here"  onChange={(e)=>setKey(e.target.value)} size="60" height="40px"/>
    </div>
    <div className='head1'>   
         Model
         </div>
     <div className='fom1'>
     <input type="text" name='id' value={id} placeholder="Enter Your deployment id here,ie:my-deployment"  onChange={(e)=>setId(e.target.value)} size="60"/> 
    </div> 
   <div className='head2'>
   Endpoint
   </div>
    <div className='fom2'>
    <input type="text" name='endpoint' value={endpoint} placeholder="Enter the end point here,ie:https://my-resource.openai.azure.com"  onChange={(e)=>setEndpoint(e.target.value)} size="60"/>
    </div>
   <div className='btn'>
   <button >save</button>
   </div>       
    </div>
  )
}

export default OpenAI