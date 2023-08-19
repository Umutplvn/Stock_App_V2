import { Grid } from "@mui/material";
import { Card, Title, LineChart } from "@tremor/react";
import { useSelector } from "react-redux";

const dataFormatter = (number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`;

const Chart = () => {
  const { sales, purchases } = useSelector((state) => state.stock);

  const salesData = sales?.map((item) => ({
    date: item.createds,
    quantity: item.quantity,
    price: Number(item.price_total),
  }));

  const purchaseData = purchases?.map((item) => ({
    date: item.createds,
    quantity: item.quantity,
    price: Number(item.price_total),
  }));


  return (
    <Grid container justifyContent="center" spacing={4} mt={4}>

      <Grid item xs={12} md={6}>
        <Card>
          <Title>Total Sales(USD)</Title>
          <LineChart
            className="mt-6"
            data={salesData}
            index="date"
            categories={["qantity", "price"]}
            colors={["emerald, green"]}
            valueFormatter={dataFormatter}
            yAxisWidth={40}
          />
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card>
          <Title>Total Sales(USD)</Title>
          <LineChart
            className="mt-6"
            data={purchaseData}
            index="date"
            categories={["qantity", "price"]}
            colors={["emerald, green"]}
            valueFormatter={dataFormatter}
            yAxisWidth={40}
          />
        </Card>
      </Grid>
    </Grid>
  );
};
export default Chart;
