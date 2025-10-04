import React, { useReducer } from 'react'
import { reducerFn } from '../reducers/countreducer';

const Hooksfunction:React.FC = () => {

 const initialState={
        count:0, 
    }
 
const handlefunction=()=>{
    console.log("Called");
}

    const [state,dispatch]=useReducer(reducerFn,initialState);
  return (
    <div>
        <h2>{state.count}</h2>
        <button className='w-20 bg-amber-200 m-2' onClick={()=>dispatch({type:'INCREMENT',payload:'123'})}>Inc</button>
        <button className='w-20 bg-amber-200' onClick={()=>dispatch({type:'DECREMENT',payload:'123'})}>Drc</button>
         <button className='w-20 bg-amber-200' onClick={handlefunction}>Drc</button>
    </div>
  )
}

export default Hooksfunction;

