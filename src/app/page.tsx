"use client"
import React, { useState } from "react";

function HomePage(){
  const[value,setValue]=useState(0)
  function Increment(){ 
    setValue(value+1)
  } 
  function Decrement(){ 
    setValue(value-1)
  } 

  return( 
    <div> 
     
      <h1 className="text-bold text-4xl flex justify-center py-12 ">Counter App </h1>
     <div className="flex justify-center  items-center gap-3 ">
      <button  className="bg-red-500 rounded-lg p-4 " onClick={Increment}>Increment</button>
      <div>{value}</div> 
      <button  className="bg-blue-500 rounded-lg p-4" onClick={Decrement} >Decrement</button>
      </div>

    </div>
  )
}
export default HomePage;