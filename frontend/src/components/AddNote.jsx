import React, { useState ,useEffect} from 'react'
import {getTask, getTaskDelete} from './API/getTaskApi'

import { MdDelete ,MdOutlineAccessTimeFilled} from "react-icons/md";

const AddNote = () => {
  const [allNote,setAllNotes]=useState([]);
  const [deleteNote,setdeleteNote]=useState(0);
  const[note,setNote]=useState({
    title:'',
    des:'',
  })
  const click=(e)=>{
    e.preventDefault();
    fetch('http://localhost:5000/api/v1/create',{
            method: "POST",
            body: JSON.stringify({
                title:note.title,
                des:note.des,
                user:localStorage.getItem('userId')
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response=>response.json())
        .then(res=>{
           console.log(res.data);
          setAllNotes(allNote.concat(res.data))})            
  }
  useEffect(()=>{
    let c=localStorage.getItem('userId')
    fetch(`http://localhost:5000/api/v1/getall?user=${c}`)
    .then(data=>data.json())
    .then(json=>{
      setAllNotes(json.data)
    })
  } ,[]);

  const onchange=(e)=>{
     setNote({...note,[e.target.name]:e.target.value});
  }


  const deleteButton=(e)=>{
       const id=e.target.value;
       getTaskDelete(id)
       .then(data=>data.json())
       .then(response=>{
        const id=response.data._id;
       const dltItem= allNote.filter(val=>{
          return val._id!==id
        })
        setAllNotes(dltItem)
       })
      console.log('bhai dlt');
  }
  return (
    
    <div className='container'>
        <form onSubmit={click}>

  <div className="form-group my-3 py-2">
  <label htmlFor="text" className='my-1'><h5>Title</h5> </label> 
      <input type="text" className="form-control" id="title"
        name='title' onChange={onchange} placeholder="add title"/>
  </div>

    <div className="form-group my-2">
    <label htmlFor="text " className='my-1'><h5>Description</h5> </label> 
      <input type="text" className="form-control" id="des"
        name='des' onChange={onchange} placeholder="add desc"/>
   </div>
    <div className='my-4'>
      <button type="submit" className="btn btn-danger">Add Notes</button>
    </div>
  
</form>

<div class="container my-2">
<h2>All Notes</h2>
<div class="row">
{allNote.map(val=>{
     return  <div className=' col-4 my-3'>
    <div className="card"  >
    
<div className="card-body">
  <div className=""> 
  </div>
  <div className="card-body">
  <h3 className="card-title">{val.title}</h3>
    <p>{val.des}</p>
    <h6>Date: {val.date.substring(0,10)}</h6>
    <p><MdOutlineAccessTimeFilled />{val.date.substring(11,val.date.length)}</p>
    <button  type='submit' value={val._id} onClick={deleteButton} className="btn btn-danger"><MdDelete />nknkk</button>
   {/* <button type='submit' value={val._id}onClick={deleteButton}></button>  */}
  </div>
</div>
</div>
  </div>
  })}
  
</div>
</div>
</div>
  )
}

export default AddNote
