import React, { useState,useEffect } from 'react'
import axios from 'axios'
const Fileupload=()=> {
 	 const [selectedFile, setSelectedFile] = useState();
     const[isSelected, setIsSelected]= useState(false);
     console.log(selectedFile);

     let data={
        files:selectedFile,
      question: "sravani"
    }

     useEffect(()=>{
        axios.post("https://openaiqnaapi.azurewebsites.net/upload-files",data).then((response) => {
          selectedFile(response.data)
          console.log(response)
        });
      },[])

 const handleFileUpload = (event) => {
    		setSelectedFile(event.target.files[0]);
            console.log(event.target.files[0])
    		setIsSelected(true);
    	};
//onsubmit:
    	const handleSubmit = () => {
         if(isSelected=== true){
            alert("File uploded");
         } else{
            alert("upload a file");
         }
    	};
  return (
 <div>
    <div className='file-card'>
        <div className='form-group' onSubmit={handleSubmit}>
		<input type="file" name="file"   onChange={handleFileUpload} accept=".pdf"  />
<br></br>
<br></br>
<div>
<button onClick={handleSubmit}>UPLOAD</button>
</div>
<div className='con'>
    <h4> Support PDF files only</h4>
</div>
</div>
    </div>
    {isSelected ? (
        <div>
            <h2>File Details</h2>
            <p>Filename: {selectedFile.name}</p>
            <p>Filetype: {selectedFile.type}</p>
            <p>Size in bytes: {selectedFile.size}</p>
            <p>
                lastModifiedDate:{' '}
                { selectedFile.lastModifiedDate.toLocaleDateString()}
            </p>
            </div>
    ) : (
        <h4>Selected a file to show details:</h4>
    )
    }
    </div>
  )
}
export default Fileupload