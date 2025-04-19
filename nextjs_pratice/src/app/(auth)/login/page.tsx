"use client";
import Link from 'next/link';   
import React from 'react'
import { useRouter } from 'next/navigation';
import { Axios } from 'axios';

export default  function LoginPage() {
    const[user,setUser]=React.useState({
        email:"",
        password:"",
    })

    const onLogin=async()=>{
        
    }
    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <h1>Login</h1>
            <hr />
            <form>
            <label htmlFor="email">Email</label>
            <br />
            <input 
                type="email" 
                name="email" 
                id="email" 
                onChange={(e)=>setUser({...user,email:e.target.value})} />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input 
                type="password" 
                name="password" 
                id="password" 
                onChange={(e)=>setUser({...user,password:e.target.value})} />
            <br />
            <button onClick={onLogin}>Signup</button>
            <br />
            </form>
        </div>
    )
}