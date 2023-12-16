import { useState } from 'react';

import { useNavigate} from 'react-router-dom';


function Login() {
  //console.log(arr);
  // const notes=[{
  //   name:'saad',
  //   city:'bhopal'
  // },{
  //   name:'uzer',
  //   city:'bhopal'
  // }];
  const [notes,setNotes]=useState([])
  const[data,setData]=useState({
        name:'',
        city:''
  });
  const navigate=useNavigate();
 
  const handleSubmit=(event)=>{
    event.preventDefault();
   // notes.push(data)
  // console.log(data);
   //arr.push(data);
   //notes.push(data)
   //navigate('/Login')
    //console.log(arr);
    //console.log(arr);
  
  }
  return (
    <div className="App">
     <form  onSubmit={handleSubmit}>
      <input type="text"  name='name' onChange={(e)=>{
        setData({...data,[e.target.name]:e.target.value})
        }}/>
         <input type="text" name='city'  onChange={(e)=>{
        setData({...data,[e.target.name]:e.target.value})
        }}/>
    <button type='submit'>submit</button>
     </form>
   
     
    </div>
  );
}

export default Login;
