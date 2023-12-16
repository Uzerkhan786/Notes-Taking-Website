import React from 'react'
import { useNavigate} from 'react-router-dom';
import GetNotes from './GetNotes';
import AddNote from './AddNote';

const Home = () => {
 
  const navigate=useNavigate();
  const click=()=>{
    navigate('/Signin')
  }
  return (
    <div>
      <AddNote/>
      {/* <GetNotes/> */}
    </div>
  )
}

export default Home
