import React,{useState} from 'react'

const UserDetailsApi = ({user,setusers}) => {
  const[isEditing,setEditing]=useState(false);
  const[username,setUsername]=useState(user.name);
  const[email,setEmail]=useState(user.email);
  return (
    <div>
        <div>
            <button onClick={()=>{
              setEditing((currrentState)=>!currrentState)
            }}>Edit </button>
            <button onClick={()=>setusers(users=>users.filter(u=>u.id!==user.id))}>Delete </button>
            <button>Save </button>
        </div>
        <div>
            <b>ID :</b>
            <span>{user.id}</span>
            <br />
            <b>Name: </b>
            <span>{isEditing?(<input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>) :(user.name)}</span>
            <br/>
            <b>Email: </b>
            <span>{isEditing?(<input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>):(user.email) }</span>
        </div>
      
    </div>
  )
}

export default UserDetailsApi
