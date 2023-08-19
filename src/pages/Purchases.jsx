import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useStockData from "../hooks/useStockData";
import PurchaseModal from "../components/PurchaseModal";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PurchaseTable from "../components/PurchaseTable";

const Purchases = () => {
  const { getStockData } = useStockData();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setInfo("");
    setOpen(false);
  };

  const [info, setInfo] = useState({
    firm_id: "",
    brand_id: "",
    product_id: "",
    quantity: "",
    price: "",
  });

  useEffect(() => {
    getStockData("firms");
    getStockData("brands");
    getStockData("products");
    getStockData("purchases");
  }, []);

  return (
    <div>
      <Typography color={"error"} component={"h3"} variant="h5">
        Purchases
      </Typography>

      <Button variant="contained" onClick={handleOpen} sx={{ mt: "10px" }}>
        New Purchase
      </Button>

      <PurchaseModal
        handleOpen={handleOpen}
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      <PurchaseTable info={info} setInfo={setInfo} handleOpen={handleOpen} />
    </div>
  );
};

export default Purchases;
