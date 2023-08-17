import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useStockData from '../hooks/useStockData'


const Purchases = () => {   
  
const {purchases} =useSelector((state)=>state.stock)
const {getStockData} = useStockData()


useEffect(() => {
  getStockData("purchases")
}, [])


  return (
    <div>Purchases</div>
  )
}

export default Purchases