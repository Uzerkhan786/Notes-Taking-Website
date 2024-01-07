import React, { useState ,useEffect} from 'react'
import {getTask, getTaskDelete} from './API/getTaskApi'

const AddNote = () => {
  const [allNote,setAllNotes]=useState([]);
  const [deleteNote,setdeleteNote]=useState(0);
  const[note,setNote]=useState({
    title:'',
    des:'',
  })
  const click=(e)=>{
    e.preventDefault();
    fetch('https://notetaking-iu1x.onrender.com/api/v1/create',{
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
    console.log(c);
    fetch(`https://notetaking-iu1x.onrender.com/api/v1/getall?user=${c}`)
    .then(data=>data.json())
    .then(json=>{
      setAllNotes(json.data);
      console.log(allNote);
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
  <label htmlFor="text" className='my-1'><h5><i class="fa-regular fa-pen-to-square"></i> Title</h5> </label> 
      <input type="text" className="form-control" id="title"
        name='title' onChange={onchange} placeholder="add title"/>
  </div>

    <div className="form-group my-2">
    <label htmlFor="text " className='my-1'><h5>Description</h5> </label> 
      <input type="text" className="form-control" id="des"
        name='des' onChange={onchange} placeholder="add desc"/>
   </div>
    <div className='my-4'>
      <button type="submit" className="btn btn-danger"><i class="fa-solid fa-plus"></i> Save</button>
    </div>
  
</form>

<div class="container my-2">
<h2>All Notes</h2>
<div class="row">
{allNote.map(val=>{
     return  <div className=' col-lg-4 col-md-12 my-3'>
    <div className="card project-card-view "  >

  
  <div className="card-body">
  <h3 className="card-title"><i class="fa-solid fa-clipboard"></i> {val.title}</h3>
    <p><i class="fa-regular fa-pen-to-square"></i> {val.des}</p>
    <h6 ><i class="fa-solid fa-calendar-days"></i> {val.date.substring(0,10)}</h6>
    <p><i class="fa-regular fa-clock"></i> { val.date.substring(11,val.date.length)}</p>
    <button  type='submit' value={val._id} onClick={deleteButton} className="btn btn-danger"><i class="fa-solid fa-trash"></i> Delete</button>
    
   {/* <button type='submit' value={val._id}onClick={deleteButton}></button>  */}
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
