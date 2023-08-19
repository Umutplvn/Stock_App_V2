import Typography from "@mui/material/Typography";
import KpiCards from "../components/KpiCards";
import Chart from "../components/Chart";

const Home = () => {
  return (
    <div>
        <Typography color={"error"} component={"h3"} variant="h5">
        Dashboard
      </Typography>
      <KpiCards/>
      <Chart/>
    </div>
  )
}

export default Home