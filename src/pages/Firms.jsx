import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFail, fetchStart, getFirmsSuccess } from '../features/stockSlice'

const Firms = () => {
  const dispatch =useDispatch()
  const {token}=useSelector((state)=>state.auth)
  const getFirms= async()=>{
    
    dispatch(fetchStart())
try {
    const {data} = await axios(`${import.meta.env.VITE_BASE_URL}/stock/firms/`, {
      headers: {Authorization: `Token ${token}`}
    
    }) 
    console.log(data);
    dispatch(getFirmsSuccess(data))
} catch (error) {
  console.log(error);
  dispatch(fetchFail())
}}

useEffect(() => {
getFirms()
}, [])


  return (
    <div>Firms</div>
  )
}

export default Firms