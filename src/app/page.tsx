"use client"
import React,{ useState } from 'react';
function CounterApp(){ 
 const[value,setvalue]=useState(0)
  let handleIncrement=()=>{ 
    setvalue(value+1); 

  }
  let handledecrement=()=>{ 
    setvalue(value-1); 
  }
  return ( 
    <div className="flex justify-center gap-3  items-center h-screen"><div><h1 className="font-bold text-2xl  ">Counter App</h1></div>
    
      <button className="bg-fuchsia-600 rounded-xl p-5" onClick={handleIncrement} > Increament</button>
      
      {value}
      <button className="bg-pink-600 rounded-xl p-5" onClick={handledecrement}>Decrement</button>
   </div>
  )
}
export default CounterApp;