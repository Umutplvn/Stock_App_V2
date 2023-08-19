import { Grid } from "@mui/material";
import { Card, Title, LineChart } from "@tremor/react";
import { useSelector } from "react-redux";

const dataFormatter = (number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`;

const Chart = () => {
  const { sales, purchases } = useSelector((state) => state.stock)

  const salesData = sales?.map((item) => ({
    date: item.createds,
    quantity: item.quantity,
    price: Number(item.price_total),
  }))

  const purchasesData = purchases?.map((item) => ({
    date: item.createds,
    price: Number(item.price_total),
  }))

  return (
    <Grid container justifyContent="center" spacing={4} mt={4}>

<Grid item xs={12} md={6}>
        <Card>
          <Title>Total Sales (USD)</Title>
          <LineChart
            className="mt-4"
            data={salesData}
            index="date"
            categories={["quantity", "price"]}
            colors={["red", "blue"]}
            valueFormatter={dataFormatter}
          />
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card>
          <Title>Total Purchases (USD)</Title>
          <LineChart
            className="mt-4"
            data={purchasesData}
            index="date"
            categories={["price"]}
            colors={["green"]}
            valueFormatter={dataFormatter}
            
          />
        </Card>
      </Grid>
    </Grid>
  );
};
export default Chart;
