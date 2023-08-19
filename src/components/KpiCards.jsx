import Paper from "@mui/material/Paper";
import { Box, Grid } from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";
import { purple } from "@mui/material/colors";
import { amber } from "@mui/material/colors";
import { red } from "@mui/material/colors";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { paperStyle } from "../styles/globalStyles";
import { useSelector } from "react-redux";

const KpiCards = () => {

  const {purchases, sales}=useSelector((state)=>state.stock)
  console.log(purchases);

  const totalPurchase = purchases.map((item)=>Number(item.price_total)).reduce((acc, val)=>acc+val,0)
  const totalSale = sales.map((item)=>Number(item.price_total)).reduce((acc, val)=>acc+val,0)


  

  console.log(totalSale);
  console.log(totalPurchase);


  const cardData = [
    {
      id: 1,
      icon: <PaidIcon sx={{ fontSize: "3rem" }} />,
      title: "SALES",
      value: `$${totalSale}`,
      color: purple[800],
      bgColor: purple[100],
    },
    {
      id: 2,

      icon: <LocalAtmIcon sx={{ fontSize: "3rem" }} />,
      title: "PROFIT",
      value: `$${totalSale-totalPurchase}`,
      color: red[800],
      bgColor: red[100],
    },
    {
      id: 3,

      icon: <ShoppingCartIcon sx={{ fontSize: "3rem" }} />,
      title: "PURCHASES",
      value: `$${totalPurchase}`,
      color: amber[800],
      bgColor: amber[100],
    },
  ];

  return (
    <Grid
      container
      display={"flex"}
      flexWrap={"wrap"}
      justifyContent={"center"}
    >
      {cardData?.map((data) => (
        <Grid item key={data.id}>
          <Paper sx={paperStyle} elevation={5}>
            <Avatar
              sx={{
                backgroundColor: data.bgColor,
                color: data.color,
                width: "75px",
                height: "75px",
              }}
            >
              {data.icon}
            </Avatar>
            <Box>
              <Typography variant="button">{data.title}</Typography>
              <Typography sx={{ fontSize: "1.5rem", fontWeight: "600" }}>
                {data.value}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default KpiCards;
