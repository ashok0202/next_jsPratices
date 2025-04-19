"use client";
import Link from 'next/link';   
import React from 'react'
import { useRouter } from 'next/navigation';
import { Axios } from 'axios';

export default function Signup() {
    const[user,setUser]=React.useState({
        email:"",
        password:"",
        username:""
    })

    const onSignUp=async()=>{
        
    }
    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <h1>Signup</h1>
            <hr />
            <form>
            <label htmlFor="username">Username</label>
            <br />
            <input 
               type="text" 
               name="username" 
               id="username" 
               onChange={(e)=>setUser({...user,username:e.target.value})} />
            <br />
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
            <button onClick={onSignUp}>Signup</button>
            <br />
            </form>
        </div>
    )
}