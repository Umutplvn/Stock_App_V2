import {useEffect, useState} from "react";
import ProductTable from "../components/ProductTable";
import ProductModal from "../components/ProductModal";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useStockData from "../hooks/useStockData";
import { useSelector } from "react-redux";


const Sales = () => {
  const {getStockData}= useStockData()
  const { sales } = useSelector((state) => state.stock)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
getStockData("sales")
getStockData("categories")
getStockData("brands")

  }, [])


  return (
    <div>
        <Typography color={"error"} component={"h3"} variant="h5">
        Sales
      </Typography>

      <Button variant="contained" onClick={handleOpen} sx={{ mt: "10px" }} >
        New Sale
      </Button>
{/* 
      <ProductModal open={open} handleClose={handleClose}/>
      <ProductTable /> */}
    </div>
  );
};

export default Sales;
