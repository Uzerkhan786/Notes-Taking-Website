import React, { useEffect, useState } from 'react'

const GetNotes = () => {
  const notes=[{name:'uzer',sub:'maths'}]
  const [allNote,setAllNotes]=useState([]);

//   const allNotes=async()=>{
//     const response=await fetch('http://localhost:5000/api/v1/getall')
//   const json=await response.json();
//   setAllNotes(json.data);
//  console.log(allNote);
//   }
 
 
  useEffect(()=>{
    fetch('https://notetaking-iu1x.onrender.com/api/v1/getall')
    .then(data=>data.json())
    .then(json=>{
      setAllNotes(json.data);
      console.log(allNote);
    })
  } ,[]);
  return (
    
      <div class="container">
  <div class="row">
  {allNote.map(val=>{
       return  <div className=' col-4 my-3'>
      <div className="card"  >
      
  <div className="card-body">
    <div className="d-flex align-items-center"> 
    </div>
    <div className="card-body">
    <h5 className="card-title">{val.title}</h5>
      <p>{val.des}</p>
    </div>
  </div>
</div>
    </div>
    })}
    
  </div>
</div>
       
  
  )
}

export default GetNotes
