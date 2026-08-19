import React, { useContext, useEffect } from 'react'
import axiosInstance from '../../api/axiosInstance'
import authAxiosInstance from '../../api/authAxiosInstance.js';
import { UserContext } from '../../context/UserContext';
import { useCounterStore } from '../../api/store/useCounterStore';

export default function Cart() {
 /* const x=useContext(UserContext);*/
 const counter=useCounterStore( (state )=> state.counter );
 const increment=useCounterStore( (state) => state.increment)

  const token=localStorage.getItem('accessToken');
  console.log(token);

  const getItems=async ()=>{
    const response=await authAxiosInstance.get(`/Carts`);
    console.log(response); 
  }

  useEffect( ()=>{
        getItems();
  } , []);


  return (
    <>
     <div>Cart -- {counter}</div> 
     <button onClick={increment}>+</button>
    
    </>
  )
}
