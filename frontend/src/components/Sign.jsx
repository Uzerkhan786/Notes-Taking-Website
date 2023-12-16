import React, {  useState } from 'react'
import{useNavigate} from 'react-router-dom'
import '../App.css';

const Sign = () => {
    const navigate=useNavigate();
    const[login,setLogin]=useState({
        name:'',
        password:''
    })
    const click=async(e)=>{
        e.preventDefault();
        console.log(login.name,login.password);
        const response=await fetch('http://localhost:5000/api/v1/loginuser',{
            method: "POST",
            body: JSON.stringify({
                name:login.name,
                password:login.password
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        const json=await response.json();
        if(!(json.success===true)){
          
          return console.log('username or password is incorrect');
        }
        
          navigate('/Home')
          //console.log(json.data.notes[0]);
          console.log(json.data._id);
          localStorage.setItem('userId',json.data._id);
        
        
         
            
    }
    const onchange=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value})
    }
  return (
    <div className='container' style={{width:'400px'}}>
     <h2>Signin</h2>
     <form onSubmit={click}>
     <div className="form-group my-3 py-2">
     <label htmlFor="text " className='my-1'><h5>Username</h5> </label> 
      <input type="text" className="form-control" id="username"
        name='name' onChange={onchange} placeholder="username"/>


    <div className="form-group my-3 py-2">
    <label htmlFor="text " className='my-1'><h5>Password</h5> </label> 
        <input type="text" className="form-control" id="password" 
        name='password' onChange={onchange} placeholder="password"/>
    </div>
    
    <div className='my-4'>
      <button type="submit" className="btn btn-danger">login</button>
    </div>
  </div>
</form>
<h2>New User,Please SignUp</h2>
    </div>
  )
}

export default Sign
