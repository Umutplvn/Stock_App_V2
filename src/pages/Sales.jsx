import React, { useEffect, useState } from 'react'
import useStockData from '../hooks/useStockData'
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SalesTable from '../components/SalesTable';
import SalesModal from '../components/SalesModal';


const Sales = () => {   
  
const {getStockData} = useStockData()

const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setInfo("")
    setOpen(false)};

const [info, setInfo] = useState(
  {
  brand_id: "",
  product_id: "",
  quantity: "",
  price: ""

})


useEffect(() => {
  getStockData("brands")
  getStockData("products")
  getStockData("sales")
}, [])


  return (
    <div>
      <Typography color={"error"} component={"h3"} variant="h5">
        Sales
      </Typography>

      <Button variant="contained" onClick={handleOpen} sx={{ mt: "10px" }} >
        New Sale
      </Button>

      <SalesModal handleOpen={handleOpen} open={open} handleClose={handleClose} info={info} setInfo={setInfo}/>
      <SalesTable info={info} setInfo={setInfo} handleOpen={handleOpen}/>
    </div>
  )
}

export default Sales