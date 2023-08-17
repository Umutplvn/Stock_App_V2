import React, { useEffect, useState } from "react";
import { Typography, Box, Grid, Alert, Button } from "@mui/material";
import BrandCard from "../components/BrandCard";
import BrandModal from "../components/BrandModal";
import useStockData from "../hooks/useStockData";
import { useSelector } from "react-redux";
import { flex } from "../styles/globalStyles";

const Brands = () => {
  const [info, setInfo]=useState({name:"", image:""})
  const { brands } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const { getStockData } = useStockData();
  const handleOpen = () => setOpen(true);
  const handleClose = () => {setOpen(false), setInfo({})
};

  useEffect(() => {
    getStockData("brands");
  }, []);

  return (
    <Box>
      <Typography color={"error"} component={"h3"} variant="h5">
        Brands
      </Typography>

      <Button variant="contained" sx={{ mt: "10px" }} onClick={handleOpen}>
        New Brand
      </Button>

      
      <BrandModal open={open} handleClose={handleClose} info={info} setInfo={setInfo}/>

      <Grid container sx={flex} mt={4}>
        {brands?.map((brand) => (
          <Grid item key={brand.id}>
            <BrandCard brand={brand}  handleOpen={handleOpen} handleClose={handleClose} info={info} setInfo={setInfo}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Brands;
