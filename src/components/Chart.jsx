import { Card, Title, LineChart } from "@tremor/react";
import { useSelector } from "react-redux";

const dataFormatter = (number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`;

const Chart = () => {
  const { sales } = useSelector((state) => state.stock);

  const salesData = sales?.map((item) => ({
    date: item.createds,
    // quantity: item.quantity,
    price: Number(item.price_total),
  }));


return (
  <div>
    <Card>
      <Title>Total Sales(USD)</Title>
      <LineChart
        className="mt-6"
        data={salesData}
        index="date"
        categories={["price"]}
        colors={["emerald, green"]}
        valueFormatter={dataFormatter}
        yAxisWidth={40}
      />
    </Card>
  </div>
)
}
export default Chart;
