import React, { useEffect } from 'react'
import { Typography, Box, Grid, Alert, Button } from "@mui/material"
import BrandCard from '../components/BrandCard'
import BrandModal from '../components/BrandModal'
import useStockData from '../hooks/useStockData'
import { useSelector } from 'react-redux'
import { flex } from '../styles/globalStyles'


const Brands = () => {

const {getStockData}=useStockData()
const {brands}= useSelector((state)=>state.stock)

useEffect(() => {
getStockData("brands")
}, [])





  return (
    <Box >
<Typography color={"error"} component={"h3"} variant='h5'>
  Brands
</Typography>

<Button variant='contained' sx={{mt:"10px"}}> New Brand</Button>

<BrandModal/>



<Grid container sx={flex} mt={4}>
          {brands?.map((brand) => (
            <Grid item key={brand.id}>
              <BrandCard brand={brand}  />
            </Grid>
          ))}
        </Grid>

    </Box>
    )
}

export default Brands