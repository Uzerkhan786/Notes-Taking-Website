import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
     const [notes,setNotes]=useState([{
      title:'',
      des:' '
     }])
     const [searchTitle,setTitle]=useState({
      title:''
     })
     useEffect(()=>{
      fetch(`https://notetaking-iu1x.onrender.com/api/v1/getall`)
    .then(data=>data.json())
    .then(json=>{
      //console.log(json.data)
      setNotes(json.data)
    }) 
    
    },[])
  const searchNote=(e)=>{
    e.preventDefault();
    setTitle(searchTitle);
    const a=notes.filter(val=>
       val.title===searchTitle.title  
    )
    console.log(a);
  }
  const onchange=(e)=>{
    setTitle({...searchTitle,[e.target.name]:e.target.value})
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div class="container-fluid">
  <Link className="navbar-brand" to="/"><i class="fa-solid fa-pen"></i> Notes</Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
      <li className="nav-item active">
      <Link class="nav-link a" aria-current="page" to="/Home"><i class="fa-solid fa-house"></i> Home</Link>
      </li>  
   </ul>

    <form className="form-inline my-2 my-lg-0" onSubmit={searchNote}>
      <input className="form-control mr-sm-2" type="search" name='title' 
       onChange={onchange}  placeholder="Search Notes" aria-label="Search"/>
      <button className="btn btn-dark my-2 my-sm-0" type="submit">Search</button>
    </form>

    <ul className="navbar-nav ">
      <li className="nav-item active mx-2">
      <Link style={{color:'whitesmoke'}} to="/Signin"> <button className="btn btn-dark  my-2 my-sm-0" type="submit">login</button> </Link>
      </li>
      <li className="nav-item active mx-2">
      <Link style={{color:'whitesmoke'}} to="/Signup"> <button className="btn btn-dark  my-2 my-sm-0" type="submit">Signup</button> </Link>
      </li>  
   </ul>

  </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
